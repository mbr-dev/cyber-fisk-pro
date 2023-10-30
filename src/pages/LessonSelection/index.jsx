import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

import { LessonContext } from "../../context/lesson";
import { FooterBtnHome } from "../../components/FooterBtnHome";
import { HeaderTextImage } from "../../components/HeaderTextImage";
import { ModalPronunciation } from "../../components/ModalPronunciation";

import TaskImg from "./images/Vector.svg";
import SuperImg from "./images/Super.svg";
import FoneImg from "./images/Fone.svg";
import MicroImg from "./images/Micro.svg";
import QrCodeImg from "./images/QrCode.png";
import ListaImg from "./images/Lista.png";

import { Container, Main, ButtonAreaBottom, ButtonAreaTop, ButtonTask, ButtonSuperTask, DivRight, ButtonBottom, BottomRight, BottomLeft } from "./styles"

export const LessonSelection = () => {
  const navigate = useNavigate();
  const { setNewTask, setNewSuperTask, numSelLesson, setNewAtividade } = useContext(LessonContext);

  const click = (page) => {
    if(page === 'qr-code'){
      localStorage.setItem("lastAccess","qr-code");
    }
    navigate(`/${page}`);
  }

  const clickTask = (id) => {
    if(id === 0){
      setNewSuperTask(true);
      navigate(`/SuperTask`);
    }else{
      setNewTask(id);
      //ir para tela de controle de jogos
      setNewAtividade(0);
      navigate(`/Lesson`);
    }
    
  }

  const home = () => {
    navigate(`/Home`);
  }
  
  return (
    <Container>
      <HeaderTextImage title={`Lesson ${numSelLesson}`} />

      <Main>
        <ButtonAreaTop>
          <DivRight>
            <ButtonTask onClick={() => {clickTask(1)}}>
              <img src={TaskImg}  alt="" />
              <p>Task 1</p>
            </ButtonTask>

            <ButtonTask onClick={() => {clickTask(2)}}>
              <img src={TaskImg}  alt="" />
              <p>Task 2</p>
            </ButtonTask>
          </DivRight>

          <ButtonSuperTask onClick={() => {clickTask(0)}}>
            <img src={SuperImg}  alt="" />
            <p>Super Task</p>
          </ButtonSuperTask>
        </ButtonAreaTop>

        <ButtonAreaBottom>
          <BottomLeft>
            <ButtonBottom>
              <img src={FoneImg} alt="" />
              <p>Audio</p>
            </ButtonBottom>

            <ButtonBottom onClick={() => {click('qr-code')}}>
              <img src={QrCodeImg} alt="" />
              <p>QR</p>
            </ButtonBottom>
          </BottomLeft>

          <BottomRight>
            <ButtonBottom>
              <img src={ListaImg} alt="" />
              <p>Studio</p>
            </ButtonBottom>

             <Dialog.Root>
                <Dialog.Trigger style={{border: 'none', backgroundColor: 'white', width: '100%'}}>
                  <ButtonBottom>
                    <img src={MicroImg} alt="" />
                    <p>Pronunciation</p>
                  </ButtonBottom>
                </Dialog.Trigger>
                <ModalPronunciation />
              </Dialog.Root>
          </BottomRight>
        </ButtonAreaBottom>
      </Main>

      <FooterBtnHome hasLS />
    </Container>
  )
}