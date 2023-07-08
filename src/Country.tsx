import React from 'react';
import { BanknotsType, MoneyType } from './App';
import { City } from './City';

type CountryPropsType={
    data: MoneyType[] 
    setFilterValue: (filterValue:BanknotsType)=> void
}

export const Country = (props: CountryPropsType) => {
   
const setAll = () => {
props.setFilterValue("ALL")
    }


const setDollars = () => {
props.setFilterValue("Dollars")
} 

const setRubls = () => {
props.setFilterValue("RUBLE")
}

return (
    <div>
        <button onClick = {()=>{setAll()}}>All</button>
        <button onClick = {()=>{setDollars()}}>Dollars</button>
        <button onClick = {()=>{setRubls()}}>Rubls</button>
        <City data={props.data}/>
    </div>
)
}