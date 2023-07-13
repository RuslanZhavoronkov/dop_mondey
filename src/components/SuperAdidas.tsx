import React from "react";

type PropsType ={
tasks: InType[]
children?:React.ReactNode
}

type InType ={
id: number, 
title:string, 
isDone: boolean   
}

export const SuperAdidas: React.FC <PropsType> = (props: PropsType) => {

    const {tasks, children} = props
    return(
<div>
<ul>
{tasks.map(el =>{
    return (
        <li key = {el.id}>
            <span>{el.id}</span>
            <span>{el.title}</span>
            <input type = {'checkbox'} checked = {el.isDone}/>
        </li>
    )
})}
</ul>
<div>{children}</div>
<div>________________________________________________________________________</div>
</div>
    ) 
}