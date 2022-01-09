import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = { percentage: 0 };

const MyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "firstInstallment/value":
      return {
        percentage: state.percentage + payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({ MyReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
