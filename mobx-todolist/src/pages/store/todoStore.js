import { observable, action, computed, useStrict } from "mobx";
import filterStore from "./filterStore";
import { FilterType } from "../component/filtertype";
useStrict(true);
class TodoStore {
  @observable todos;

  constructor() {
    this.todos = [];
  }

  @action
  addTodo = id => {
    this.todos.push(id);
  };

  @action
  removeTodo = id => {
    this.todos.filter(todoId => todoId !== id);
  };

  @action
  toggleTodo = id => {
    this.todos.forEach(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
  };

  @action
  reset = () => {
    this.todos = [];
  };

  @computed
  get total() {
    return this.todos.length;
  }

  @computed
  get content() {
    return this.todos.length ? this.todos[0] : [];
  }

  @computed
  get sortedTodos() {
    debugger;
    switch (filterStore.filter) {
      case FilterType.ALL:
        return this.todos;
      case FilterType.COMPLETED:
        return this.todos.filter(todo => todo.completed);
      case FilterType.UNCOMPLETED:
        return this.todos.filter(todo => !todo.completed);
      default:
        return this.todos;
    }
  }
}

const todoStore = new TodoStore();

export default todoStore;
