import Rootreducer from "reducers/rootReducer";
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
    thunkMiddleware,
];

const store = createStore(Rootreducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
))

export default store;