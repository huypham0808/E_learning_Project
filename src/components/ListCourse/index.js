import React, { useEffect } from 'react';
import CourseItem from '../CourseItem';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourseApi } from '../../redux/reducers/CourseReducer';

export default function ListofCourse(props) {
    const {CourseInformation} = useSelector(state => state.CourseReducer);
    const dispatch = useDispatch();
    useEffect (() => {
        const actionThunk = getAllCourseApi();
        dispatch(actionThunk);
    })
    return (
        <div className='container'>
            <h3>Danh Sach Khoa Hoc</h3>
            <div className='row'>
                {CourseInformation.map((course, index)=> {
                    return <div className='col-3' key={index}>
                        <CourseItem course={course}/>
                    </div>
                })}
            </div>
        </div>
    )
}
