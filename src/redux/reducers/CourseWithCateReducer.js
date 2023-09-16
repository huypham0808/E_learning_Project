import * as actionTypes from "./../types/constants";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const CourseWithCateReducer = (state = initialState, {type,payload}) => {
    switch(type) {
        case actionTypes.GET_COURSE_WITH_CATEGORY_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state};
        case actionTypes.GET_COURSE_WITH_CATEGORY_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.error = null;
            return {...state};
        case actionTypes.GET_COURSE_WITH_CATEGORY_FAIL:
            state.loading = false;
            state.data = null;
            state.error = payload;
            return {...state};
        default:
            return {...state};
    }
};
export default CourseWithCateReducer;