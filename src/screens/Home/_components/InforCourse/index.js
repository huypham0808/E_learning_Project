import React from 'react'
import '../../../../assets/style.css'

export default function InforCourse() {
    return (
        <div className='inforCourseBox w-100'>
            <div className='inforCourseHome '>
                <div className='inforItemHome inforLargeItem'>
                    <div className='inforItemContent'>
                        <h3>KHOÁ HỌC</h3>
                        <p><span>Học qua dự án thực tế,</span>học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay</p>
                        <ul>
                            <li><i class="fa-solid fa-check fa-lg"></i> Hơn 1000 bài tập và dự án thực tế</li>
                            <li><i class="fa-solid fa-check fa-lg"></i> Hình ảnh, ví dụ, bài giảng sinh động trực quan</li>
                            <li><i class="fa-solid fa-check fa-lg"></i> Tư duy phân tích, giải quyết vấn đề trong dự án</li>
                            <li><i class="fa-solid fa-check fa-lg"></i> Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án</li>
                            <li><i class="fa-solid fa-check fa-lg"></i> Cơ hội thực tập tại các công ty lớn như FPT, Microsoft</li>
                        </ul>
                    </div>
                </div>
                <div className='inforItemHome inforSmallItemA'>
                    <div className='inforItemContent'>
                        <h3>LỘ TRÌNH PHÙ HỢP</h3>
                        <ul>
                            <li>Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</li>
                            <li>Học, luyện tập code, kỹ thuật phân tích, soft skill</li>
                            <li>Huấn luyện để phát triển năng lực và niềm đam mê lập trình</li>
                        </ul>
                    </div>
                </div>
                <div className='inforItemHome inforSmallItemB'>
                    <div className='inforItemContent'>
                        <h3>HỆ THỐNG HỌC TẬP</h3>
                        <ul>
                            <li>Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên</li>
                            <li>Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</li>
                            <li>Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập</li>
                        </ul>
                    </div>
                </div>
                <div className='inforItemHome inforSmallItemA'>
                    <div className='inforItemContent'>
                        <h3>GIẢNG VIÊN</h3>
                        <ul>
                            <li>Tương tác cùng mentor và giảng viên qua phần thảo luận</li>
                            <li>Review code và đưa ra các nhận xét góp ý</li>
                            <li>Chấm điểm tương tác thảo luận giữa các học viên</li>
                        </ul>
                    </div>
                </div>
                <div className='inforItemHome inforSmallItemC'>
                    <div className='inforItemContent'>
                        <h3>CHỨNG NHẬN</h3>
                        <ul>
                            <li>Chấm bài và có thể vấn đáp trực tuyến để review</li>
                            <li>Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo</li>
                            <li>Kết nối CV của bạn đến với các đối tác của V learning</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
