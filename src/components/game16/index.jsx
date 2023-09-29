import { useState, useEffect, useCallback, useContext } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";

import { Container, Main, AnswerArea, WriteArea, Form } from "./styles";

export const Game16 = () => {
  return (
    <Container>
      <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd />
      <TitleLesson title="Make questions for the answers." />

      <Main>
        <WriteArea>
          <Form>
            <input
              type="text"
              placeholder="_________________________"
            />
          </Form>
        </WriteArea>

        <AnswerArea>
          <p>Yes, I like fast food.</p>
        </AnswerArea>
      </Main>
    </Container>
  )
}