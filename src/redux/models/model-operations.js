import * as autoRiaApi from "../../autoRiaAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const value = modelActions.getModelValue.payload

// const value = modelActions.getModelValue();

export const fetchModels = createAsyncThunk(
  "models/fetchModels",
  async (value) => {
    const model = await autoRiaApi.models(value);
    return model;
  }
);

// export const fetchModels = (models) => async (dispatch) => {
//   dispatch(modelActions.getModelValue(models));

//   try {
//     const models = await autoRiaApi.models();
//     dispatch(modelActions.getModelValue(models));
//   } catch (error) {
//     dispatch(modelActions.getModelValueError(error));
//   }
// };

// export const fetchModels = () => async (dispatch) => {
//   dispatch(modelActions.fetchModelsRequest());

//   try {
//     const models = await autoRiaApi.models();
//     dispatch(modelActions.fetchModelsSuccess(models));
//   } catch (error) {
//     dispatch(modelActions.fetchModelsError(error));
//   }
// };
