import { TopMenuHeader } from "../../components/TopMenuHeader"
import { AreaButtonBottom } from "../../components/AreaButtonBottom"

import TaskImg from "./images/Vector.svg";
import SuperImg from "./images/Super.svg";
import FoneImg from "./images/Fone.svg";
import MicroImg from "./images/Micro.svg";
import QrCodeImg from "./images/QrCode.svg";
import ListaImg from "./images/Lista.svg";

import { LessonSelectionContainer, LessonSelectionContent, ButtonAreaBottom, ButtonAreaTop, ButtonTask, ButtonSuperTask, DivRight, ButtonBottom, BottomRight, BottomLeft } from "./styles"

export const LessonSelection = () => {
  return (
    <LessonSelectionContainer>
      <TopMenuHeader title="Lesson 1" />

      <LessonSelectionContent>
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
      </LessonSelectionContent>

      <AreaButtonBottom />
    </LessonSelectionContainer>
  )
}