import React from "react";
import {s} from './StyledStyles'
import { MoneyType } from "./App";

type CurrentBankomatPropstype = {
  money: MoneyType;
};

export const CurrentBankomat = (props: CurrentBankomatPropstype) => {
  
    <s.Banknote color={props.money.banknotes === 'Dollars'?"green": '#5cb6ec'}>
      <s.Name>{props.money.banknotes}</s.Name>
      <s.Nominal>{props.money.value}</s.Nominal>
    </s.Banknote>

};


// const Banknote = styled.div`
//   background-color: ${props=>props.color}
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `;

// const BanknoteBlue = styled.div`
//   background-color: #5cb6ec;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `;

// const Name = styled.div`
//   display: flex; //чтобы надписи не наползали
//   justify-content: center; //чтобы надписи по центру
//   font-size: 30px;
// `;

// const Nominal = styled.div`
//   display: flex; //чтобы надписи не наползали
//   justify-content: center; //чтобы надписи по центру
//   font-size: 90px;
//   margin-top: 30px;
// `;




// const Banknote = styled.div`
//   background-color: ${props => {
//     if(props.color === 'green') {
//       return 'green'
//     } else {
//       return '#5cb6ec'
//     }
//   }};
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `;



//--------------------------------------------------------------------------------------------------------------------------------
// type CurrentBankomatPropstype = {
//   money: MoneyType;
// };

// export const CurrentBankomat = (props: CurrentBankomatPropstype) => {
//   return props.money.banknotes === "Dollars" ? (
//     <BanknoteGreen>
//       <Name>{props.money.banknotes}</Name>
//       <Nominal>{props.money.value}</Nominal>
//     </BanknoteGreen>
//   ) : (
//     <BanknoteBlue>
//       <Name>{props.money.banknotes}</Name>
//       <Nominal>{props.money.value}</Nominal>
//     </BanknoteBlue>
//   );
// };

// const BanknoteGreen = styled.div`
//   background-color: chartreuse;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `;

// const BanknoteBlue = styled.div`
//   background-color: #5cb6ec;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `;

// const Name = styled.div`
//   display: flex; //чтобы надписи не наползали
//   justify-content: center; //чтобы надписи по центру
//   font-size: 30px;
// `;

// const Nominal = styled.div`
//   display: flex; //чтобы надписи не наползали
//   justify-content: center; //чтобы надписи по центру
//   font-size: 90px;
//   margin-top: 30px;
// `;