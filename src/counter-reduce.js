let initState = {
  count: 0
};

const counter = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return state.count++;
    default:
      return state;
  }
};
export default counter;
