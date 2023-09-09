import React from 'react';
import './style.css'
//import { Link } from 'react-router-dom';
//import InputformName from '../../../../components/Inputform';

export default function Footer() {
    return (
        <footer className='footerPage mt-5' style={{ background: "#f0f8ff" }}>
            <div className="footerBody">
                <div>
                    <div className='row textCardTitle'>
                        <div className="p-2 col-md-4 col-sm-6">
                            <a href="" className='mr-5 textLogo'>
                                <span className='textE'>H </span>
                                learning
                                <i className='far fa-keyboard iconLogo'></i>
                            </a>
                            <ul className='menuFooter'>
                                <li>
                                    <i className='fas fa-phone-alt iconFooter'></i>
                                    <span>1800-123-4567</span>
                                </li>
                                <li>
                                    <i className='fas fa-envelope-open-text iconFooter'></i>
                                    <span>devit@gmail.com</span>
                                </li>
                                <li>
                                    <i className='fas fa-map-marker-alt iconFooter'></i>
                                    <span>Đà Nẵng</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-2 col-md-2 col-sm-3 col-6">
                            <h3 className='textFooterTitle'>Liên kết</h3>
                            <ul className='menuFooter'>
                                <li>
                                    <i className='fas fa-chevron-right'></i>
                                    <span> Trang chủ</span>
                                </li>
                                <li>
                                    <i className='fas fa-chevron-right'></i>
                                    <span> Dịch vụ</span>
                                </li>
                                <li>
                                    <i className='fas fa-chevron-right'></i>
                                    <span> Nhóm</span>
                                </li>
                                <li>
                                    <i className='fas fa-chevron-right'></i>
                                    <span> Blog</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-2 col-md-2 col-sm-3 col-6">
                            <h3 className='textFooterTitle'>Khoá học</h3>
                            <ul className='menuFooter'>
                                <li>
                                    <i className='fas fa-chevron-right'></i>
                                    <span> Front End</span>
                                </li>
                                <li>
                                    <i className='fas fa-chevron-right'></i>
                                    <span> Back End</span>
                                </li>
                                <li>
                                    <i className='fas fa-chevron-right'></i>
                                    <span> Full Stack</span>
                                </li>
                                <li>
                                    <i className='fas fa-chevron-right'></i>
                                    <span> NodeJS</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-2 col-md-4">
                            <h3 className='textFooterTitle'>Đăng ký tư vấn</h3>
                            <form action="">
                                <input type="text" className='formFooter' placeholder='Họ và tên' />
                                <input type="text" className='formFooter' placeholder='Email' />
                                <input type="text" className='formFooter' placeholder='Số điện thoại' />
                            </form>
                            <button className='btn btn-warning text-white mt-2'>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='footerExtra'>
                <div className='text-center '>
                    <i className="fab fa-facebook-f iconFooter iconSize" />
                    <i className="fab fa-twitter iconFooter iconSize" />
                    <i className="fab fa-google iconFooter iconSize" />
                    <i className="fab fa-instagram iconFooter iconSize" />
                    <i className="fab fa-linkedin iconFooter iconSize" />
                    <i className="fab fa-github iconFooter iconSize" />
                </div>
                <div className="text-center mt-3" >
                    © 2023 Copyright. All rights reserved.
                    <a className="text-dark" href="https://github.com/huypham0808/E_learning_Project">By Huy Pham</a>
                </div>

            </div>
        </footer>
    )
};
