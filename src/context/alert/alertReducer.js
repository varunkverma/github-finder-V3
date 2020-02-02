import { SET_ALERT, REMOVE_ALERT } from "../types";

export default (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SET_ALERT:
      return action.payload;

    case REMOVE_ALERT:
      return null;

    default:
      return state;
  }
};
