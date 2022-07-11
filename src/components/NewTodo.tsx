import React, { useRef } from "react";

import classes from "./NewTodo.module.css";

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  // input value
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current!.value) {
      alert("Mustn't be empty!");
      return;
    }
    const enterdText = inputRef.current!.value.trim();
    props.onAddTodo(enterdText);
    inputRef.current!.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className={classes["form-control"]}>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={inputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
