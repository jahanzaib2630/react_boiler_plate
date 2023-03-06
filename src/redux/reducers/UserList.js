import * as Actions from "../constants/Users";
const initState = {
  requestUserList: [],
  receiveUserList: [],
};

const UserList = (state = initState, action) => {
  switch (action.type) {
    case Actions.REQUEST_LIST:
      return {
        ...state,
        requestUserList: action.payload,
      };
    case Actions.RECEIVE_LIST:
      return {
        ...state,
        receiveUserList: action.payload,
      };
    default:
      return state;
  }
};

export default UserList;
