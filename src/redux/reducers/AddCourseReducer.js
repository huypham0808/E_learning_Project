import * as actionTypes from "./../types/constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const AddCourseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_COURSE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case actionTypes.ADD_COURSE_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };

    case actionTypes.ADD_COURSE_FAIL:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };

    default:
      return state;
  }
};

export default AddCourseReducer;
