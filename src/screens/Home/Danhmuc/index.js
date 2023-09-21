import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseWithCate } from '../../../redux/types/actions'
import { useParams } from 'react-router-dom';
import CourseItem from '../Homepage/HomeListCourse/CourseItem'
import Loader from '../../../components/Loader';
export default function Danhmuc() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.CourseWithCateReducer);
  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchCourseWithCate(category));
  }, [category]);

  const renderCourses = () => {
    if (loading) return <Loader/>;
    return data?.map((course, index) => {
      return <CourseItem course={course} key={index} />
    })
  }
  return (
    <section className='danhMucKhoaHoc courses'>
      <div className='container section-title'>
        <h2>Khóa học</h2>
        <p>Khóa học theo danh mục</p>
      </div>
      <div className='row container d-flex justify-content-center m-auto'>
        {renderCourses()}
      </div>
    </section>
  )
};
