import React from 'react';

export default function HomeListCourse (props) {
    const { listCourse } = props;
    const renderListCourse = () => {
        return (
            <div className="card">
                <img className="card-img-top" src={listCourse.hinhAnh} alt='/' />
                <div className="card-body">
                    <h4 className="card-title">{listCourse.tenKhoaHoc}</h4>
                    <p className="card-text">{listCourse.moTa}</p>
                </div>
            </div>
        )
    };
    return (
        <div>
            <h2 className='text-danger'>Danh Sách Khóa Học</h2>
            <div className='row'>
                <div className='col-md-3'>
                    {renderListCourse()}
                </div>
            </div>
        </div>
    )
};
