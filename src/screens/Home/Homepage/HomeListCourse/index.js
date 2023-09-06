import React from 'react';

const HomeListCourse = (props) => {
    const { listCourse } = props;
    const renderListCourse = () => {
        return listCourse?.map((course) => {
            return (
                <div className="card" key={course.maKhoaHoc}>
                    <img className="card-img-top" src={course.hinhAnh} alt='/' />
                    <div className="card-body">
                        <h4 className="card-title">{course.tenKhoaHoc}</h4>
                        <p className="card-text">{course.moTa}</p>
                    </div>
                </div>
            )
        })
    };
    return (
        <div>
            <h2>Danh Sách Khóa Học</h2>
            <div className='row'>
                <div className='col-md-3'>
                    {renderListCourse()}
                </div>
            </div>
        </div>
    )
};
export default HomeListCourse;
