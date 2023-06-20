import { computed, observable } from "mobx"

class Todo {
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

export class TodoStore {
  @observable todos = []
  @observable filter = ""
  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i")
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
  }

  setFilter = (value) => {
    this.filter = value;
  }

  createTodo = (value) => {
    this.todos.push(new Todo(value))
  }

  setComplete = (index) => {
    const updatedTodo = new Todo(this.todos[index].value);
    updatedTodo.complete = !this.todos[index].complete;
    this.todos[index] = updatedTodo;
  }

  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    this.todos.replace(incompleteTodos)
  }
}

export default new TodoStore

