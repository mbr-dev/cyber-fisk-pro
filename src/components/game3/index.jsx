import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { SubTitleLesson } from "../subTitleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, ScoreFinal, Score, PointRule } from "../../utils/regras";

import { Container, Main } from "./styles";

export const Game3 = () => {
  const {
    setNewContainer, setNewPontos, rodadaGeral, setNewRodada, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [optionColor, setOptionColor] = useState([]);
  const [idClick, setIdClick] = useState([]);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    setIsLoading(true);

    let dataLength = 0;
    let tempData;
    if (nivel === 0) {
      setData(conteudoFacil);
      tempData = conteudoFacil;
      dataLength = conteudoFacil.length;
    } else if (nivel === 1) {
      setData(conteudoMedio);
      tempData = conteudoMedio;
      dataLength = conteudoMedio.length;
    } else {
      setData(conteudoDificil);
      tempData = conteudoDificil;
      dataLength = conteudoDificil.length;
    }

    let tempRandom = [];
    for (let a = 0; a < dataLength; a++) {
      tempRandom.push(a);
    }
    tempRandom = tempRandom.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandom);

    const items = JSON.parse(tempData[tempRandom[round]].conteudo);

    setQuestion(items.pergunta);
    setOptionColor(Array(items.resposta.length).fill(0));

    let tempIdClick = [...Array(items.resposta.length).keys()];
    tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
    setIdClick(tempIdClick);

    let tempAnswers = [];
    for (let a = 0; a < items.resposta.length; a ++) {
      tempAnswers.push(items.resposta[tempIdClick[a]]);
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
    setIsLoading(false);
  }, [setIsLoading, setData, setRandomNumber, round, setQuestion, setIdClick, setAnswers, setBlockButton, setOptionColor]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);

    setQuestion(items.pergunta);
    setOptionColor(Array(items.resposta.length).fill(0));

    let tempIdClick = [...Array(items.resposta.length).keys()];
    tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
    setIdClick(tempIdClick);

    let tempAnswers = [];
    for (let a = 0; a < tempIdClick.length; a ++) {
      tempAnswers.push(items.resposta[tempIdClick[a]]);
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton) return;
    setBlockButton(true);

    let tempRightPoints;
    let tempColor = optionColor;
    const selectedAnswer = answers[index];

    if (selectedAnswer.status === 1) {
      tempColor[index] = 1;
      setOptionColor(tempColor);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
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

    const rule = TrocaAtividade(nivel, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() =>{
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(nivel, 0);
      setTimeout(() => {
        navigate("/GameOver");
        setNewContainer(1);
      }, 1500);
    } else if (rule === "Score") {
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    } else {
      setTimeout(() => {
        console.log('MUDA DE RODADA!!');
        if (nivel === 0) {
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        } else {
          setNewNivel(2);
          const atividade = conteudoDificil[0].id_tipo;
          setNewAtividade(atividade);
        }
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
      <TitleLesson title="Choose the correct alternative" />
      <SubTitleLesson title={question}/>

      <Main>
        {answers.map((answer, index) => {
          return(
            <ButtonAnswer 
              key={index}
              w="14.5rem"
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