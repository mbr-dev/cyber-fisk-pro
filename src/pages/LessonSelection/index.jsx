import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { apiQAS } from "../../lib/api";
import Cookies from 'universal-cookie';

import { ButtonBg } from "../../components/ButtonBg";
import { LessonContext } from "../../context/lesson";
import { CyberContext } from "../../context/cyber";
import { HeaderText } from "../../components/HeaderText"
import { Loading } from "../../components/Loading";
import { Notifications } from "../../components/Notifications";

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
  const { book, chooseNotification } = useContext(CyberContext);
  const [task1, setTask1] = useState(false);
  const [task2, setTask2] = useState(false);
  const [superTask, setSuperTask] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [error, setError] = useState(false);

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
  
  const verificaTask = async () => {
    setIsLoading(true);
    try {
      const cookies = new Cookies();
      const raf = cookies.get("raf");
      await apiQAS.get(`XPUsuario/RetornoTask?raf=${raf}&id_livro=${book.id}&num_lesson=${numSelLesson}`)
      .then((resp) => {
        console.log('verificaTask ==> ', resp.data)
        if(resp.data.erro === null){
          
          setTask1(resp.data.dados[0].task1);
          setTask2(resp.data.dados[0].task2);
          setSuperTask(resp.data.dados[0].super_task);
        }
        setIsLoading(false);
      })
    } catch(error) {
      setIsLoading(false);
      chooseNotification(3);
      setMsgError(error);
      setError(true);
    }
  }

  function clickAlert(){
    setError(false);
  }

  useEffect(() => {
    verificaTask();
  },[]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <HeaderText title={`Lesson ${numSelLesson}`} />

      <Main>
        {error ? <Notifications description={msgError} event={clickAlert}/> : null}
        <ButtonAreaTop>
          <DivRight>
            <ButtonTask onClick={() => {clickTask(1)}} disabled={!task1} style={{backgroundColor: !task1 ? '#d3d3d3' : ''}}>
              <img src={TaskImg}  alt="" />
              <p>Task1</p>
            </ButtonTask>

            <ButtonTask onClick={() => {clickTask(2)}} disabled={!task2} style={{backgroundColor: !task2 ? '#d3d3d3' : ''}}>
              <img src={TaskImg}  alt="" />
              <p>Task2</p>
            </ButtonTask>
          </DivRight>

          <ButtonSuperTask onClick={() => {clickTask(0)}} disabled={!superTask} style={{backgroundColor: !superTask ? '#d3d3d3' : ''}}>
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