import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import marksReducer from "../marks/marks-reducer";

// const carsState = {

//   models: [],
//   cars: [],
//   isLoading: false
// };

const store = configureStore({
  reducer: {
    marks: marksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export default store;
