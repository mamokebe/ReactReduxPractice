import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
};
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //current state
        // numOfCakes: state.numOfCakes - 1,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
