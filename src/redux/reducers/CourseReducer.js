//import * as actions from '../types/constants';
import {COURSE_REQUEST, COURSE_SUCCESS, COURSE_FAIL} from '../types/constants';


const initialState = {
    loading: false,
    data: null,
    error: null,
};

const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case COURSE_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state};
        case COURSE_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return {...state};
        case COURSE_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return {...state};
        default:
            return {...state};
    }
}
export default CourseReducer;



