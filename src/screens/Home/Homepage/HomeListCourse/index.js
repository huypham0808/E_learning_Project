import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListCourse } from "../../../../redux/types/actions";
import CourseItem from './CourseItem';
import Loader from '../../../../components/Loader';
export default function HomeListCourse() {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.CourseReducer);

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
            <div className='container'>
                <div className='section-title'>
                    <h2>Khoá học</h2>
                    <p>Khoá học nổi bật</p>
                </div>
                <div className='row'>
                    {renderListCourse()}
                </div>
            </div>
        </section>
    )
};
