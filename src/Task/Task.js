import React from "react";
// import ReactDOM from "react-dom";

import "./Task.css";

class Task extends React.Component {
  completeToogler = () => {
    this.props.completeChanged(this.props.id);
  };

  currentTaskDestroyed = () => {
    let { id } = this.props;

    this.props.taskDestroyed(id);
  };

  render() {
    const { completed } = this.props;
    const { taskText } = this.props;

    // console.log(completed);
    return (
      <li {...this.props} className={completed ? "completed" : null}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={this.completeToogler}
            checked={completed ? true : false}
          />
          <label>
            <span className="description">{taskText}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button
            className="icon icon-destroy"
            onClick={this.currentTaskDestroyed}
          ></button>
        </div>
        {this.props.className === "editing" ? (
          <input
            type="text"
            className="edit"
            defaultValue="Editing task"
          ></input>
        ) : null}
      </li>
    );
  }
}

export default Task;
