import * as Actions from "../constants/Users";
export const requestList = () => {
  return {
    type: Actions.REQUEST_LIST,
  };
};
export const receiveList = (data) => {
  return {
    type: Actions.RECEIVE_LIST,
    payload: data,
  };
};
