import React, { ChangeEvent, useState } from "react";

type PropsType = {
  setTitle: (title: string) => void;
  title: string;
};

export const Superinput = (props: PropsType) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setTitle(e.currentTarget.value);
  };

  return <input value={props.title} type="text" onChange={onChangeHandler} />;
};
