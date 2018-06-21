import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../reducer/todos";

@connect(
  todos => todos,
  { addTodo }
)
export default class AddTodo extends Component {
  render() {
    let input;
    return (
      <form
        onSubmit={e => {
          if (input.value.trim() === "") {
            return;
          }
          e.preventDefault();
          this.props.addTodo(input.value);
          input.value = "";
        }}
      >
        <input
          type="text"
          required
          ref={node => {
            input = node;
          }}
        />
        <input type="submit" value="add" />
      </form>
    );
  }
}
