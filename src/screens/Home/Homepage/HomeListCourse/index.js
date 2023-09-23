import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListCourse } from "../../../../redux/types/actions";
import CourseItem from './CourseItem';
import Loader from '../../../../components/Loader';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function HomeListCourse() {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.CourseReducer);

    useEffect(()=> {
        Aos.init({duration:3000})
    },[]);
    useEffect(() => {
        dispatch(fetchListCourse());
    }, []);
    const renderListCourse = () => {
        if (loading) return <Loader/>;
        return data?.slice(0, 9).map((course, index) => {
            return <CourseItem course={course} key={index} />
        });
    };
    return (
        <section className='courses'>
            <div className='container' data-aos="fade-up">
                <div className='section-title'>
                    <h2>Khoá học</h2>
                    <p>Khoá học nổi bật</p>
                </div>
                <div className='row'  data-aos="fade-up">
                    {renderListCourse()}
                </div>
            </div>
        </section>
    )
};
