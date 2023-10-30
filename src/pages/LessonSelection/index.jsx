import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

import { ButtonBg } from "../../components/ButtonBg";
import { LessonContext } from "../../context/lesson";
import { HeaderText } from "../../components/HeaderText"

import TaskImg from "./images/Vector.svg";
import SuperImg from "./images/Super.svg";
import FoneImg from "./images/Fone.svg";
import MicroImg from "./images/Micro.svg";
import QrCodeImg from "./images/QrCode.svg";
import ListaImg from "./images/Lista.svg";
import { LineSeparator } from "../../components/LineSeparator";
import { ModalPronunciation } from "../../components/ModalPronunciation";

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
      <HeaderText title={`Lesson ${numSelLesson}`} />

      <Main>
        <ButtonAreaTop>
          <DivRight>
            <ButtonTask onClick={() => {clickTask(1)}}>
              <img src={TaskImg}  alt="" />
              <p>Task1</p>
            </ButtonTask>

            <ButtonTask onClick={() => {clickTask(2)}}>
              <img src={TaskImg}  alt="" />
              <p>Task2</p>
            </ButtonTask>
          </DivRight>

          <ButtonSuperTask onClick={() => {clickTask(0)}}>
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
            <ButtonBottom onClick={() => {click('qr-code')}}>
              <img src={QrCodeImg} alt="" />
              <p>QR</p>
            </ButtonBottom>
          </BottomLeft>

          <BottomRight>
            <ButtonBottom className="button">
              <img src={ListaImg} alt="" />
              <p>Studio</p>
            </ButtonBottom>
            {/* <ButtonBottom>
              <img className="micro" src={MicroImg} alt="" />
              <p>Pronunciation</p>
            </ButtonBottom> */}
             <Dialog.Root>
                <Dialog.Trigger style={{border: 'none', backgroundColor: 'white', width: '100%'}}>
                  <ButtonBottom>
                    <img className="micro" src={MicroImg} alt="" />
                    <p>Pronunciation</p>
                  </ButtonBottom>
                </Dialog.Trigger>
                <ModalPronunciation />
              </Dialog.Root>
          </BottomRight>
        </ButtonAreaBottom>
        <LineSeparator w="80%" mt="10px" />
        <ButtonBg title="Home" w="15rem" h="2.5rem" onPress={home}/>
      </Main>
    </Container>
  )
}