import React, {useEffect} from 'react';
import Carousel from '../_components/CarouselKhoaHoc';
import InforCourse from '../_components/InforCourse';
import { useDispatch, useSelector } from 'react-redux';
import { actListCourse } from './../../../redux/types/actions';
import HomeListCourse from './HomeListCourse';


export default function Homepage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actListCourse())
    });
    const courseData = useSelector((state) => state.CourseReducer.data);
    const renderHomeListCourse = () => {
        return <>
            <HomeListCourse listCourse={courseData} />
        </>
    };

    return (
        <div className='homePage'>
            <Carousel />
            <InforCourse />
            <section>{renderHomeListCourse()}</section>
        </div>
    )
};
