import React, { Component } from "react";

import AddTodo from "./component/addtodo";
import TodoList from "./component/todolist";
import FilterFoot from "./component/filterfoot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
        <FilterFoot />
      </div>
    );
  }
}

export default App;
