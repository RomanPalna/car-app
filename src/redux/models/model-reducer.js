import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as modelActions from "./models-actions";

const value = createReducer([], {
  [modelActions.getModelValue]: (_, action) => action.payload,
});

export default combineReducers({
  value,
});
