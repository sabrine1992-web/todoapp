import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const Listtask = ({ todos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        margin: "0 auto",
        height: "200px",
        overflowY: "auto",
        overflowX: "hidden"
      }}
    >
      {todos.map((todo, i) => (
        <Task key={i} todo={todo} idx={i} />
      ))}
    </div>
  );
};
const mapStateToProps = ({ todos }) => ({
  todos
});
export default connect(mapStateToProps)(Listtask);
