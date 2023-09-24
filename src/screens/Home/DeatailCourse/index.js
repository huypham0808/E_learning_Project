import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchCourseDetail } from '../../../redux/types/actions';
import { Link } from 'react-router-dom/dist';


export default function DetailsCourse() {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.CourseDetailReducer);

    const { maKhoaHoc } = useParams();
    useEffect(() => {
        dispatch(fetchCourseDetail(maKhoaHoc));
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='detail-content'>
            <section className='course-details bg-dark'>
                <div className='container'>
                    <div className='detail-course-title text-white'>
                        <h1>{data?.tenKhoaHoc}</h1>
                        <h3 className='my-3'>Hiểu và Làm Chủ {data?.tenKhoaHoc}</h3>
                        <div className='d-flex detail-course-rating align-items-center'>
                            <p className='bg-warning p-2 text-dark mr-2'>Bán chạy nhất </p>
                            <p className='text-warning mr-2'>4.8
                                <i class="fa-solid fa-star text-warning ml-2"></i>
                                <i class="fa-solid fa-star text-warning ml-2"></i>
                                <i class="fa-solid fa-star text-warning ml-2"></i>
                                <i class="fa-solid fa-star text-warning ml-2"></i>
                                <i class="fa-solid fa-star text-warning ml-2"></i>
                            </p>

                            <p className='text-primary'><i class="fa-solid fa-eye"></i>{data?.luotXem} lượt xem</p>
                        </div>
                        <p className='my-3'>Đã có: <span className='text-primary'>{data?.soLuongHocVien} học viên</span></p>
                        <p className='my-3'>Được tạo bởi <span className='text-primary'>{data?.nguoiTao.hoTen}</span></p>
                        <p className='my-3'>Lần cập nhật gần đây nhất: <span className='text-primary'>{data?.ngayTao}</span></p>
                        <p className='mr-3'><i class="fa-solid fa-globe"></i> Vietnamess</p>
                    </div>
                </div>
            </section>
            <div className='container mt-5'>
                <div className='card w-50 p-3'>
                    <h3 className='mb-3'>Giới thiệu khóa học</h3>
                    <p className='discription-Course'>{data?.moTa}</p>
                </div>
            </div>
            <div className='card p-3 detail-course-discription shadow'>
                <img src={data?.hinhAnh} className='img-fluid' alt='...' onError={(e) => {
                    e.target.onError = null;
                }}></img>
                <h2>đ 899.000</h2>
                <div className='text-center my-3'>
                    <button
                        className='btn btn-danger w-75 my-3 border border-secondary'
                        style={{height:"60px", fontSize:"25px"}}>
                        Đăng ký ngay
                    </button>
                    <p>Đảm bảo hoàn tiền trong 30 ngày</p>

                </div>
                <h5 className='mb-3 ml-3'>Khóa học này bao gồm:</h5>
                <ul className='ml-3'>
                    <li>
                        <div className='hlearning-list-item'>
                            <i class="fa-solid fa-check"></i>
                            <span className='ml-3'>37,5 giờ video theo yêu cầu</span>
                        </div>
                    </li>
                    <li>
                        <div className='hlearning-list-item'>
                            <i class="fa-solid fa-check"></i>
                            <span className='ml-3'>5 bài viết </span>
                        </div>
                    </li>
                    <li>
                        <div className='hlearning-list-item'>
                            <i class="fa-solid fa-check"></i>
                            <span className='ml-3'>Truy cập trên thiết bị di động và TV </span>
                        </div>
                    </li>
                    <li>
                        <div className='hlearning-list-item'>
                            <i class="fa-solid fa-check"></i>
                            <span className='ml-3'>Quyền truy cập đầy đủ suốt đời </span>
                        </div>
                    </li>
                    <li>
                        <div className='hlearning-list-item'>
                            <i class="fa-solid fa-check"></i>
                            <span className='ml-3'>Giấy chứng nhận hoàn thành</span>
                        </div>
                    </li>
                </ul>
                <div className='d-flex justify-content-between mx-5 my-3'>
                    <Link to='/'>Chia sẻ</Link>
                    <Link to='/'>Tặng khóa học này</Link>
                </div>
                <Link className='text-center'>Áp dụng coupon</Link>
            </div>
        </div >
    )
};
