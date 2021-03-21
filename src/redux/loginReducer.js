import { IS_VALID_USER } from "../modules/Login/actions";

const getCurrentStatus = JSON.parse(localStorage.getItem("isValid"));

export const loginReducer = (state = getCurrentStatus, action) => {
  switch (action.type) {
    case IS_VALID_USER:
      return action.payload;
    default:
      return state;
  }
};
