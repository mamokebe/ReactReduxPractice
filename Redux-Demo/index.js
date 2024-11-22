const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
//for second approach
const combineReducers = redux.combineReducers;

//middleware and  redux-logger
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// console.log("From index.js");

//define string constant that indicate the type of the action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

//define the action (object type property value)
// {
//   type:BUY_CAKE,
//   info:"First redux action"
// }

//action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
  };
}

//reducers
//specify how the apps state changes in response to actions sent to the store
// (previousState,action)=>newState

// //first approach
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state, //if we have different property (take copy of state object)
//         numOfCakes: state.numOfCakes - 1,
//       };

//     case BUY_ICE_CREAM:
//       return {
//         ...state, //if we have different property (take copy of state object)
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };
//or second approach (best practice approach)
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //if we have different property (take copy of state object)
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state, //if we have different property (take copy of state object)
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};
//for secons approach
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
// const store = createStore(reducer); // this is for first approach

console.log("initial state", store.getState());
// store.subscribe(() => console.log("updated state", store.getState()));
// const unsubscribe = store.subscribe(() =>
//   console.log("updated state", store.getState())
// );

const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
