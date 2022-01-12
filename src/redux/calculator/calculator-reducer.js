import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as calculatorAction from "./calculator-action";

const percentage = createReducer([], {
  [calculatorAction.getPercentage]: (_, action) => action.payload,
});

const months = createReducer([], {
  [calculatorAction.getMonths]: (_, action) => action.payload,
});

export default combineReducers({
  percentage,
  months,
});
