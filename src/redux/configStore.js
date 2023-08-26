import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from "./reducers/CourseReducer";
export const store = configureStore ({
    reducer: {
        CourseReducer,
    }
})