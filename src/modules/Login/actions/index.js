import { GET_DATA } from "../../Home/actions";
import data from "../../../constants/data.json";

export const IS_VALID_USER = "IS_VALID_USER";

export function authenticateUserAction(response) {
  localStorage.setItem("isValid", response);
  return (dispatch) => {
    dispatch({
      type: IS_VALID_USER,
      payload: response,
    });
  };
}
