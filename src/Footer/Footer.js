import React from "react";
// import ReactDOM from "react-dom";

import TaskFilter from "../TaskFilter/TaskFilter";

import "./Footer.css";

let Footer = (props) => {
  const { changeFilter } = props;
  const { clearCompleted } = props;
  const { uncompletedTasks } = props;

  return (
    <footer className="footer">
      <span className="todo-count">{uncompletedTasks()} items left</span>
      <TaskFilter changeFilter={changeFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
