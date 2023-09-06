import api, { groupid } from "../../utils/apiUtil";
//import * as actions from '../types/constants';
import { COURSE_REQUEST, COURSE_SUCCESS, COURSE_FAIL } from '../types/constants';

//action get List of Course
export const actListCourse = () => {
    return (dispatch) => {
        dispatch(actListCourseRequest())
        api.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${groupid}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actListCourseSuccess(result.data.content))
                }
            })
            .catch((err) => {
                dispatch(actListCourseFail(err));
            })
    }
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