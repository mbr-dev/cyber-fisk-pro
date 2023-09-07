import { useState, useContext, useEffect } from "react";

import Button from "@mui/material/Button"
import { TitleLesson } from "../titleLesson";
import { SubtitleLesson } from "../subtitleLesson";
import { HeaderLesson } from "../HeaderLesson";

import { LessonContext } from "../../context/lesson";
import { L1_T1_Medio } from "../../utils/lesson1_Task1";
import { TrocaAtividade } from "../../utils/regras";

import { Game2Container, Game2Content } from "./styles";
import { Loading } from "../Loading";

export function Game2(props) {
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada} = useContext(LessonContext);

  console.log(rodadaGeral)

  const [idClick, setIdClick] = useState([0,1,2]);
  const [rodada, setRodada] = useState(0);
  const [pergunta, setPergunta] = useState('');
  const [sortNum, setSortNum] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [bloqueia, setBloqueia] = useState(true);
  const [isloading, setIsLoading] = useState(false);

  function loadLesson() {
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

  function newRodada(num) {
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

  function handleClick(id) {
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
      },500);
    } else if (regra === "Game over") {
      setNewPontos(0,0);
      setTimeout(() =>{
        alert('GAME OVER!!');
        setNewContainer(1);
      },500);
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
    
  return (
    <Game2Container>
      {isloading &&
        <Loading />
      }

      <HeaderLesson numStart="Task 2" numEnd="Task 3" />

      <TitleLesson title="Choose the correct alternative"/>
      <SubtitleLesson title={pergunta}/>

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