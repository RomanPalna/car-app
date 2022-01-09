import { createAction } from "@reduxjs/toolkit";

//pending
export const fetchMarksRequest = createAction("marks/fetchMarksRequest");
//fullfilled
export const fetchMarksSuccess = createAction("marks/fetchMarksSuccess");
//rejected
export const frtchMarksError = createAction("marks/frtchMarksError");
