import React, { useState } from "react";

// Create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>My to-do list</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTodos([...todos, inputValue]);
                setInputValue("");
              }
            }}
            placeholder="What do you need to do"
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <i
              className="fas fa-trash-alt"
              onClick={() =>
                setTodos(todos.filter((_, currentIndex) => index !== currentIndex))
              }
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
