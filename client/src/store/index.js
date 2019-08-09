import { createStore } from "redux";
import reducer from "../reducers";
import { contacts } from "../dataGen";

const store = createStore(reducer);

export default store;
