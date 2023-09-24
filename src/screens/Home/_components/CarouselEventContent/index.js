import React from 'react'
import imageEvent from '../../../../assets/img/homeschooling-6204112_640.png'
export default function CarouselEventContent() {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between mt-5'>
                <div className='contentLeft text-center ml-5 w-50'>
                    <img src='https://cdn2.floor.bz/wp-content/uploads/2021/02/Scientists-studying-neural-connections-scaled.jpg' className='img-fluid' alt='/' />
                </div>
                <div className='contentRight w-50'>
                    <h3 className='text-danger'>SỰ KIỆN CÔNG NGHỆ DÀNH CHO STARTUP</h3>
                    <h5 className='my-3'>Nơi gặp gỡ của những tư tưởng lớn</h5>
                    <p className='text-secondary' style={{ fontWeight: "500" }}>Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt Nam tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên phong, bao gồm Artificial Intelligence (trí tuệ nhân tạo), Internet of Things (Internet vạn vật), Blockchain (Chuỗi khối) và Augmented reality/Virtual Reality (Thực tế tăng cường/Thực tế ảo)</p>
                    <div className='btnGroup my-3'>
                        <button className='btn btn-success mr-4'>THAM GIA</button>
                        <button className='btn btn-warning'>TÌM HIỂU THÊM</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
