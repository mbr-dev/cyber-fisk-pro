import React from "react";

import { Container } from "./styles";

export const TitleLesson = ({ title, mt }) => {
  return(
    <Container style={{
      marginTop: mt
    }}>
      <span>{title}</span>
    </Container>  
  )
}