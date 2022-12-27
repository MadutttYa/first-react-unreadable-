import React from "react";

const Form = ({ input, setinput, settodos, todos }) => {
  const blabla = (e) => {
    setinput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      text: input,
      completed: false,
      id: Math.random() * 1000,
    };
    settodos([...todos, newTodo]);
    setinput("");
  };

  return (
    <div>
      <input value={input} type="text" onChange={blabla} />
      <button type="submit" onClick={submitHandler}>
        Add text
      </button>
    </div>
  );
};

export default Form;
