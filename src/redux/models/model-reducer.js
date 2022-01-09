import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as modelActions from "./models-actions";

const model = createReducer([], {
  [modelActions.fetchModelsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer([], {
  [modelActions.fetchModelsRequest]: () => true,
  [modelActions.fetchModelsSuccess]: () => false,
  [modelActions.fetchModelsError]: () => false,
});

const error = createReducer([], {
  [modelActions.fetchModelsError]: (_, action) => action.payload,
  [modelActions.fetchModelsRequest]: () => null,
});

export default combineReducers({
  model,
  isLoading,
  error,
});
