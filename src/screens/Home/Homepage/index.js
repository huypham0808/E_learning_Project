import React from 'react';
import Carousel from '../_components/CarouselKhoaHoc';
import InforCourse from '../_components/InforCourse';
import HomeListCourse from './HomeListCourse';



export default function Homepage() {
    return (
        <div className='homePage'>
            <Carousel />
            <InforCourse />
            <HomeListCourse/>
        </div>
    )
};
