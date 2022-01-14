import { createAsyncThunk } from "@reduxjs/toolkit";
import * as autoRiaApi from "../../autoRiaAPI";

export const fetchCarCards = createAsyncThunk(
  "cars/fetchCars",

  async (data, page) => {
    const cars = await autoRiaApi.autoCard(data, page);
    return cars;
  }
);
