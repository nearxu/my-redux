import React, { Component } from "react";
import "./index.css";
import Todos from "../Todos";
import Filters from "../Filters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos />
        <Filters />
      </div>
    );
  }
}

export default App;
