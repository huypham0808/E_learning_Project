import React, { useState } from "react";
import "../../../assets/style.css";
import { Link, Navigate, useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    HomeOutlined,
    PlayCircleOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";
import { fetchListCourse, getListUsers, actLogOut } from '../../../redux/types/actions';

import { Input, Layout, Menu } from 'antd';

const { Search } = Input;
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem(
        <Link to="/">Về trang chủ</Link>,
        "1",
        <HomeOutlined />),
    getItem(
        <Link to="/admin/courses">Quản lý khóa học</Link>,
        "2",
        <PlayCircleOutlined />,
    ),
    getItem(
        <Link to="/admin/users">Quản lý người dùng</Link>,
        "3",
        <PlusCircleOutlined />,
    ),

];
const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        alert("Bạn cần phải đăng nhập.");
        return <Navigate replace to="/user/login" />;
    }
    if (user.maLoaiNguoiDung !== "GV") {
        alert("Bạn không có quyền truy cập trang này.");
        return <Navigate replace to="/" />;
    }

    const pathName = window.location.pathname;
    const isVisible = pathName === "/admin/courses" || pathName === "/admin/users";
    const onSearch = (value) => {
        if (pathName === "/admin/courses") {
            dispatch(fetchListCourse(value));
        } else if (pathName === "/admin/users") {
            dispatch(getListUsers(value));
        }
    }
    return (
        <Layout style={{
            minHeight: "100vh",
        }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                width={250}
            >
                <Link
                    to="/"
                    className="d-flex align-items-center justify-content-center py-2"
                >
                    <img className="mr-3" src="https://media.istockphoto.com/id/1146021242/vector/distant-learning-online-education-graduate-hat-on-a-laptop.jpg?s=612x612&w=0&k=20&c=X3prrYH9KfPdDke0DGdnRjk-sKBgebP6byGMg-ce8Rc=" width={50} alt="E-learning" />
                    <span className="text-primary" style={{ fontSize: 20 }} hidden={collapsed}>
                        H-Learning
                    </span>
                </Link>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={["2"]}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout style={{ width: "auto" }}>
                <Header
                    className="d-flex justify-content-between align-items-center"
                    style={{ backgroundColor: "gainsboro" }}
                >
                    {isVisible && (
                        <Search
                            placeholder={`Nhập tên ${pathName === "/admin/courses" ? "khóa học" : "người dùng"
                                } để tìm kiếm`}
                            allowClear
                            onSearch={onSearch}
                            style={{
                                width: "400px",
                            }}
                        />
                    )}
                    <div className="btn-group ms-auto">
                        <button
                            type="button"
                            className="btn btn-primary dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Xin chào {user.taiKhoan}
                        </button>
                        <ul className="dropdown-menu">
                            <li style={{ lineHeight: "25px" }}>
                                <Link
                                    className="dropdown-item"
                                    style={{ fontSize: 15 }}
                                    to="/user/profile"
                                >
                                    Thông tin tài khoản
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li style={{ lineHeight: "25px" }}>
                                <button
                                    className="dropdown-item"
                                    style={{ fontSize: 15 }}
                                    onClick={() => dispatch(actLogOut(navigate))}
                                >
                                    Đăng xuất
                                </button>
                            </li>
                        </ul>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: "0 16px",
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <div className="text-center bg-secondary py-3">
                    H-Learning ©2023 Created by Huy Pham
                </div>
            </Layout>
        </Layout>
    )
}
export default Dashboard;