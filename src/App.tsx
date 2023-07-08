import React, { useState } from 'react';
import './App.css';
import { Country } from './Country';

export type BanknotsType = 'Dollars'|'RUBLE'|'ALL'
export type MoneyType= {
    banknotes: BanknotsType
    value: number
    number: string
}

let defaultMoney:MoneyType[] =[
    {banknotes:"Dollars", value: 100, number: "a1234567890"},
    {banknotes:"RUBLE", value: 100, number: "a1234567891"},
    {banknotes:"Dollars", value: 100, number: "a1234567892"},
    {banknotes:"RUBLE", value: 100, number: "a1234567893"},
    {banknotes:"Dollars", value: 100, number: "a1234567894"},
    {banknotes:"RUBLE", value: 100, number: "a1234567895"},
    {banknotes:"Dollars", value: 100, number: "a1234567896"},
    {banknotes:"RUBLE", value: 100, number: "a1234567897"}
]

export const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[] => {
  
  if(filter === "ALL") {
    return money;
  } 
  return money.filter((el)=> {el.banknotes === filter});
 
}

function App() {

    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotsType>("ALL")

    const filteredMoney = moneyFilter(money, filterValue)

    
   




    return (
        <div className="App">
           <Country data = {filteredMoney} setFilterValue={setFilterValue} />
        </div>
    );
}

export default App;
