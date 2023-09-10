import React from 'react'

export default function Carousel() {
    return (
        <div className='wrapper sliderHome'>
            <div className='carousel__Content'>
                <h1 style={{fontWeight:700, fontSize:"48px"}}>Chào mừng</h1>
                <h1 style={{fontWeight:700, fontSize:"48px"}}>đến với môi trường</h1>
                <h1 className='textE' style={{fontWeight:700, fontSize:"60px"}}>H-<span style={{fontWeight:700, fontSize:"40px"}}>learning</span></h1>
                <button className='btn btn-warning mt-3 text-white'>BẮT ĐẦU NÀO</button>
            </div>
        </div>
    )
};
