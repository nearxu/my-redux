import React, { Component } from "react";
import { connect } from "react-redux";
import { setFilter } from "../reducer/filter";
import { visbleFilter } from "../reducer/filter";
@connect(
  filter => filter,
  { setFilter }
)
class Foot extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.setFilter(visbleFilter.SHOW_ALL)}>
          filter all
        </button>
        <button
          onClick={() => this.props.setFilter(visbleFilter.SHOW_COMPLETED)}
        >
          filter COMPLETED
        </button>
        <button onClick={() => this.props.setFilter(visbleFilter.SHOW_ACTIVE)}>
          filter ACTIVE
        </button>
      </div>
    );
  }
}

export default Foot;
