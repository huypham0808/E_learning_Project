import React from 'react'

export default function CarouselEvent() {
    return (
        <div className='wrapper sliderEvent'>
            <div className='siderOverlay'></div>
            <div className='timeEvent'>
                <div className='countDownEvent d-flex'>
                    <div className='events'>
                        <p className='dayEvent'>00</p>
                        <p><small>NGÀY</small></p>
                    </div>
                    <div className='events'>
                        <p className='hoursEvent'>00</p>
                        <p><small>GIỜ</small></p>
                    </div>
                    <div className='events'>
                        <p className='minuteEvent'>00</p>
                        <p><small>PHÚT</small></p>
                    </div>
                    <div className='events'>
                        <p className='secondEvent'>00</p>
                        <p><small>GIÂY</small></p>
                    </div>
                </div>
                <h4>Sự kiện công nghệ lớn nhất 2023</h4>
                <h6>28 - 29 tháng 9, 2023, Việt Nam</h6>
            </div>
        </div>
    )
}
