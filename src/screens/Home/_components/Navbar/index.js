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
    const [keyword, setKeyWord] = useState("");

    //Render Course Category
    const renderCourseCate = () => {
        return data?.map((category, index) => {
            return (
                <li key={index}>
                    <Link className="dropdown-item" to={`/danhmuc/${category.maDanhMuc}`}>{category.tenDanhMuc}</Link>
                </li>
            );
        })
    };
    useEffect(() => {
        dispatch(fetchCourseCate());
    }, []);

    const onSearch = (keyword) => {
        if (keyword) {
            navigate(`/tim-kiem/${keyword}`, { replace: true });
            setKeyWord("");
        }
    }
    const renderLogin = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const handleLogout = (dispatch) => {
            dispatch(actLogOut(navigate));
        };
        if (!user) {
            return (
                <div>
                    <Link to="/user/login" className="btn btn-outline-success mr-3">Đăng nhập</Link>
                    <Link to="/user/register" className="btn btn-success">Đăng ký</Link>
                </div>
            );
        } else {
            return (
                <div className='btn-group'>
                    <button
                        type="button"
                        className="btn btn-success dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Xin chào {user.taiKhoan}
                    </button>
                    <ul className='dropdown-menu'>
                        {user.maLoaiNguoiDung === "GV" && (
                            <>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        style={{ fontSize: 16 }}
                                        to="/admin/courses">
                                        Vào trang quản trị
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
                                style={{ fontSize: 16 }}
                                to="/user/profile"
                            >
                                Thông tin tài khoản
                            </Link>
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
        <header className='fixed-top '>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className='container-fluid container-lg d-flex justify-content-between'>
                    <Link to="/" className="navbar-brand" href="#" style={{ fontSize: "30px" }}>H-learning</Link>
                    <Search placeholder="Tìm kiếm khóa học" onChange={(e) => setKeyWord(e.target.value)}
                        onSearch={onSearch}
                        value={keyword}
                        style={{ width: 200 }} />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
                        <ul className="navbar-nav elearning__CateList">
                            <li className="nav-item dropdown active course_Cate_List">
                                <Link to="/" className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    DANH MỤC
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {renderCourseCate()}
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/khoahoc" className="nav-link" href="#">KHOÁ HỌC <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/sukien" className="nav-link" href="#">SỰ KIỆN</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/thongtin" className="nav-link" href="#">THÔNG TIN</NavLink>
                            </li>
                        </ul>
                    </div>
                    {renderLogin()}
                </div>

            </nav>
        </header>
    )
};
