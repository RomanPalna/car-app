import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as autoActions from "./auto-actions";
import { fetchCarCards } from "./auto-operations";

const markId = createReducer([], {
  [autoActions.getMarkValue]: (_, action) => action.payload,
});

const autos = createReducer([], {
  [fetchCarCards.fulfilled]: (_, action) => action.payload,
});

export default combineReducers({
  markId,
  autos,
});
