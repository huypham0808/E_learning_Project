import React from 'react'
import CounterComponent from '../../../../components/Countup';

const CounterHome = () => {
    return (
        <div className='w-100 mt-3 d-flex align-items-center' style={{ backgroundColor: "#f0f8ff", height: "300px" }}>
            <div className='container d-flex justify-content-around align-items-center'>
                <div className='countUpItem d-flex flex-column align-items-center'>
                    <i class="fa-solid fa-graduation-cap fa-4x text-success"></i>
                    <CounterComponent start={1000} end={9000} duration={10} />
                    <h4>Học viên</h4>
                </div>
                <div className='countUpItem d-flex flex-column align-items-center'>
                    <i class="fa-regular fa-calendar-days fa-4x text-success"></i>
                    <CounterComponent start={500} end={1000} duration={10} />
                    <h4>Khóa học</h4>
                </div>
                <div className='countUpItem d-flex flex-column align-items-center'>
                    <i class="fa-regular fa-hourglass-half fa-4x text-success"></i>
                    <CounterComponent start={1000} end={33200} duration={10} />
                    <h4>Giờ học</h4>
                </div>
                <div className='countUpItem d-flex flex-column align-items-center'>
                    <i class="fa-solid fa-person-chalkboard fa-4x text-success"></i>
                    <CounterComponent start={80} end={400} duration={10} />
                    <h4>Giảng viên</h4>
                </div>
            </div>
        </div>

    )
};

export default CounterHome;