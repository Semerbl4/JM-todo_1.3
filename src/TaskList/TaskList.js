import React from "react";
// import ReactDOM from "react-dom";

import "./TaskList.css";

import Task from "../Task/Task";

let TaskList = ({
  todoData,
  completeChanged,
  taskDestroyed,
  currentFilter,
}) => {
  let tasksFiltered = () => {
    let arrTaskList;

    if (currentFilter === "Active") {
      arrTaskList = todoData.filter((el) => {
        return el.completed === false;
      });
    }

    if (currentFilter === "Completed") {
      arrTaskList = todoData.filter((el) => {
        return el.completed === true;
      });
    } else if (currentFilter === "All") {
      arrTaskList = todoData.slice();
    }

    arrTaskList = arrTaskList.map((element) => {
      return (
        <Task
          {...element}
          key={element.id}
          completeChanged={completeChanged}
          taskDestroyed={taskDestroyed}
        />
      );
    });

    console.log(currentFilter, arrTaskList, todoData);
    return arrTaskList;
  };

  return <ul className="todo-list">{tasksFiltered()}</ul>;
};

export default TaskList;
