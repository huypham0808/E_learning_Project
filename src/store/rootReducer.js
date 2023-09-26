import { combineReducers } from "redux";
import CourseReducer from "../redux/reducers/CourseReducer";
import CourseCateReducer from "../redux/reducers/CourseCateReducer";
import CourseWithCateReducer from "../redux/reducers/CourseWithCateReducer";
import CourseDetailReducer from "../redux/reducers/CourseDetailReducer";
import RegisterReducer from "../redux/reducers/RegisterReducer";
import RegisterCourseReducer from "../redux/reducers/RegisterCourseReducer";
import UserReducer from "../redux/reducers/UserReducer";
import UserLoginReducer from "../redux/reducers/UserLoginReducer";
import CancelCourseReducer from "../redux/reducers/CancelCourseReducer";
import UpdateUserReducer from "../redux/reducers/UpdateUserReducer";
import ListUserReducer from "../redux/reducers/ListUserReducer";
import AddUserReducer from "../redux/reducers/AddUserReducer";
import DeleteUserReducer from "../redux/reducers/DeleteUserReducer";
import AddCourseReducer from "../redux/reducers/AddCourseReducer";
import DeleteCourseReducer from "../redux/reducers/DeleteCourseReducer";
import UpdateCourseReducer from "../redux/reducers/UpdateCourseReducer";
import CourseConfirmReducer from "../redux/reducers/CourseConfirmed";
import CourseUnRegReducer from "../redux/reducers/CourseUnRegReducer";
import CourseWaitConfirmReducer from "../redux/reducers/CourseWaitConfirmReducer";
import DelCourseByAdminReducer from "../redux/reducers/DelCourseByAdminReducer";
import RegCourseByAdminReducer from "../redux/reducers/RegCourseByAdminReducer";

const rootReducer = combineReducers(
    {
        CourseReducer,
        CourseCateReducer,
        CourseWithCateReducer,
        CourseDetailReducer,
        RegisterReducer,
        RegisterCourseReducer,
        UserReducer,
        UserLoginReducer,
        CancelCourseReducer,
        UpdateUserReducer,
        ListUserReducer,
        AddUserReducer,
        DeleteUserReducer,
        AddCourseReducer,
        DeleteCourseReducer,
        UpdateCourseReducer,
        CourseConfirmReducer,
        CourseUnRegReducer,
        CourseWaitConfirmReducer,
        DelCourseByAdminReducer,
        RegCourseByAdminReducer,
    }
);
export default rootReducer;
