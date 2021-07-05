import { combineReducers, createStore } from "redux";
import { articlesReducer } from "./ArticlesState";

const reducers = combineReducers({ articlesState: articlesReducer });
const store = createStore(reducers);

export default store;
