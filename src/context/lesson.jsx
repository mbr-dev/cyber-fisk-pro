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
      setNewLesson,
      setNewsuperTask,
      superTask,
      lessons,
      setStatusLessons,
      setNewContainer,
      container,
      setNewSelLesson,
      numSelLesson,
      setNewTask,
      numTask,
      pontosD,
      pontosF,
      pontosM,
      setNewPontos,
      nivel,
      setNewNivel,
      rodadaGeral,
      setNewRodada,
      playAudio,
      newStatusPlay
    }}>
      {children}
    </LessonContext.Provider>
  )
}

export {LessonProvider, LessonContext}