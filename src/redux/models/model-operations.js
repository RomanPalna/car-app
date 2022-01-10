import * as autoRiaApi from "../../autoRiaAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchModels = createAsyncThunk(
  "models/fetchModels",
  async (value) => {
    const model = await autoRiaApi.models(value);
    return model;
  }
);
