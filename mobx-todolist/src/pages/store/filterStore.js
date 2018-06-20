import { observable, action, useStrict } from "mobx";

class FilterStore {
  @observable filterStore;
  @observable aaa;
  @observable bbb;
  constructor() {
    this.filter = "";
  }
  @action
  filterTodo = type => {
    this.filter = type;
    console.log(this.filter, "filter");
  };
}
const filterStore = new FilterStore();

export default filterStore;
