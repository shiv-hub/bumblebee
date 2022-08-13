import { combineReducers } from "redux";
import commentReducer from "./commentReducer";
import homeReducer from "./homeReducer";

const Rootreducer = combineReducers({
  homeReducer: homeReducer,
  commentReducer: commentReducer,
});

export default Rootreducer;
