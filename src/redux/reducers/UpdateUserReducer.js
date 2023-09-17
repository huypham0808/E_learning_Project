import * as actionTypes from "./../types/constants";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const UpdateUserReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case actionTypes.UPDATE_USER_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state};
        case actionTypes.UPDATE_USER_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.error = null;
            return {...state};
        case actionTypes.UPDATE_USER_FAIL:
            state. loading = false;
            state.data = null;
            state.error = payload;
            return {...state};
        default:
            return {...state};
    }
};

export default UpdateUserReducer;