import * as actionTypes from "./../types/constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};
const ListUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case actionTypes.GET_LIST_USER_REQUEST:
        state.loading = true;
        state.data = null;
        state.error = null;
        return { ...state };
  
      case actionTypes.GET_LIST_USER_SUCCESS:
        state.loading = false;
        state.data = payload;
        state.error = null;
        return { ...state };
  
      case actionTypes.GET_LIST_USER_FAIL:
        state.loading = false;
        state.data = null;
        state.error = payload;
        return { ...state };
  
      default:
        return { ...state };
    }
  };
  
  export default ListUserReducer;