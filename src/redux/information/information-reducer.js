import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { getInformation } from "./informarion-actions";

const information = createReducer([], {
  [getInformation]: (_, action) => action.payload,
});

export default combineReducers({
  information,
});
