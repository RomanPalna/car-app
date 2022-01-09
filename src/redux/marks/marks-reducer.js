import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchMarks } from "./marks-operations";

const marks = createReducer([], {
  [fetchMarks.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchMarks.pending]: () => true,
  [fetchMarks.fulfilled]: () => false,
  [fetchMarks.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchMarks.rejected]: (_, action) => action.payload,
  [fetchMarks.pending]: () => null,
});

export default combineReducers({
  marks,
  isLoading,
  error,
});
