import * as actionTypes from "../actions/actionTypes";

const initialState = {
  a: 1,
};

const reducerA = (state = initialState, action) => {
  if (action.type === actionTypes.ADD_A) {
    return {
      ...state,
      a: state.a + action.b,
    };
  }
  return state;
};

export default reducerA;
