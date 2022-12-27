import React from "react";

const Todo = ({ text, todo, todos, settodos }) => {
  const deleteHandler = () => {
    settodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    settodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={deleteHandler}>❌</button>
      <button onClick={completeHandler}>✅</button>
    </div>
  );
};

export default Todo;
