import * as actionTypes from "./actionTypes";

const loadingAction = () => {
  return {
    type: actionTypes.LOADING,
  };
};

const stopLoadingAction = () => {
  return {
    type: actionTypes.STOP_LOADING,
  };
};

export const asyncAddA = (b) => {
  return { type: actionTypes.ADD_A, b: b };
};

export const addA = (b) => {
  return (dispatch) => {
    dispatch(loadingAction());
    setTimeout(() => {
      dispatch(asyncAddA(b));
      dispatch(stopLoadingAction());
    }, 5000);
  };
};

export const asyncAddB = (a) => {
  return { type: actionTypes.ADD_B, a: a };
};

export const addB = (a) => {
  return (dispatch) => {
    dispatch(loadingAction());
    setTimeout(() => {
      dispatch(asyncAddB(a));
      dispatch(stopLoadingAction());
    }, 5000);
  };
};
