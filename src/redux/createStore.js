import { createStore, combineReducers } from "redux";

// Reducers

import userReducer from "./reducers/user.reducer";

const rootReducer = combineReducers({
  userReducer,
});

// Redux Store
const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const applyMiddleware = redux.applyMiddleware;

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
