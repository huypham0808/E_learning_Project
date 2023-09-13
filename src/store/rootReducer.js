import { combineReducers } from "redux";
import CourseReducer from "../redux/reducers/CourseReducer";
import CourseCateReducer from "../redux/reducers/CourseCateReducer";
const rootReducer = combineReducers(
    {
        CourseReducer,
        CourseCateReducer,
    }
);
export default rootReducer;
