import { createStore } from "./redux/redux";
import React from "react";
// action
const ADD = "ADD";
const LESS = "LESS";

// action creator
const add = () => ({
  type: "ADD"
});

const less = () => ({
  type: "LESS"
});

// reduce
function counter(state = 10, action) {
  switch (action.type) {
    case "ADD":
      return (state += 1);
    case "LESS":
      return (state -= 1);
    default:
      return state;
  }
}

const store = createStore(counter);

store.subscribe(() => {
  console.log(store.getSatet());
});
store.dispatch(add());
store.dispatch(add());
store.dispatch(add());

store.dispatch(less());

function Index({}) {
  return <div>count all</div>;
}
export default Index;
