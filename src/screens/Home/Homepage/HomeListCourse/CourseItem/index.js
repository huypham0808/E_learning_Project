import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'antd';
const gridStyle = {
    width: '100%',
    textAlign: 'center',
}

export default function CourseItem(props) {
    const { course } = props;
    return (
        <div className='col-lg-4 col-md-6 d-flex align-items-stretch'>
            <Card>
                <Card.Grid style={gridStyle}>
                    <div className='course-item card-container'>
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
                    </div>
                </Card.Grid>
            </Card>
        </div>

    )
};
