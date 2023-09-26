import * as actionTypes from '../types/constants';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const DelCourseByAdminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.DEL_COURSE_BY_ADMIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case actionTypes.DEL_COURSE_BY_ADMIN_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };

    case actionTypes.DEL_COURSE_BY_ADMIN_FAIL:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };

    default:
      return state;
  }
};

export default DelCourseByAdminReducer;
