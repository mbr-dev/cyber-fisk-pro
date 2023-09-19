import { useState, useContext, useEffect } from "react";

import Button from "@mui/material/Button"
import { TitleLesson } from "../TitleLesson";
import { SubTitleLesson } from "../SubTitleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { Loading } from "../Loading";

import { LessonContext } from "../../context/lesson";
import { L1_T1_Medio } from "../../utils/lesson1_Task1";
import { TrocaAtividade } from "../../utils/regras";

import { Game2Container, Game2Content } from "./styles";

export const Game2 = () => {
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, timeElapsed, setTimeElapsed} = useContext(LessonContext);
  console.log("GAME TIME: ", timeElapsed);

  const [idClick, setIdClick] = useState([0,1,2]);
  const [rodada, setRodada] = useState(0);
  const [pergunta, setPergunta] = useState('');
  const [sortNum, setSortNum] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [bloqueia, setBloqueia] = useState(true);
  const [isloading, setIsLoading] = useState(false);

  const loadLesson = () => {
    const tam = L1_T1_Medio.length;
    let temp = [];

    for (let a = 0; a < tam; a++) {
      temp.push(a);
    }

    temp = temp.sort(() => Math.random() - 0.5);

    setSortNum(temp);
    setPergunta(L1_T1_Medio[temp[rodada]].pergunta);

    let tempResp = [];
    let tempSortNum = idClick;

    tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
    setIdClick(tempSortNum);

    for (let a = 0; a < 3; a ++) {
      tempResp.push(L1_T1_Medio[temp[rodada]].resposta[tempSortNum[a]]);
    }

    setRespostas(tempResp);
    setBloqueia(false);
  }

  const newRodada = (num) => {
    setPergunta(L1_T1_Medio[sortNum[num]].pergunta);
    let tempResp = [];
    let tempSortNum = idClick;
    tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
    setIdClick(tempSortNum);

    for (let a = 0; a < 3; a ++) {
      tempResp.push(L1_T1_Medio[sortNum[num]].resposta[tempSortNum[a]]);
    }

    setRespostas(tempResp);
    setBloqueia(false);
  }

  const handleClick = (id) => {
    if(bloqueia){
      return;
    }

    setBloqueia(true);
    let tempA = acertos;

    if (idClick[id] === 0) {
      tempA = tempA + 2;
      setNewPontos(1,(tempA));
      setAcertos(tempA);
    } else {
      let tempE = erros;
      tempE++;
      setErros(tempE);
    }

    let tempR = rodada;
    tempR++;
    setRodada(tempR);
    let tempGeral = rodadaGeral;
    tempGeral++;
    setNewRodada(tempGeral);
    // const teplayAudioste = new Audio(idClick[id] === 0 ? somAcerto : somErro);
    // playAudio.play();
    //nivel, rodada, pontos, rodadaNivel
    const regra = TrocaAtividade(1, tempGeral,tempA,tempR);
    if (regra === "Continua") {
      setTimeout(() =>{
          newRodada(tempR);
      }, 500);
    } else if (regra === "Game over") {
      setNewPontos(0,0);
      setTimeout(() =>{
        alert('GAME OVER!!');
        setNewContainer(1);
      }, 500);
    } else {
      //troca de nivel
      setTimeout(() =>{
        setNewLesson(2);
      }, 500);
    }
  }
    
  useEffect(() => { 
    loadLesson();
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (rodadaGeral < 10) {
        setTimeElapsed(state => {
          return state + 1
        })
      }
      
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed, rodadaGeral])
    
  return (
    <Game2Container>
      {isloading &&
        <Loading />
      }

      <HeaderLesson numStart="Task 2" numEnd="Task 3" />

      <TitleLesson title="Choose the correct alternative"/>
      <SubTitleLesson title={pergunta}/>

      <Game2Content>
        {respostas.map((resposta, index) => {
          return (
            <Button key={index} className="btn" onClick={() => handleClick(index)}>
              <p>{resposta}</p>
            </Button>
          )
        })}
      </Game2Content>
    </Game2Container>
  )
}