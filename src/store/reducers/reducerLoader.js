import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
};

const reducerLoader = (state = initialState, action) => {
  if (action.type === actionTypes.LOADING) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === actionTypes.STOP_LOADING) {
    return {
      ...state,
      loading: false,
    };
  }

  return state;
};

export default reducerLoader;
