import axios from "axios";
import { requiredData } from "../../../constants/globalFunction.js";

export const GET_DATA = "GET_DATA";
export const MODAL_POP_UP = "MODAL_POP_UP";

const URL = "https://api.stackexchange.com/tags?";

export const geStackExchanegeData = (
  newStartDate,
  newEndDate,
  pageSize,
  pageNumber
) => async (dispatch) => {
  try {
    const newUrl = `${URL}page=${pageNumber}&pagesize=${pageSize}&fromdate=${newStartDate}&todate=${newEndDate}&order=desc&sort=popular&site=stackoverflow`;
    const response = await axios.get(newUrl);
    if (response?.status === 200) {
      dispatch({
        type: GET_DATA,
        payload: requiredData(response?.data?.items),
      });
    }
    return response;
  } catch (ex) {
    return ex;
  }
};

//-----Modal popup-------//
export function modalPopUp(value) {
  return (dispatch) => {
    dispatch({
      type: MODAL_POP_UP,
      payload: value,
    });
  };
}
