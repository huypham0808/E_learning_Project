import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../../../assets/style.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 position-fixed fixed-top elearningNav">
            <NavLink className="navbar-brand align-items-center ml-3 text-center" style={{ height: "100px" }} to="/home">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/e-learning-4119535-3418176.png" alt='/'
                    style={{ height: '100px', width: '100%', padding: 0 }}></img>
            </NavLink>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm" aria-label="Search" />
            </form>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropbtn" to="/home">
                            <i class="fa-solid fa-bars mr-2"></i>
                            DANH MỤC
                        </NavLink>
                        <div className="dropdown-content" style={{ left: 0 }}>
                            <NavLink href="/" alt="/">LẬP TRÌNH BACKEND</NavLink>
                            <NavLink href="/" alt="/">THIẾT KẾ WEB</NavLink>
                            <NavLink href="/" alt="/">LẬP TRÌNH DI ĐỘNG</NavLink>
                            <NavLink href="/" alt="/">LẬP TRÌNH FRONT END</NavLink>
                            <NavLink href="/" alt="/">LẬP TRÌNH FULL STACK</NavLink>
                            <NavLink href="/" alt="/">TƯ DUY LẬP TRÌNH</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/khoahoc">
                            KHÓA HỌC
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/blog">
                            BLOG
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/sukien">
                            SỰ KIỆN
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/thongtin">
                            THÔNG TIN
                        </NavLink>
                    </li>
                </ul>
                <div className='btn btn-warning ml-3 text-white'>
                    ĐĂNG NHẬP
                </div>
            </div>
        </nav>
    )
};
