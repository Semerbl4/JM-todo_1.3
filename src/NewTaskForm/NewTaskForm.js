import React from "react";

import "./NewTaskForm.css";

class NewTaskForm extends React.Component {
  state = {
    value: "",
  };

  render() {
    const { value } = this.state;
    const { addTask } = this.props;

    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          autoFocus
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              addTask(value);
              console.log(value);
            }
          }}
        />
      </header>
    );
  }
}

export default NewTaskForm;
