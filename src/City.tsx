import React from "react";
import styled from "styled-components";
import { MoneyType } from "./App";
import { CurrentBankomat } from "./CurrentBankomat";

type CityPropsType = {
  data: MoneyType[];
};

export const City = (props: CityPropsType) => {
  const mappedMoney = props.data.map((el: MoneyType, index: number) => {
    <CurrentBankomat key={index} money={el} />;
  });

  
  return (
    <div>
      <Wrapper>{mappedMoney}</Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row; // построение в строчку
  flex-wrap: wrap; //чтобы переносилось, если будет что не влазить
  font-size: 30px; //размер шрифта
`;
