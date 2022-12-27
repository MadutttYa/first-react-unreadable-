import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, settodos }) => {
  return (
    <div className="container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todo={todo}
            settodos={settodos}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
