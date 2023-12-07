import React from "react";

import { Container } from "./styles";

export const TitleLesson = ({ title }) => {
  return(
    <Container>
      <span>{title}</span>
    </Container>  
  )
}