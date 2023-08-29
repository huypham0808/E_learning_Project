import { combineReducers } from "redux";
import CourseReducer from "../redux/reducers/CourseReducer";

const rootReducer = combineReducers(
    {
        CourseReducer,
    }
);
export default rootReducer;
