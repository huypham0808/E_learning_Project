import api from "../../utils/apiUtil";
import { COURSE_REQUEST, COURSE_SUCCESS, COURSE_FAIL } from '../types/constants';

//action get List of Course
export const actListCourse = () => {
    return (dispatch) => {
        dispatch(actListCourseRequest());
        api.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09`)
            .then((result) => {
                console.log(result.data);
                if (result.data.statusCode === 200) {
                    dispatch(actListCourseSuccess(result.data))
                }
            })
            .catch((err) => {
                dispatch(actListCourseFail(err));
            });
    };
};

const actListCourseRequest = () => {
    return {
        type: COURSE_REQUEST,
    }
};
const actListCourseSuccess = (data) => {
    return {
        type: COURSE_SUCCESS,
        payload: data,
    }
};
const actListCourseFail = (error) => {
    return {
        type: COURSE_FAIL,
        payload: error,
    }
}; 