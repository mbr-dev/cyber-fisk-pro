import { TopMenuHeader } from "../../components/TopMenuHeader"
import { ButtonBg } from "../../components/ButtonBg"

import TaskImg from "./images/Vector.svg";
import SuperImg from "./images/Super.svg";
import FoneImg from "./images/Fone.svg";
import MicroImg from "./images/Micro.svg";
import QrCodeImg from "./images/QrCode.svg";
import ListaImg from "./images/Lista.svg";

import { Container, Main, ButtonAreaBottom, ButtonAreaTop, ButtonTask, ButtonSuperTask, DivRight, ButtonBottom, BottomRight, BottomLeft } from "./styles"

export const LessonSelection = () => {
  return (
    <Container>
      <TopMenuHeader title="Lesson 1" />

      <Main>
        <ButtonAreaTop>
          <DivRight>
            <ButtonTask>
              <img src={TaskImg}  alt="" />
              <p>Task1</p>
            </ButtonTask>

            <ButtonTask>
              <img src={TaskImg}  alt="" />
              <p>Task2</p>
            </ButtonTask>
          </DivRight>

          <ButtonSuperTask>
            <img src={SuperImg}  alt="" />
            <p>Super Task</p>
          </ButtonSuperTask>
        </ButtonAreaTop>

        <ButtonAreaBottom>
          <BottomLeft>
            <ButtonBottom className="button">
              <img src={FoneImg} alt="" />
              <p>Audio</p>
            </ButtonBottom>
            <ButtonBottom>
              <img src={QrCodeImg} alt="" />
              <p>QR</p>
            </ButtonBottom>
          </BottomLeft>

          <BottomRight>
            <ButtonBottom className="button">
              <img src={ListaImg} alt="" />
              <p>List of Verbs</p>
            </ButtonBottom>
            <ButtonBottom>
              <img className="micro" src={MicroImg} alt="" />
              <p>Pronunciation</p>
            </ButtonBottom>
          </BottomRight>
        </ButtonAreaBottom>
        <ButtonBg title="Home" w="15.875rem" h="2.5rem" mt="1.5rem" />
      </Main>
    </Container>
  )
}