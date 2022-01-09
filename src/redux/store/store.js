import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];

const initialState = {};

const models = (state = initialState, { type, payload }) => {
  switch (type) {
    case "firstInstallment/value":
      return state;

    default:
      return state;
  }
};

const store = configureStore({
  reducer: { reducer: models },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
