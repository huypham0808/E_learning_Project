import React from 'react'
import {Outlet} from 'react-router-dom';
import ListofCourse from '../../components/ListCourse'
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';


export default function HomeScreen(props) {
   
    return (
        <div className='container'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
};
