import * as actionTypes from "../actions/actionTypes";

const initialState = {
  b: 1,
};

const reducerB = (state = initialState, action) => {
  if (action.type === actionTypes.ADD_B) {
    return {
      ...state,
      b: action.a + state.b,
    };
  }

  return state;
};

export default reducerB;
