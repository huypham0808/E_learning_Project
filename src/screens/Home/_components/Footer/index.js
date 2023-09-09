import React from 'react';
import './style.css'
//import { Link } from 'react-router-dom';
//import InputformName from '../../../../components/Inputform';

export default function Footer() {
    return (
        <footer id="elearningFooter" className='elearningFooter mt-5'>
            {/* Section: Links  */}
            <section className style={{ background: "#f0f8ff" }}>
                <div className="container text-center text-md-start">
                    {/* Grid row */}
                    <div className="row">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* Content */}
                            <h6 className="text-uppercase fw-bold">Company name</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                            <p>
                                Here you can use rows and columns to organize your footer
                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold">Products</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                            <p>
                                <a href="#!" className="text-white">MDBootstrap</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">MDWordPress</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">BrandFlow</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">Bootstrap Angular</a>
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold">Useful links</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                            <p>
                                <a href="#!" className="text-dark">Your Account</a>
                            </p>
                            <p>
                                <a href="#!" className="text-dark">Become an Affiliate</a>
                            </p>
                            <p>
                                <a href="#!" className="text-dark">Shipping Rates</a>
                            </p>
                            <p>
                                <a href="#!" className="text-dark">Help</a>
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                            <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
                            <p><i className="fas fa-envelope mr-3" /> info@example.com</p>
                            <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
                            <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
            </section>
            <hr/>
            <section className='d-flex justify-content-between p-3'>
                {/* Copyright */}
                <div className="text-center" >
                    © 2023 Copyright. All rights reserved.
                    <a className="text-white" href="https://github.com/huypham0808/E_learning_Project">By Huy Pham</a>
                </div>
                {/* Right */}
                <div className='align-items-center '>
                    <a href className="d-flex text-white align-middle rounded-circle d-inline-block align-items-center text-center" style={{background:"#6351ce", width:"40px", height:"40px"}}>
                        <i className="fab fa-facebook-f " />
                    </a>
                    <a href className="text-white me-4 ml-3">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href className="text-white me-4 ml-3">
                        <i className="fab fa-google" />
                    </a>
                    <a href className="text-white me-4 ml-3">
                        <i className="fab fa-instagram" />
                    </a>
                    <a href className="text-white me-4 ml-3">
                        <i className="fab fa-linkedin" />
                    </a>
                    <a href className="text-white me- ml-3">
                        <i className="fab fa-github" />
                    </a>
                </div>
            </section>
        </footer>
    )
};
