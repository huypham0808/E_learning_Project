import api from "../../utils/apiUtil";
import * as actionTypes from './constants';

//action get List of Course
export const fetchListCourse = (keyword = "") => {
    return (dispatch) => {
        dispatch(actListCourseRequest());
        const url = keyword
            ? `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keyword}&MaNhom=GP09`
            : "QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09";
        api.get(url)
            .then((result) => {
                dispatch(actListCourseSuccess(result.data));
            })
            .catch((err) => {
                dispatch(actListCourseFail(err));
            });
    };
};

const actListCourseRequest = () => ({
    type: actionTypes.COURSE_REQUEST,
});
const actListCourseSuccess = (data) => ({
    type: actionTypes.COURSE_SUCCESS,
    payload: data,
});
const actListCourseFail = (error) => ({
    type: actionTypes.COURSE_FAIL,
    payload: error,
}); 

//action Get Danh Muc Khoa Hoc 
export const fetchCourseCate = () => {
    return (dispatch) => {
        dispatch(actCourseCateRequest());
        api.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc").then((result) => {
            dispatch(actCourseCateSuccess(result.data));
        })
        .catch((error) => dispatch(actCourseCateFail(error)));
    }
};

const actCourseCateRequest = () => (
    {
        type: actionTypes.COURSE_CATE_REQUEST, 
    }
);
const actCourseCateSuccess = (data) => (
    {
        type: actionTypes.COURSE_CATE_SUCCESS,
        payload: data,
    }
);
const actCourseCateFail = (error) => (
    {
        type: actionTypes.COURSE_CATE_FAIL,
        payload: error,
    }
);