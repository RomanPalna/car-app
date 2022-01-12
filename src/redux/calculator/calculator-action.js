import { createAction } from "@reduxjs/toolkit";

export const getPercentage = createAction("calculator/getPercentage");

export const getMonths = createAction("calculator/getMonths");

export const getFirstinstallment = createAction(
  "calculator/getFirstinstallment"
);

export const getPriceForEveryMonths = createAction(
  "calculator/getPriceForEveryMonths"
);
