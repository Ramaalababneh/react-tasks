// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import taskReducer from "./components/reducers";
import TodoList from "./components/TodoList";

const store = createStore(taskReducer); // Create a Redux store with the taskReducer

ReactDOM.render(
  <Provider store={store}>
    {" "}
    {/* Provide the Redux store to the entire app */}
    <TodoList /> {/* Render the TodoList component */}
  </Provider>,
  document.getElementById("root") // Render it in the HTML element with the ID "root"
);
