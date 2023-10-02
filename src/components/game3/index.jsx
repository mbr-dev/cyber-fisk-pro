import { useState, useContext, useEffect, useCallback } from "react";

import { Loading } from "../Loading";
import { TitleLesson } from "../TitleLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { HeaderLesson } from "../HeaderLesson";
import { SubTitleLesson } from "../SubTitleLesson";

import { api } from "../../lib/api";
import { LessonContext } from "../../context/lesson";
import { L1_T1_Dificil } from "../../utils/lesson1_Task1";
import { Score, PontosRank, TrocaAtividade } from "../../utils/regras";

import { Container, Main } from "./styles";

export const Game3 = () => {
  const {setNewContainer, setNewPontos, rodadaGeral, setNewRodada, pontosD, pontosF, pontosM} = useContext(LessonContext);

  const [optionColor, setOptionColor] = useState([0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2]);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);
      
      const response  = await api.get("/L1_T1_Dificil");
      setData(response.data);
      
      const dataLength = data.length;

      let tempRandom = [];
      for(let a = 0; a < dataLength; a++){
        tempRandom.push(a);
      }
      tempRandom = tempRandom.sort(() => Math.random() - 0.5);
      setRandomNumber(tempRandom);

      setQuestion(data[tempRandom[round]].pergunta);

      let tempIdClick = idClick;
      tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
      setIdClick(tempIdClick);
      
      let tempAnswers = [];
      for (let a = 0; a < idClick.length; a ++) {
        tempAnswers.push(data[tempRandom[round]].resposta[a]);
      }
      tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
      setAnswers(tempAnswers);
      setBlockButton(false);
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  }, [setIsLoading, data, setData, setRandomNumber, round, setQuestion, setIdClick, idClick, setAnswers, setAnswers]);

  const newRound = (number) => {
    setQuestion(data[randomNumber[number]].pergunta);

    let tempIdClick = idClick;
    tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
    setIdClick(tempIdClick);
    
    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a ++) {
      tempAnswers.push(data[randomNumber[number]].resposta[a]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);
    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton) return;

    setBlockButton(true);

    let tempRightPoints = rightPoints;
    let tempColor = [...optionColor];
    const selectedAnswer = answers[index].status;

    if (selectedAnswer === 1) {
      tempColor[index] = 1;
      setOptionColor(tempColor);

      tempRightPoints += 3;
      setRightPoints(tempRightPoints);
      setNewPontos(1,tempRightPoints);
    } else {
      tempColor[index] = 2;
      setOptionColor(tempColor);

      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const rule = TrocaAtividade(2, tempGeneralRound, tempRightPoints, tempRound);

    if(rule === "Continua") {
      setTimeout(() =>{
        setOptionColor([0, 0, 0]);
        newRound(tempRound);
      }, 1000);
    } else if (rule === "Score") {
      setTimeout(() =>{
        const scoreFinal = Score(pontosF, pontosM, pontosD);
        let valorRank = 0;

        if (scoreFinal >= 70) {
            if(localStorage.getItem("cyber_pro_frequencia_task1")) {
              let frequencia = parseInt(localStorage.getItem("cyber_pro_frequencia_task1"));
              let oldRank = parseInt(localStorage.getItem("cyber_pro_rank"));
              frequencia++;

              if (frequencia === 4) {
                alert(`Parabéns voce ganhou: 10 Fisk Dollars`);
              }

              localStorage.setItem("cyber_pro_frequencia_task1",frequencia);
              const rank = PontosRank(frequencia,oldRank);
              valorRank = rank;
              localStorage.setItem("cyber_pro_rank",rank);
            } else {
              localStorage.setItem("cyber_pro_task2","1");
              localStorage.setItem("cyber_pro_msg_task2","1");
              localStorage.setItem("cyber_pro_frequencia_task1",1);
              const rank = PontosRank(1,0);
              valorRank = rank;
              localStorage.setItem("cyber_pro_rank",rank);
            }
          }

        alert(`SCORE: ${scoreFinal}%`);
        alert(`PONTOS PARA O RANKING: ${valorRank}`);
        setNewContainer(1);
      }, 1000);
    }
  }
    
  useEffect(() => { 
    loadLesson();
  }, []);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return(
    <Container>
      <HeaderLesson numStart="Task 1" numEnd="Task 2" />
      <TitleLesson title="Choose the correct alternative"/>
      <SubTitleLesson title={question}/>

      <Main>
        {answers.map((answer, index) => {
          return(
            <ButtonAnswer 
              key={index}
              w="9rem"
              h="3rem"
              onPress={() => {handleClick(index)}}
              optionColor={optionColor[index]}
              disabledButton={blockButton}
            >
              <p>{answer.label}</p>
            </ButtonAnswer>
          )
        })}
      </Main>
    </Container>
  )
}