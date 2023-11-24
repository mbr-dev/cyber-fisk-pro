import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { apiQAS } from "../../lib/api";
import Cookies from 'universal-cookie';

import { Loading } from "../../components/Loading";
import { CyberContext } from "../../context/cyber";
import { LessonContext } from "../../context/lesson";
import { ButtonHome } from "../../components/ButtonHome";
import { Notifications } from "../../components/Notifications";
import { HeaderTextImage } from "./components/HeaderTextImage";
import { ModalPronunciation } from "../../components/ModalPronunciation";

import taskImg from "./images/task.png";
import studioImg from "./images/studio.png";
import foneImg from "./images/fone.png";
import microImg from "./images/micro.png";
import qrImg from "./images/qrcode.png";
import superImg from "./images/super.png";

import { Container, Main, ButtonAreaBottom, ButtonAreaTop, ButtonTask, ButtonSuperTask, DivRight, ButtonBottom, BottomRight, BottomLeft, AreaFooter } from "./styles"

export const LessonSelected = () => {
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
      await apiQAS.get(`XPUsuario/RetornoTask?raf=${raf}&id_livro=${book.id}&num_lesson=${numSelLesson}&all=1`) //lembra de tirar
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
      <HeaderTextImage title={`Lesson ${numSelLesson}`} />

      <Main>
        {error ? <Notifications description={msgError} event={clickAlert}/> : null}
        <ButtonAreaTop>
          <DivRight>
            <ButtonTask onClick={() => {clickTask(1)}} disabled={!task1} style={{backgroundColor: !task1 ? '#d3d3d3' : ''}}>
              <img src={taskImg}  alt="" />
              <p>Task 1</p>
            </ButtonTask>

            <ButtonTask onClick={() => {clickTask(2)}} disabled={!task2} style={{backgroundColor: !task2 ? '#d3d3d3' : ''}}>
              <img src={taskImg}  alt="" />
              <p>Task 2</p>
            </ButtonTask>
          </DivRight>

          <ButtonSuperTask onClick={() => {clickTask(0)}} disabled={!superTask} style={{backgroundColor: !superTask ? '#d3d3d3' : ''}}>
            <img src={superImg}  alt="" />
            <p>Super Task</p>
          </ButtonSuperTask>
        </ButtonAreaTop>

        <ButtonAreaBottom>
          <BottomLeft>
            <ButtonBottom>
              <img src={foneImg} alt="" />
              <p>Audio</p>
            </ButtonBottom>

            <ButtonBottom onClick={() => {click('qr-code')}}>
              <img src={qrImg} alt="" />
              <p>QR</p>
            </ButtonBottom>
          </BottomLeft>

          <BottomRight>
            <ButtonBottom>
              <img src={studioImg} alt="" />
              <p>Studio</p>
            </ButtonBottom>

             <Dialog.Root>
                <Dialog.Trigger style={{border: 'none', backgroundColor: 'white', width: '100%'}}>
                  <ButtonBottom>
                    <img src={microImg} alt="" />
                    <p>Pronunciation</p>
                  </ButtonBottom>
                </Dialog.Trigger>
                <ModalPronunciation />
              </Dialog.Root>
          </BottomRight>
        </ButtonAreaBottom>
      </Main>

      <AreaFooter>
        <ButtonHome />
      </AreaFooter>
    </Container>
  )
}