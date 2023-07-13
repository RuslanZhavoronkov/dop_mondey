import React from "react";
import s from './SuperButton.module.css'

type PropsType = {
    callBack: ()=> void
    name?: string
    color?: string
    disabled?: boolean
    children: React.ReactNode
}



export const SuperButton: React.FC <PropsType> = (props) => {

    const{callBack, name, color, disabled, children, ...otherProps} = props



    const onClickHandler = () => {
    callBack()
    }


    // const finalClassName = s.button
    // + (disabled ? ' ' + s.disabled
    // : color === 'red'
    // ? ' ' + s.red
    // : color === 'secondary'
    // ? ' ' +s.secondary
    // : ' ' s.default )

    // + (className ? ' ' + className : '')

//const finalClassName = `${s.button} ${s.default}`

// const finalClassName = `
// ${s.button}   
// ${color === 'red' ? s.red : s.default}
// ${disabled ? s.disabled : ""}  `

const finalClassName = `
${s.button}   
${color === 'red' ? s.red : s.color === 'secondary' ? s.secondary : s.default}
${disabled ? s.disabled : ""}  `






    return (
        <button  className={finalClassName} onClick={onClickHandler}>{children}</button>
    )
}

//----------------------------------------------------------------------------------------------------------------------------------------------
// type PropsType = {
//     callBack: ()=> void
//     name: string
//     color: string
// }



// export SuperButton: React.FC <PropsType> = ({
//     callBack,
//     color,                                         
//     name, 
//     ... otherProps}) => {

//     const onClickHandler = () => {
//     callBack()
//     }
// console.log (color)

//     return (
//         <button onClick={onClickHandler}>{name}</button>
//     )
// }