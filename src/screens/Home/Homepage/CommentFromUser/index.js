import React from 'react'
import UserComment from '../../../../assets/img/homeschooling-6204112_640.png'
export default function CommentFromUser() {
    return (
        <section className='d-flex container justify-content-between mt-5'>
            <div className='w-25 text-center m-auto'>
                <img src={UserComment} className='img-fluid' alt='...'></img>
            </div>
            <div className='w-50 m-auto'>
                <span style={{fontWeight:"500"}}><i class="fa-solid fa-quote-left fa-2x text-success"></i> Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn</span>
                <p className='my-3 text-success' style={{fontWeight:"500"}}>Huy Dev</p>
                <p className='text-secondary' style={{fontWeight:"500"}}>Học viên xuất sắc</p>
            </div>
        </section>
    )
}
