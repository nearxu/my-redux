import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class TodoList extends Component {
  handleToggle = id => {
    this.props.todoStore.toggleTodo(id);
  };

  render() {
    const getType = completed => {
      return completed ? "完成" : "未完成";
    };

    const getClassName = completed => {
      return completed ? "completed" : "";
    };
    return (
      <ul className="list">
        {this.props.todoStore.sortedTodos.map(item => {
          return (
            <li key={item.id}>
              {item.text}
              <span className={getClassName(item.completed)}>
                {getType(item.completed)}
              </span>
              <button
                className="toggle"
                onClick={this.handleToggle.bind(this, item.id)}
              >
                切换状态
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
