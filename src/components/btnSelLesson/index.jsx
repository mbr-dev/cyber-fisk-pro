import React from "react";
import Content from "./style";
import { Button } from "@mui/material";

export const BtnLessonSel = (props) => {

  const btn = () =>{
    return (
      <Content>
        <Button className="btn">
          <label className="textNum">{props.num}</label>
          <label className="text">{props.lesson}</label>
        </Button>
      </Content>
    )
  }

  return(
    <>
      {btn()}
    </>
  )
}