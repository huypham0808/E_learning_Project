import { combineReducers } from "redux";
import CourseReducer from "../redux/reducers/CourseReducer";
import CourseCateReducer from "../redux/reducers/CourseCateReducer";
import CourseWithCateReducer from "../redux/reducers/CourseWithCateReducer";
import CourseDetailReducer from "../redux/reducers/CourseDetailReducer";
import RegisterReducer from "../redux/reducers/RegisterReducer";
import UserReducer from "../redux/reducers/UserReducer";
import UserLoginReducer from "../redux/reducers/UserLoginReducer";
import CancelCourseReducer from "../redux/reducers/CancelCourseReducer";
import UpdateUserReducer from "../redux/reducers/UpdateUserReducer";


const rootReducer = combineReducers(
    {
        CourseReducer,
        CourseCateReducer,
        CourseWithCateReducer,
        CourseDetailReducer,
        RegisterReducer,
        UserReducer,
        UserLoginReducer,
        CancelCourseReducer,
        UpdateUserReducer,
    }
);
export default rootReducer;
