import React from 'react'
import CounterComponent from '../../../../components/Countup';

const CounterHome = () => {
    return (
        <div className='boxNumberContainer mt-5' style={{ backgroundColor: "#f0f8ff"}}>
            <div className='row '>
                <div className='col-lg-3 p-4 col-md-6'>
                    <div className='text-center w-100'>
                        <i class="fa-solid fa-graduation-cap fa-4x text-success"></i>
                        <CounterComponent start={1000} end={9000} duration={10} />
                        <p>Học viên</p>
                    </div>
                </div>
                <div className='col-lg-3 p-4 col-md-6'>
                    <div className='text-center w-100'>
                        <i class="fa-regular fa-calendar-days fa-4x text-success"></i>
                        <CounterComponent start={500} end={1000} duration={10} />
                        <p>Khóa học</p>
                    </div>
                </div>
                <div className='col-lg-3 p-4 col-md-6'>
                    <div className='text-center w-100'>
                        <i class="fa-regular fa-hourglass-half fa-4x text-success"></i>
                        <CounterComponent start={1000} end={33200} duration={10} />
                        <p>Giờ học</p>
                    </div>
                </div>
                <div className='col-lg-3 p-4 col-md-6'>
                    <div className='text-center w-100'>
                        <i class="fa-solid fa-person-chalkboard fa-4x text-success"></i>
                        <CounterComponent start={80} end={400} duration={10} />
                        <p>Giảng viên</p>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default CounterHome;