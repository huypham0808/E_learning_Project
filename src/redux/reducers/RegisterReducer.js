import * as actionTypes from "./../types/constants";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const RegisterReducer = (state = initialState, {type,payload}) => {
    switch(type){
        case actionTypes.REGISTER_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state};
        case actionTypes.REGISTER_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.error = null;
            return {...state};
        case actionTypes.REGISTER_FAIL:
            state.loading = false;
            state.data = null;
            state.error = payload;
            return {...state};   
        default:
            return {...state};
    }
};

export default RegisterReducer;