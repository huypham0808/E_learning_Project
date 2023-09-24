import React from 'react'
import "../../../assets/style.css";

export default function Dashboard() {
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
                            <a href='/admin/quanlykhoahoc'><i class="fa-solid fa-briefcase mr-2"></i>Quản lý khóa học</a>
                        </li>
                        <li>
                            <a href='/admin/quanlynguoidung'><i className="fa-solid fa-user mr-2"></i>Quản lý người dùng</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
