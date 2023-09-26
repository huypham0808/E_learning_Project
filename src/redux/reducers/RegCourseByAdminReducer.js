import * as actionTypes from '../types/constants';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const RegCourseByAdminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.REG_COURSE_BY_ADMIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case actionTypes.REG_COURSE_BY_ADMIN_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };

    case actionTypes.REG_COURSE_BY_ADMIN_FAIL:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };

    default:
      return state;
  }
};

export default RegCourseByAdminReducer;
