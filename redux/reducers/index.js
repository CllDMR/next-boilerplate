import { combineReducers } from "redux";

import example from "./example";
import counter from "./counter";
import account from "./account";

export default combineReducers({
  example,
  counter,
  account
});
