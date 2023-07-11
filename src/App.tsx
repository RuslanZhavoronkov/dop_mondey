import React, { ChangeEvent, useRef } from "react";

import "./App.css";
import { useEffect, useState } from "react";
import { SuperButton } from "./components/SuperButton";
import { Superinput } from "./components/SuperInput";

type TodosType = { //Типизация приходящих данных
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodosType[]>([]);
  const [title, setTitle] = useState<string>('')

  const fetchRequest = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }

  useEffect (() => {  //Запускает запрос на сервер(автоматическая загрузка)
    fetchRequest();

    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((json) => setTodos(json));
  },[]);

  const showtodosHandler = () => {
    fetchRequest();
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((json) => setTodos(json));

   
      
  };

  const hidetodosHandler = () => {
    setTodos([])
  }
//______________________________________________________________________


const addTaskHandler = () => {
  let newTasks = {userId: 1, id:todos.length+1, title:title, completed: false}

   setTodos([...todos, newTasks]);
   setTitle('');
}



  return (
    <div className="App">
    <div>
    {/* <input type = "text" onChange={onChangeInputHandler} value={title}/> */}
    <Superinput  setTitle={setTitle} title = {title}/>
    <SuperButton name = {"+"} callBack={addTaskHandler}/>
    </div>
    <div>
    <button onClick={showtodosHandler}>Show me todos</button>
    <button onClick={hidetodosHandler}>Hide todos</button>
    </div>
    
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


