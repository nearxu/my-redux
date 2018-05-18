import React, { Component } from "react";
import Father from "./context";
import Count from "./count-all";

// 装饰器模式
// @connect(
//   state=>({ num: state}),
//   { add, remove, addAsync }
// )
class Index extends Component {
  render() {
    return (
      <div>
        <Father />
        <Count />
      </div>
    );
  }
}

export default Index;
