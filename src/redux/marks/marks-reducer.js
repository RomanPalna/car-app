import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchMarks } from "./marks-operations";

const marks = createReducer([], {
  [fetchMarks.fulfilled]: (_, action) => action.payload,
});

export default combineReducers({
  marks,
});
