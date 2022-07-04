import { createStore } from "redux";
import rootRed from "../reducers/main";

const store = createStore(rootRed);

export default store;
