import React from 'react';
import './App.css';
import { SuperButton } from './components/SuperButton';
import { SuperAdidas } from './components/SuperAdidas';

function App() {

    const tasks = [
        {id: 1, title:'HTML&CSS', isDone: true},
        {id: 1, title:'JS', isDone: true},
        {id: 1, title:'ReactJS', isDone: false}
    ]
    return (
        <div className="App">
            {/* <SuperButton callBack={()=>{}} color='red'/> */}
            <SuperButton callBack={()=>{}} color='red'>RED SUPER BUTTON</SuperButton>
            <SuperButton callBack={()=>{}}>SUPER BUTTON</SuperButton>
            <SuperButton callBack={()=>{}} disabled>DISABLED SUPER BUTTON</SuperButton>

            <SuperAdidas tasks = {tasks} />
            <SuperAdidas tasks = {tasks} >
            <SuperButton callBack={()=>{}} color='red'>RED SUPER BUTTON</SuperButton>
            <SuperButton callBack={()=>{}}>SUPER BUTTON</SuperButton>
            <input type="text"/>
            <input type="text"/>
            <div>info</div>
            </SuperAdidas>


            <SuperAdidas tasks = {tasks} />
            <SuperAdidas tasks = {tasks} >
            <SuperButton callBack={()=>{}} color='red'>RED SUPER BUTTON</SuperButton>
            <SuperButton callBack={()=>{}}>SUPER BUTTON</SuperButton>
            <input type="text"/>
            <input type="text"/>
            <div>info</div>
            </SuperAdidas>
        </div>
    );
}

export default App;
