import React from 'react';
import Carousel from '../_components/CarouselKhoaHoc';
import InforCourse from '../_components/InforCourse';
import HomeListCourse from './HomeListCourse';
import CounterHome from '../_components/Counter';
import Trainers from './HomeListInstructor';
import CommentFromUser from './CommentFromUser';



export default function Homepage() {
    return (
        <div className='homePage'>
            <Carousel />
            <InforCourse />
            <HomeListCourse/>
            <CounterHome/>
            <Trainers/>
            <CommentFromUser/>
        </div>
    )
};
