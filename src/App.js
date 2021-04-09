import React, { useEffect } from "react";
import "./Styles.css";
import Addtask from "./compnents/Addtask";
import Listtask from "./compnents/Listtask";
import { deleteAll, persistTodos } from "./redux/action/Addtodo.action";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}> Todos App</h1>
      <Addtask />
      <Listtask />
      <div>
        <button
          style={{ marginTop: "20px", cursor: "pointer" }}
          onClick={deleteAll}
        >
          {" "}
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});
export default connect(
  null,
  mapDispatchToProps
)(App);
