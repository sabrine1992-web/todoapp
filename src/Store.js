import { createStore, applyMiddleware } from "redux";
import { addTodo } from "./redux/reducer/Addtodo.reduce";
import logger from "redux-logger";
export const Store = createStore(addTodo, applyMiddleware(logger));
