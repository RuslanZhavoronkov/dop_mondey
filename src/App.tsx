import React from "react";

import "./App.css";
import { useEffect, useState } from "react";

type TodosType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodosType[]>([]);

  const fetchFoo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  };

  useEffect(() => {
    fetchFoo();
  }, []);

  return (
    <div className="App">
      <ul>
        {" "}
        {todos.map((el) => {
          return (
            <li key={el.id}>
              <span>{el.id}</span>
              <span>__{el.userId}</span>
              <span>__{el.title}</span>
              <input type="checkbox" checked={el.completed} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
