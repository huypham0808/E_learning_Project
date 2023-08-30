import React from 'react'

export default function Carousel() {
    return (
        <div className='row sliderHome'>
            <div className='col-lg-6 sloganBox mt-5 text-left'>
                <div className='colorDotTopLeft'></div>
                <div className='sloganContainer'>
                    <h1>Chào mừng</h1>
                    <h1>đến với môi trường</h1>
                    <h1>V<span>learning</span></h1>
                    <button className='btn btn-warning'>BẮT ĐẦU NÀO</button>
                </div>
            </div>
            <div className='col-lg-6 sloganImage mt-5 text-center'>
                <img className='img-fluid' src='https://cdn.pixabay.com/photo/2021/05/16/16/51/learn-6258632_1280.jpg' style={{ width: 500 }} alt='\'></img>
            </div>
        </div>
    )
};
