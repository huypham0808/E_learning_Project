import { combineReducers } from "redux";
import CourseReducer from "../redux/reducers/CourseReducer";
import CourseCateReducer from "../redux/reducers/CourseCateReducer";
import CourseWithCateReducer from "../redux/reducers/CourseWithCateReducer";
import CourseDetailReducer from "../redux/reducers/CourseDetailReducer";
import RegisterReducer from "../redux/reducers/RegisterReducer";

const rootReducer = combineReducers(
    {
        CourseReducer,
        CourseCateReducer,
        CourseWithCateReducer,
        CourseDetailReducer,
        RegisterReducer,
    }
);
export default rootReducer;
