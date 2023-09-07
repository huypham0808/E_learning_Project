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
    },[]);
    const {data} = useSelector((state) => state.CourseReducer);
    const renderHomeListCourse = () => {
        return data?.map((course,index) => {
            return <HomeListCourse listCourse={course} key={index}/>
        })
    };

    return (
        <div className='homePage'>
            <Carousel />
            <InforCourse />
            <section className='row'>{renderHomeListCourse()}</section>
        </div>
    )
};
