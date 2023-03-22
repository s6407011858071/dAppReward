import {useAccount, useConnect, useDisconnect,} from 'wagmi'
import {avalanche, bsc, bscTestnet, polygonMumbai} from 'wagmi/chains'

import './App.css'
import Layout from "./components/Layout";
import {Routes, Route, Outlet, Link, Navigate} from "react-router-dom";
import Card from "./components/Pages/Card";
import Coupon from "./components/Pages/Coupon";
import Claims from "./components/Pages/Claims";
import {WagmiConfig, configureChains, createClient} from 'wagmi'
import {InjectedConnector} from 'wagmi/connectors/injected'
import {mainnet, optimism} from 'wagmi/chains'
import {publicProvider} from 'wagmi/providers/public'
import {jsonRpcProvider} from 'wagmi/providers/jsonRpc'

import Home from "./components/Pages/Home";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";


dayjs.extend(relativeTime)

const {chains, provider} = configureChains(
    [polygonMumbai],
    [
        jsonRpcProvider({
            rpc: (chain) => ({
                http: `https://rpc.ankr.com/polygon_mumbai`,
            }),
        }),
    ],
)

const client = createClient({
    autoConnect: true,
    connectors: [new InjectedConnector({})],
    provider,
})
const App = () => {
    const {isConnected} = useAccount()
    return (
        <>
            <div>
                <Routes>
                    {isConnected ? (
                        <Route path="/*" element={<Layout/>}>
                            <Route index path="card" element={<Card/>}/>
                            <Route path="coupon" element={<Coupon/>}/>
                            <Route path="claims" element={<Claims/>}/>
                            <Route path="*" element={<Navigate to="/card" replace/>}/>
                        </Route>
                    ) : (
                        <Route path="/*" element={<Layout/>}>
                            <Route index path="home" element={<Home/>}/>
                            <Route path="*" element={<Navigate to="/home" replace/>}/>
                        </Route>
                    )}
                </Routes>
            </div>
        </>
    )
}


const aClient = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/s6407011858071/rwptoken',
    cache: new InMemoryCache(),
});

const AppContainer = () => {
    return (
        <WagmiConfig client={client}>
            <ApolloProvider client={aClient}>
                <App/>
            </ApolloProvider>

        </WagmiConfig>
    )
}

export default AppContainer
