
import { styled } from "styled-components";


const Banknote = styled.div`
  background-color: ${props=>props.color}
  width: 400px;
  height: 200px;
  margin: 10px;
`;



const Name = styled.div`
  display: flex; //чтобы надписи не наползали
  justify-content: center; //чтобы надписи по центру
  font-size: 30px;
`;

const Nominal = styled.div`
  display: flex; //чтобы надписи не наползали
  justify-content: center; //чтобы надписи по центру
  font-size: 90px;
  margin-top: 30px;
`;


export const s = {
    Banknote,
    Name, 
    Nominal
}