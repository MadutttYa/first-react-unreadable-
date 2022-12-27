import "./App.css";
import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("KEY"));
    if (data !== null) {
      settodos(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("KEY", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1>MY TO DO APP</h1>
      <Form
        todos={todos}
        settodos={settodos}
        input={input}
        setinput={setinput}
      />
      <TodoList todos={todos} settodos={settodos} />
    </div>
  );
}

export default App;
