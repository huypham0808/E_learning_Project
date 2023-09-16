import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, NavLink } from 'react-router-dom';
import { fetchCourseCate } from '../../../../redux/types/actions';
import '../../../../assets/style.css'

export default function Navbar() {
    //useState useNavigate const navigate = useNavigate();
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.CourseCateReducer);
    //const [keyWord, setKeyWord] = useState("");

    //Render Course Category
    const renderCourseCate = () => {
        return data?.map((category,index) => {
            return (
                <li key={index}>
                    <Link to={`/danhmuc/${category.maDanhMuc}`}>{category.tenDanhMuc}</Link>
                </li>
            );
        })
    };
    useEffect(() => {
        dispatch(fetchCourseCate());
    },[]);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 position-fixed fixed-top elearningNav">
            <NavLink className="navbar-brand align-items-center text-center" style={{ height: "100px" }} to="/">
                <img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/e-learning-4119535-3418176.png" alt='/'
                    style={{ height: '100px', width: '100%', padding: 0 }}></img>
            </NavLink>
            <input className="form-control mr-sm-2 txtSearch" type="search" placeholder="Tìm kiếm" aria-label="Search" />

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse w-50" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 w-100">
                    <li className="nav-item dropdown mr-2">
                        <NavLink className="nav-link dropbtn" to="/">
                            <i class="fa-solid fa-bars mr-2"></i>
                            DANH MỤC
                        </NavLink>
                        <ul className='dropdown-content' style={{left:0}}>
                            {renderCourseCate()}
                        </ul>                      
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
                <div className='btn btn-warning text-white btnLogin'>
                    ĐĂNG NHẬP
                </div>
            </div>
        </nav>
    )
};
