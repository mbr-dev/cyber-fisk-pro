import { createContext, useState } from "react";

const LessonContext = createContext();

function LessonProvider({children}){
  const [numLesson, setNumLesson] = useState(0);
  const [superTask, setSuperTask] = useState(["","","","","","","","","",""]);
  const [lessons, setLessons] = useState([0,0,0,0,0,0,0,0,0,0]);//0 = neutro 1 = acerto 2 = erro
  const [container, setContainer] = useState(0);
  const [numSelLesson, setNumSelLesson] = useState(0);
  const [numTask, setNumTask] = useState(0);
  const [pontosF, setPontosF] = useState(0);
  const [pontosM, setPontosM] = useState(0);
  const [pontosD, setPontosD] = useState(0);
  const [nivel, setNivel] = useState(0);
  const [rodadaGeral, setRodadaGeral] = useState(0);
  const [playAudio, setPlayAudio] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const newStatusPlay = (status) => {
    setPlayAudio(status);
  }

  const setNewRodada = (num) => {
    setRodadaGeral(num);
  }

  const setNewNivel = (nivel) => {
    setNivel(nivel);
  }

  const setNewPontos = (nivel, pontos) => {
    switch(nivel){
      case 0:
        setPontosF(pontos);
      case 1:
        setPontosM(pontos);
      case 2:
        setPontosD(pontos);
    }
  }

  const setNewSelLesson = (num) => {
    setNumSelLesson(num);
  }
  const setNewTask = (num) => {
    setNumTask(num);
  }

  const setNewContainer = (num) => {
    setContainer(num);
  }

  const setNewLesson = (num) => {
    setNumLesson(num);
  }

  const setNewsuperTask = (data) => {
    setSuperTask(data);
  }

  const setStatusLessons = (data) => {
    setLessons(data);
  }

  return (
    <LessonContext.Provider value={{
      numLesson,
      superTask,
      pontosD,
      lessons,
      pontosF,
      container,
      nivel,
      numSelLesson,
      playAudio,
      numTask,
      pontosM,
      rodadaGeral,
      timeElapsed,
      setTimeElapsed,
      setNewsuperTask,
      setStatusLessons,
      setNewContainer,
      setNewPontos,
      setNewNivel,
      setNewTask,
      setNewSelLesson,
      setNewRodada,
      newStatusPlay
    }}>
      {children}
    </LessonContext.Provider>
  )
}

export {LessonProvider, LessonContext}