import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

export default function CourseItem(props) {
    const { course } = props;
    return (
        <div className='col-lg-4 col-md-6 d-flex align-items-center mt-5 justify-content-center'>
            <Link to={`/chi-tiet-khoa-hoc/${course.maKhoaHoc}`} className='course-item card-container'>
                <img src={course.hinhAnh} style={{ width: "100%", height: "250px", objectFit: "cover", objectPosition: "center" }} alt='img' />
                <div className='course-content'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</h4>
                        <p className='price'>$169</p>
                    </div>
                    <h3>
                        <Link to={`/detail-course/${course.maKhoaHoc}`}>
                            {course.tenKhoaHoc}
                        </Link>
                    </h3>
                    <p>
                        {course.moTa.length > 150 ? `${course.moTa.slice(0, 150)}...` : course.moTa}
                    </p>
                </div>
            </Link>
        </div>

    )
};
