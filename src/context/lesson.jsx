import { createContext, useState } from "react";

const LessonContext = createContext();

function LessonProvider({children}){
  const [numAtividade, setNumAtividade] = useState(1);
  const [numSelLesson, setNumSelLesson] = useState(1);
  const [numTask, setNumTask] = useState(1);
  const [lessons, setLessons] = useState([0,0,0,0,0,0,0,0,0,0]);//0 = neutro 1 = acerto 2 = erro
  const [container, setContainer] = useState(0);
  const [superTask, setSuperTask] = useState(false);
  const [pontosF, setPontosF] = useState(0);
  const [pontosM, setPontosM] = useState(0);
  const [pontosD, setPontosD] = useState(0);
  const [nivel, setNivel] = useState(0);
  const [rodadaGeral, setRodadaGeral] = useState(0);
  const [playAudio, setPlayAudio] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  //conteudos
  const [conteudoFacil, setConteudoFacil] = useState(null);
  const [conteudoMedio, setConteudoMedio] = useState(null);
  const [conteudoDificil, setConteudoDificil] = useState(null);

  const setNewConteudoFacil = (data) => {
    setConteudoFacil(data);
  }

  const setNewConteudoMedio = (data) => {
    setConteudoMedio(data);
  }

  const setNewConteudoDificil = (data) => {
    setConteudoDificil(data);
  }

  const newStatusPlay = (status) => {
    setPlayAudio(status);
  }

  const setNewRodada = (num) => {
    setRodadaGeral(num);
  }

  const setNewNivel = (nivel) => {
    setNivel(nivel);
  }

  const setNewSuperTask = (status) => {
    setSuperTask(status);
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

  const setNewAtividade = (num) => {
    setNumAtividade(num);
  }

  const setStatusLessons = (data) => {
    setLessons(data);
  }

  return (
    <LessonContext.Provider value={{
      numAtividade,
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
      superTask,
      conteudoFacil,
      conteudoMedio,
      conteudoDificil,
      setTimeElapsed,
      setStatusLessons,
      setNewContainer,
      setNewPontos,
      setNewNivel,
      setNewAtividade,
      setNewTask,
      setNewSelLesson,
      setNewRodada,
      newStatusPlay,
      setNewSuperTask,
      setNewConteudoFacil,
      setNewConteudoMedio,
      setNewConteudoDificil
    }}>
      {children}
    </LessonContext.Provider>
  )
}

export {LessonProvider, LessonContext}