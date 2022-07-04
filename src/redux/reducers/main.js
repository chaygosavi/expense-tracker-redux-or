import { combineReducers } from "redux";
import { expenseReducer } from "../reducers/reducer";

const rootRed = combineReducers({
  expenseReducer,
});

export default rootRed;
