import React from 'react'

export default function CourseItem(props) {
    const {course} = props;
    return (
        <div className="card">
            <div className="card-header">
                <img src={course.hinhAnh} alt="/" />
            </div>
            <div className="card-body">
                <h4 className="card-title">Ten Khoa Hoc</h4>
                <h5 className="card-text">Ten Giang Vien</h5>
                <p classname="card-text font-weight-bold">Mo ta noi dung khoa hoc</p>
                <p classname="card-text">5.0</p>
            </div>
            <div className="card-footer text-muted">
                <button classname="btn btn-primary">Xem chi tiet</button>
            </div>
        </div>

    )
}
