import React, { Component } from "react";
import { observer, inject } from "mobx-react";

let uid = 0;

@inject("todoStore")
@observer
class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      value: e.target.value
    });
  };
  handleClick = () => {
    if (!this.state.value) return;

    this.props.todoStore.addTodo({
      id: uid++,
      text: this.state.value,
      completed: false
    });
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="input">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button onClick={this.handleClick}>提交</button>
        <p>{this.props.todoStore.total}个任务</p>
      </div>
    );
  }
}

export default TodoInput;
