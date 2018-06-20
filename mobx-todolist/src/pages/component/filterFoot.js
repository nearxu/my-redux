import React, { Component } from "react";
import { FilterType } from "./filtertype";
import { inject, observer } from "mobx-react";

@inject("filterStore")
@observer
class Filters extends Component {
  handleClick(type) {
    this.props.filterStore.filterTodo(type);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this, FilterType.ALL)}>
          All
        </button>
        <button onClick={this.handleClick.bind(this, FilterType.COMPLETED)}>
          COMPLETED
        </button>
        <button onClick={this.handleClick.bind(this, FilterType.UNCOMPLETED)}>
          UNCOMPLETED
        </button>
      </div>
    );
  }
}

export default Filters;
