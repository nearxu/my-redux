import React, { Component } from 'react'
import TodoInput from './todoInput'
import TodoList from './todoList'

class Todos extends Component {
  render() {
    return (
      <div className="todos">
        <TodoInput />
        <TodoList />
      </div>
    )
  }
}

export default Todos