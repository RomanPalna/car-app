import { createAsyncThunk } from "@reduxjs/toolkit";
import * as autoRiaApi from "../../autoRiaAPI";

export const fetchCarCards = createAsyncThunk(
  "cars/fetchCars",

  async ({ markId, modelId }) => {
    const cars = await autoRiaApi.autoCard(markId, modelId);
    return cars;
  }
);
