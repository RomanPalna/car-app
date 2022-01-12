import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as calculatorAction from "./calculator-action";

const percentage = createReducer(0, {
  [calculatorAction.getPercentage]: (_, action) => action.payload,
});

const months = createReducer(1, {
  [calculatorAction.getMonths]: (_, action) => action.payload,
});

const firstinstallment = createReducer(0, {
  [calculatorAction.getFirstinstallment]: (_, { payload }) => payload,
});

const priceForEveryMonths = createReducer(0, {
  [calculatorAction.getPriceForEveryMonths]: (_, action) => action.payload,
});

export default combineReducers({
  percentage,
  months,
  firstinstallment,
  priceForEveryMonths,
});
