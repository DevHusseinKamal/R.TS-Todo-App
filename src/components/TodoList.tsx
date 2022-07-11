import React from "react";
import { Todo } from "../todo.model";

import classes from "./TodoList.module.css";

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  // function to toggle line-through style when click
  const toggleCheckHandler = (event: React.MouseEvent) => {
    const element = event.target as HTMLSpanElement;

    if (element.style.textDecoration) {
      element.style.textDecoration = "";
    } else {
      element.style.textDecoration = "line-through";
    }
  };

  const setTodos = props.items.map((todo) => {
    return (
      <li key={todo.id}>
        <span onClick={toggleCheckHandler}>{todo.text}</span>
        <button type="button" onClick={props.onDeleteTodo.bind(null, todo.id)}>
          DELETE
        </button>
      </li>
    );
  });

  return <ul className={classes.ul}>{setTodos}</ul>;
};

export default TodoList;
