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