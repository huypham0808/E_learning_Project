import * as actionTypes from "./../types/constants";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const UserLoginReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case actionTypes.USER_LOGIN_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state};
        case actionTypes.USER_LOGIN_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.error = null;
            return {...state};
        case actionTypes.USER_LOGIN_FAIL:
            state.loading = false;
            state.data = null;
            state.error = payload;
            return {...state};
        case actionTypes.USER_LOGIN_CLEAN:
            state.loading = false;
            state.data = null;
            state.error = null;
            return {...state};
        default:
            return{...state};
    }
};
export default UserLoginReducer;
