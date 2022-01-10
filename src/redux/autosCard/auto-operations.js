import { createAsyncThunk } from "@reduxjs/toolkit";
import * as autoRiaApi from "../../autoRiaAPI";

export const fetchCarCards = createAsyncThunk(
  "cars/fetchCars",

  async (data) => {
    const cars = await autoRiaApi.autoCard(data);
    return cars;
  }
);
