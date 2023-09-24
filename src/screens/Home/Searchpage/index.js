import React, { useEffect } from 'react';
import Loader from "../../../components/Loader";
import CourseItem from '../Homepage/HomeListCourse/CourseItem';
import { fetchListCourse } from '../../../redux/types/actions';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Aos from 'aos';

export default function SearchPage() {
    const dispatch = useDispatch();
    const {data, loading} = useSelector((state) => state.CourseReducer);
    const {keyword} = useParams();
    useEffect(()=> {
        dispatch(fetchListCourse(keyword));
    },[keyword]);

    const renderSearchResult = () => {
        if(loading) return <Loader/>;
        return data?.map((course, index) => {
            return <CourseItem course={course} key={index}/>
        });
    };
    return (
        <div className='courses searchPage'>
            <div className='container'>
                <div className='section-title pt-5'>
                    <h2>Tìm kiếm khóa học</h2>
                    <p>Có {data ? data.length : "0"} khóa học</p>
                </div>
                <div className='row' data-aos="fade-up">
                    {renderSearchResult()}
                </div>
            </div>
        </div>
    )
};
