import React from "react";
import "./styles.css";
import store from "./redux/store/store";
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter
} from "./redux/actions/actions";

window.reduxStore = store;
window.addTodo = addTodo;
window.toggleTodo = toggleTodo;
window.setVisibilityFilter = setVisibilityFilter;

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
