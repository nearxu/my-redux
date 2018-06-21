import React, { Component } from "react";
import { connect } from "react-redux";
import { visbleFilter } from "../reducer/filter";
import { toggleTodo } from "../reducer/todos";

const getFilterTodos = state => {
  let filter = state.filter;
  let todos = state.todos;
  switch (filter) {
    case visbleFilter.SHOW_ALL:
      return todos;
    case visbleFilter.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case visbleFilter.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

@connect(
  todos => todos,
  { toggleTodo }
)
class TodoList extends Component {
  render() {
    if (!this.props.todos.length) return <div />;
    return (
      <ul>
        {this.props.todos.map((todo, index) => {
          return (
            <div key={index}>
              <span onClick={() => this.props.toggleTodo(todo.id)}>
                {todo.text}
              </span>
              <span>{todo.completed ? "完成" : "未完成"}</span>
            </div>
          );
        })}
      </ul>
    );
  }
}
export default TodoList;
