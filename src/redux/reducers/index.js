import { combineReducers } from "redux";
import UserList from "./UserList";

const reducers = combineReducers({
  userList: UserList,
});

export default reducers;
