import * as marksActions from "./marks-action";
import * as autoRiaApi from "../../autoRiaAPI";

export const fetchMarks = () => async (dispatch) => {
  dispatch(marksActions.fetchMarksRequest());

  try {
    const marks = await autoRiaApi.marks();
    dispatch(marksActions.fetchMarksSuccess(marks));
  } catch (error) {
    dispatch(marksActions.frtchMarksError(error));
  }
};
