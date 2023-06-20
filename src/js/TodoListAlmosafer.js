import React, { useEffect, useState } from "react"
import { autorun } from "mobx"


function useTodoListStore(store) {
  const [state, setState] = useState({
    clearComplete: null,
    filter: '',
    setFilter: null,
    filteredTodos: [],
    setComplete: null,
    createTodo: null
  });

  useEffect(() => {
    autorun(() => {
      setState({
        clearComplete: store.clearComplete,
        filter: store.filter,
        setFilter: store.setFilter,
        filteredTodos: store.filteredTodos,
        setComplete: store.setComplete,
        createTodo: store.createTodo
      })
    })
  }, [])
  

  return state;
}


export default function TodoListAlmosafer({ store }) {
  const { clearComplete, filter, setFilter, filteredTodos, setComplete, createTodo } = useTodoListStore(store);

  const createNew = (e) => {
    if (e.which === 13) {
      createTodo(e.target.value)
      e.target.value = ""
    }
  }

  const _filter = (e) => {
    setFilter(e.target.value);
  }
        
  const toggleComplete = (index) => {
    setComplete(index);
  }

  const todoList = filteredTodos.map((todo, index) => (
    <li key={todo.id}>
      <input type="checkbox" onChange={() => toggleComplete(index)} value={todo.complete} checked={todo.complete} />
      <span>{todo.value}</span>
    </li>
  ))
  return (
    <div>
      <h1>todos</h1>
      <input className="new" onKeyPress={createNew} placeholder="enter new todo"/>
      <input className="filter" value={filter} onChange={_filter} placeholder="search todos"/>
      <ul>{todoList}</ul>
      <a href="#" onClick={clearComplete}>Clear Complete</a>
    </div>
  );
}
