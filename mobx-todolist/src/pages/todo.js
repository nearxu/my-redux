import React, { Component } from "react";

import TodoInput from "./component/todoinput";
import TodoList from "./component/todolist";
import FilterFoot from "./component/filterFoot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput />
        <TodoList />
        <FilterFoot />
      </div>
    );
  }
}

export default App;
