import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as marksActions from "./marks-action";

const marks = createReducer([], {
  [marksActions.fetchMarksSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [marksActions.fetchMarksRequest]: () => true,
  [marksActions.fetchMarksSuccess]: () => false,
  [marksActions.frtchMarksError]: () => false,
});

const error = createReducer(null, {
  [marksActions.frtchMarksError]: (_, action) => action.payload,
  [marksActions.fetchMarksRequest]: () => null,
});

export default combineReducers({
  marks,
  isLoading,
  error,
});
