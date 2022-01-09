import * as modelActions from "./model-action";
import * as autoRiaApi from "../../autoRiaAPI";

export const fetchModels = () => async (dispatch) => {
  dispatch(modelActions.fetchModelsRequest());

  try {
    const models = await autoRiaApi.models();
    dispatch(modelActions.fetchModelsSuccess(models));
  } catch (error) {
    dispatch(modelActions.fetchModelsError(error));
  }
};
