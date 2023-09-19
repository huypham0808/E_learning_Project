import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { fetchCourseCate } from '../../../../redux/types/actions';
import { actLogOut } from '../../../../redux/types/actions';
import { Input } from 'antd';
import '../../../../assets/style.css'

const { Search } = Input;
export default function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.CourseCateReducer);
    const [keyWord, setKeyWord] = useState("");

    //Render Course Category
    const renderCourseCate = () => {
        return data?.map((category, index) => {
            return (
                <li key={index}>
                    <Link to={`/danhmuc/${category.maDanhMuc}`}>{category.tenDanhMuc}</Link>
                </li>
            );
        })
    };
    useEffect(() => {
        dispatch(fetchCourseCate());
    }, []);

    const onSearch = (keyWord) => {
        if (keyWord) {
            navigate(`/search/${keyWord}`, { replace: true });
            setKeyWord("");
        }
    }
    //Handler Mobile Toggle 
    const handleMobileToggle = () => {
        const navbar = document.querySelector("#navbar");
        const mobileNavToggle = document.querySelector(".mobile-toggle");
        navbar.classList.toggle("navbar-mobile");
        mobileNavToggle.classList.toggle("bars-list");
        mobileNavToggle.classList.toggle("bars-x");
    };
    //Handle Dropdown Click 
    const handleDropDownClick = (e) => {
        const navbar = document.querySelector("#navbar");
        const dropDown = e.currentTarget.nextElementSibling;
        if (navbar.classList.contains("navbar-mobile")) {
            e.preventDefault();
            dropDown.classList.toggle("dropdown-active");
        }
    }
    const renderLogin = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            return (
                <div>
                    <Link to="/user/login" className="btn">Đăng nhập</Link>
                    <Link to="/user/register" className="get-started-btn">Đăng ký</Link>
                </div>
            );
        } else {
            return (
                <div className='btn-group'>
                    <button
                        type='button'
                        className='btn btn-warning dropdown-toggle'
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {user.taiKhoan}
                    </button>
                    <ul className='dropdown-menu'>
                        {user.maLoaiNguoiDung === "GV" && (
                            <>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        style={{ fontSize: 16 }}
                                        to="/admin/courses"> Vào trang quản trị
                                    </Link>
                                </li>
                                <li>
                                    <hr className='dropdown-divider' />
                                </li>
                            </>
                        )}
                        <li>
                            <Link
                                className="dropdown-item"
                                to="/user/profile"
                                style={{ fontSize: 16 }}>
                                Thông tin tài khoản
                            </Link>
                        </li>
                        <li>
                            <hr className='dropdown-divider' />
                        </li>
                        <li>
                            <button className='dropdown-item'
                                style={{ fontSize: 16 }}
                                onClick={() => dispatch(actLogOut(navigate))}>
                                Đăng xuất
                            </button>
                        </li>
                    </ul>
                </div>
            )
        }
    };
    return (
        <header id='header' className='fixed-top'>
            <div className='container-fluid container-lg d-flex align-items-center justify-content-between'>
                <h1 className='logo'>
                    <Link to="/">H-learning</Link>
                </h1>
                <Search placeholder="Tìm kiếm khóa học" onChange={(e) => setKeyWord(e.target.value)}
                    onSearch={onSearch}
                    value={keyWord}
                    style={{ width: 200 }} />
                <nav id='navbar' className='navbar order-last order-xl-0'>
                    <ul>
                        <li className='dropdown'>
                            <Link to="/" onClick={handleDropDownClick}>
                                <span>DANH MỤC</span><i className="fa-solid fa-chevron-down"></i>
                            </Link>
                            <ul>{renderCourseCate()}</ul>
                        </li>
                        <li>
                            <NavLink to="/khoahoc">KHÓA HỌC</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">BLOG</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sukien">SỰ KIỆN</NavLink>
                        </li>
                        <li>
                            <NavLink to="/thongtin">THÔNG TIN</NavLink>
                        </li>
                    </ul>
                    <i className="fa-solid fa-bars bars-list mobile-toggle"
                        onClick={handleMobileToggle}></i>
                </nav>
                {renderLogin()}
            </div>
        </header>
    )
};
