import { combineReducers } from "redux";
import CourseReducer from "../redux/reducers/CourseReducer";
import CourseCateReducer from "../redux/reducers/CourseCateReducer";
import CourseWithCateReducer from "../redux/reducers/CourseWithCateReducer";

const rootReducer = combineReducers(
    {
        CourseReducer,
        CourseCateReducer,
        CourseWithCateReducer,
    }
);
export default rootReducer;
