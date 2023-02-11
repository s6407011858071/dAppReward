import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from "./components/Layout";
import {Routes, Route, Outlet, Link, Navigate} from "react-router-dom";
import Card from "./components/Pages/Card";
import Coupon from "./components/Pages/Coupon";
import Claims from "./components/Pages/Claims";


function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="max-w-sm mx-auto">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index path="card" element={<Card/>}/>
                    <Route path="coupon" element={<Coupon/>}/>
                    <Route path="claims" element={<Claims/>}/>
                    <Route path="*" element={<Navigate to="/card" replace/>}/>
                </Route>
            </Routes>
        </div>


    )
}

export default App
