import React from 'react'
import Navbar from '../Home/_components/Navbar';
import Footer from '../Home/_components/Footer';
import { Outlet } from 'react-router-dom';

export default function Userpage() {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    )
}
