import React, { useEffect, useState } from 'react'
import CourseItem from '../Homepage/HomeListCourse/CourseItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListCourse } from '../../../redux/types/actions';
import '../../../assets/style.css'
import Loader from '../../../components/Loader';

export default function Allcourse() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.CourseReducer);
  const [currentPage, setCurrentPage] = useState(1);

  const numberCoursePerPage = 6;
  const indexOfLastCourse = currentPage * numberCoursePerPage;
  const indexOfFirstCourse = indexOfLastCourse - numberCoursePerPage;
  const currentCourse = data?.slice(indexOfFirstCourse, indexOfLastCourse);
  useEffect(() => {
    dispatch(fetchListCourse());
  },[]);

  const renderCourse = () => {
    if (loading) return <Loader/>;
    return currentCourse?.map((course, index) => {
      return <CourseItem course={course} key={index} />
    })
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const pageNumber = Math.ceil(data?.length / numberCoursePerPage);
  const renderPagination = () => {
    const pagination = [];
    for (let i = 1; i < pageNumber; i++) {
      pagination.push(
        <li key={i} className={i === currentPage ? "page-item-active" : "page-item"}>
          <a className='page-link' href='#' onClick={() => paginate(i)}>
            {i}
          </a>
        </li>,
      );
    }
    return pagination;
  };
  return (
    <section className='coursePage'>
      <div className='container'>
        <div className='section-title pt-5'>
          <h2>Khóa học</h2>
          <p>Tất cả khóa học</p>
        </div>
        <div className='row container d-flex justify-content-center m-auto'>
          {renderCourse()}
        </div>
        <ul className='pagination justify-content-center mt-4'>
          {renderPagination()}
        </ul>
      </div>
    </section>
  )
};
