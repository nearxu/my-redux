export const setFilter = filters => ({
  type: "SET_FILTER",
  filters
});

export const visbleFilter = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const filter = (state = visbleFilter.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filters;
    default:
      return state;
  }
};
