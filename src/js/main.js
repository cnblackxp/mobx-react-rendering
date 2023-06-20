import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import TodoStore from "./TodoStore"
import TodoListAlmosafer from "./TodoListAlmosafer"

const app = document.getElementById("app")

ReactDOM.render(<TodoListAlmosafer store={TodoStore} />, app)

