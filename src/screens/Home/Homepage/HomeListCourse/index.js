import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListCourse } from "../../../../redux/types/actions";
import CourseItem from './CourseItem';

export default function HomeListCourse() {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.CourseReducer);

    useEffect(() => {
        dispatch(fetchListCourse());
    }, []);
    const renderListCourse = () => {
        if (loading) return <div>Loading...</div>;
        return data?.slice(0, 9).map((course, index) => {
            return <CourseItem course={course} key={index} />
        });
    };
    return (
        <section>
            <div className='container'>
                <div className='section-titel'>
                    <h2>Khoa hoc</h2>
                    <p>Khoa hoc noi bat</p>
                </div>
                <div className='row'>
                    {renderListCourse()}
                </div>
            </div>
        </section>
    )
};
