// import * as marksActions from "./marks-action";
import * as autoRiaApi from "../../autoRiaAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMarks = createAsyncThunk("marks/fetchMarks", async () => {
  const marks = await autoRiaApi.marks();
  return marks;
});
