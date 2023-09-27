import * as actionTypes from "./../types/constants";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case actionTypes.GET_USER_DETAIL_REQUEST:
        state.loading = true;
        state.data = null;
        state.error = null;
        return { ...state };
  
      case actionTypes.GET_USER_DETAIL_SUCCESS:
        state.loading = false;
        state.data = payload;
        state.error = null;
        return { ...state };
  
      case actionTypes.GET_USER_DETAIL_FAIL:
        state.loading = false;
        state.data = null;
        state.error = payload;
        return { ...state };
  
      default:
        return { ...state };
    }
  };
  
  export default UserReducer;