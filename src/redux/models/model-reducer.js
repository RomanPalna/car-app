import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchModels } from "./model-operations";
import * as modelActions from "./models-actions";

const value = createReducer([], {
  [modelActions.getMarkIdByModelValue]: (_, action) => action.payload,
});

const models = createReducer([], {
  [fetchModels.fulfilled]: (_, action) => action.payload,
});

export default combineReducers({
  value,
  models,
});
