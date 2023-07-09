import React from "react";
import { Button } from "./Button";

const Todolist = ()=> {

    const removeTodolistHandler = (){
props.removetodolist(props.id)
    }

    const addTaskHandler = () => {
        props.addTask(title, props.todolistId)
        setTitle('')
    }

    const removeTaskHandler = ()=> {
        Props.removeTask(props.id, props.todolistId)

    }

    const changeFilterHandler (value) => {
        Props.changeFilter(value, props.id)
    }
    return (
        <div>
            <h3>
                {props.title}
                <Button name={'x'} callBack={removeTodolistHandler}/>
                <Button name={'+'} callBack={removeTodolistHandler}/>
                <div>
                <Button name={'All'} callBack={()=>removeTodolistHandler('All')}/>
                <Button name={'Active'} callBack={()=>removeTodolistHandler('Active')}/>
                <Button name={'Completed'} callBack={()=>removeTodolistHandler('Completed')}/>
                </div>
                
            </h3>
        </div>
        <ul>
            props.tasks.map(t => {
              return (
                <li key = test={t.id}>
                    <Button callBack={removeTaskHandler(t.id) name={x}/}
                </li>
              )  
            })
        </ul>
    )
}