import { useState, useContext, useEffect, useCallback } from "react";

import { Loading } from "../Loading";
import { TitleLesson } from "../TitleLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { HeaderLesson } from "../HeaderLesson";
import { SubTitleLesson } from "../SubTitleLesson";

import { api } from "../../lib/api";
import { LessonContext } from "../../context/lesson";
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
      
      const response  = await api.get("/Retorno?id_livro=53&num_lesson=1&num_task=1");
      const res = response.data;
      setData(res.dados[2].dados_conteudo);
      const dataLength = res.dados[2].dados_conteudo.length;

      let tempRandom = [];
      for(let a = 0; a < dataLength; a++){
        tempRandom.push(a);
      }
      tempRandom = tempRandom.sort(() => Math.random() - 0.5);
      setRandomNumber(tempRandom);

      let items = JSON.parse(res.dados[2].dados_conteudo[tempRandom[round]].conteudo);
      setQuestion(items.pergunta);

      let tempIdClick = idClick;
      tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
      setIdClick(tempIdClick);
      
      let tempAnswers = [];
      for (let a = 0; a < idClick.length; a ++) {
        tempAnswers.push(items.resposta[tempIdClick[a]]);
      }
      tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
      setAnswers(tempAnswers);
      setBlockButton(false);
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  }, [setIsLoading, setData, setRandomNumber, round, setQuestion, setIdClick, idClick, setAnswers, setAnswers, setBlockButton]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);
    setQuestion(items.pergunta);

    let tempIdClick = idClick;
    tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
    setIdClick(tempIdClick);
    
    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a ++) {
      tempAnswers.push(items.resposta[tempIdClick[a]]);
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
    const selectedAnswer = answers[index];

    if (selectedAnswer.status === 1) {
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
      }, 1500);
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
      }, 1500);
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
              w="13rem"
              h="3.5rem"
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