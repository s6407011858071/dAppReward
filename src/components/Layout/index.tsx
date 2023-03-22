import React, {useEffect} from "react";
import {Outlet, useLocation, Link} from 'react-router-dom';
import {useAccount, useConnect, useDisconnect} from "wagmi";
import {InjectedConnector} from 'wagmi/connectors/injected'


const ActiveLink = (props: React.PropsWithChildren<{ to: string }>) => {
    const location = useLocation();
    return (
        <Link to={props.to}>

            <div
                className={location.pathname == props.to ? "text-secondary" : "text-slate-600"}
            >
                {props.children}
            </div>
        </Link>

    )
}

export default function () {


    const {isConnected} = useAccount()


    // @ts-ignore
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col">
                <div className="sticky top-0 z-50 bg-white shadow-2xl">
                    <div className="w-full navbar ">
                        {/*<div className="flex-none lg:hidden">*/}
                        {/*    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                        {/*             className="inline-block w-6 h-6 stroke-current">*/}
                        {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                        {/*                  d="M4 6h16M4 12h16M4 18h16"></path>*/}
                        {/*        </svg>*/}
                        {/*    </label>*/}
                        {/*</div>*/}
                        <div className=" flex flex-row items-center  tracking-wide font-bold text-lg w-full">
                            <div className="flex-grow">
                                <span className="text-secondary">Reward</span>
                                {/*<span className="text-primary">Membership</span>*/}
                            </div>
                            <ConnectWalletButton/>

                        </div>
                        <div className="flex-none hidden lg:block">
                            {/*<ul className="menu menu-horizontal">*/}
                            {/*    <li><a>Navbar Item 1</a></li>*/}
                            {/*    <li><a>Navbar Item 2</a></li>*/}
                            {/*</ul>*/}
                        </div>

                    </div>
                    {isConnected && (
                        <div className="flex flex-row gap-[20px] text-[13px] font-bold pl-[18px] tracking-wider mb-2">
                            <ActiveLink to="/card">
                                Card
                            </ActiveLink>
                            {/*<ActiveLink to="/coupon">*/}
                            {/*    Coupon*/}
                            {/*</ActiveLink>*/}
                            <ActiveLink to="/claims">Claims</ActiveLink>
                        </div>
                    )}

                </div>
                <div className="mb-10">
                    <Outlet/>

                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100">

                    {/*<li><a>Sidebar Item 1</a></li>*/}
                    {/*<li><a>Sidebar Item 2</a></li>*/}

                </ul>

            </div>
        </div>
    )
}

const ConnectWalletButton = () => {

    const {isConnected, address} = useAccount()
    const {connect,} = useConnect({
        connector: new InjectedConnector(),
    })
    const {disconnect} = useDisconnect()


    return (

        <div
            onClick={() => {
                if (isConnected) {
                    disconnect()
                } else {
                    connect()
                }
            }}
            className="bg-primary text-white rounded-md p-1
                cursor-pointer hover:opacity-75 text-xs
                truncate max-w-[120px]">
            {isConnected ? `${address?.slice(0,3)}...${address?.slice(-4)}` : "Connect Wallet"}
        </div>
    )
}


