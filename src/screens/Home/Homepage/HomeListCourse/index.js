import React from 'react'

function HomeListCourse(props) {
    const { listCourse } = props;

    const renderListCourse = () => {
        return listCourse?.map((course, index) => {
            return (
                <div className="card" key={index}>
                    <img className="card-img-top" src={course.hinhAnh} alt='/' />
                    <div className="card-body">
                        <h4 className="card-title">{course.tenKhoaHoc}</h4>
                        <p className="card-text">{course.moTa}</p>
                    </div>
                </div>
            )
        })
    }


    return (
        <div className='row'>
            <div className='my-3 title text-danger'>
                <h2>Danh Sách Khóa Học</h2>
                {renderListCourse()}
            </div>
        </div>
    )
};
export default HomeListCourse;
