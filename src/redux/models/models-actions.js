import { createAction } from "@reduxjs/toolkit";

export const fetchModelsRequest = createAction("models/fetchModelsRequest");
export const fetchModelsSuccess = createAction("models/fetchModelsSuccess");
export const fetchModelsError = createAction("models/fetchModelsError");
