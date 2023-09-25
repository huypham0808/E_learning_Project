import React from 'react'
import "../../../assets/style.css";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchListCourse } from '../../../redux/types/actions';




function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const Dashboard =() => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user) {
        alert("Bạn cần phải đăng nhập.");
        return <Navigate replace to ="/login"/>;
    }
    if(user.maLoaiNguoiDung !== "GV") {
        alert("Bạn không có quyền truy cập trang này.");
        return <Navigate replace to="/"/>;
    }

    const pathName = window.location.pathname;
    const isVisible = pathName === "/admin/courses" || pathName === "/admin/users";
    const onSearch = (value) => {
        if(pathName === "/admin/courses") {
            dispatch()
        }
    }
    return (
        <div>
            <div id="wrapper">
                {/* Sidebar */}
                <div id="sidebar-wrapper" className='shadow p-3 mb-5'>
                    <div className='siderbar-header pt-4 text-center w-100'>
                        <a href='/' type='button' className='btn btn-light mx-2 text-center'>
                            <i class="fa-solid fa-house fa-2x mr-2"></i>
                            H-LEARNING
                        </a>
                    </div>
                    <ul className="sidebar-nav">
                        <li>
                            <Link href='/admin/quanlykhoahoc'><i class="fa-solid fa-briefcase mr-2"></i>Quản lý khóa học</Link>
                        </li>
                        <li>
                            <Link href='/admin/quanlynguoidung'><i className="fa-solid fa-user mr-2"></i>Quản lý người dùng</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;