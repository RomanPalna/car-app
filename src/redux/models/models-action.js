import { createAction } from "@reduxjs/toolkit";

//pending
export const fetchModelsRequest = createAction("models/fetchModelsRequest");
//fullfilled
export const fetchModelsSuccess = createAction("models/fetchModelsSuccess");
//rejected
export const frtchModelsError = createAction("models/frtchModelsError");
