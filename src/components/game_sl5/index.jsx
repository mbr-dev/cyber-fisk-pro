import { X } from "lucide-react";

import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../TitleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { ButtonAnswer } from "../ButtonAnswer";

import { Container, Main, Answer, WordSelected, Words, Div, DivA, DivQ, Answers, Delete, WordS } from "./styles";

export const GameSL5 = () => {
  return (
    <Container>
      <HeaderLesson numEnd="Finish" numStart="Super task" superTaskStart trophyEnd />
      <TitleLesson title="Make 5 Words" />

      <Main>
        <Answers>
          <Div>
            <DivQ>
              <span>1. Color of a fruit</span>
            </DivQ>
            <DivA>
              <Answer>
              </Answer>
              <Answer>
              </Answer>
              <Answer>
              </Answer>
            </DivA>
          </Div>

          <Div>
            <DivQ>
              <span>1. Color of a fruit</span>
            </DivQ>
            <DivA>
              <Answer>
              </Answer>
              <Answer>
              </Answer>
              <Answer>
              </Answer>
            </DivA>
          </Div>
          <Div>
            <DivQ>
              <span>1. Color of a fruit</span>
            </DivQ>
            <DivA>
              <Answer>
              </Answer>
              <Answer>
              </Answer>
              <Answer>
              </Answer>
            </DivA>
          </Div>
          <Div>
            <DivQ>
              <span>1. Color of a fruit</span>
            </DivQ>
            <DivA>
              <Answer>
              </Answer>
              <Answer>
              </Answer>
              <Answer>
              </Answer>
            </DivA>
          </Div>
          <Div>
            <DivQ>
              <span>1. Color of a fruit</span>
            </DivQ>
            <DivA>
              <Answer>
              </Answer>
              <Answer>
              </Answer>
              <Answer>
              </Answer>
            </DivA>
          </Div>

        </Answers>
        <WordSelected>
          <WordS>

          </WordS>
          <Delete>
            <X size={32} color="white" strokeWidth={3} />
          </Delete>
        </WordSelected>
        <Words>
          <ButtonAnswer
            h="2.5rem"
          >
            bro
          </ButtonAnswer>
          <ButtonAnswer
            h="2.5rem"
          >
            bro
          </ButtonAnswer>
          <ButtonAnswer
            h="2.5rem"
          >
            bro
          </ButtonAnswer>
          <ButtonAnswer
            h="2.5rem"
          >
            bro
          </ButtonAnswer>
          <ButtonAnswer
            h="2.5rem"
          >
            bro
          </ButtonAnswer>
          <ButtonAnswer
            h="2.5rem"
          >
            bro
          </ButtonAnswer>
          <ButtonAnswer
            h="2.5rem"
          >
            bro
          </ButtonAnswer>
          <ButtonAnswer
            h="2.5rem"
          >
            bro
          </ButtonAnswer>
        </Words>
        <ButtonBg
          w="9rem"
          h="2rem"
          title="3 Hints"
        />
      </Main>
    </Container>
  )
}