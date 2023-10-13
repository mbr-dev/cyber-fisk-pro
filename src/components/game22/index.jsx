import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../TitleLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { Container, Main } from "./styles";

export const Game22 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, setNewLesson, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [optionColor, setOptionColor] = useState([0, 0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2, 3]);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [data, setData] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);

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
    setSound(items.pergunta);

    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    
    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a++) {
      tempAnswers.push(items.resposta[a]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);

    setBlockButton(false);
    setIsLoading(false);
  }, [setIsLoading, setData, setRandomNumber, setSound, round, setIdClick, setAnswers, setBlockButton]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);
    setSound(items.pergunta);

    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    
    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a++) {
      tempAnswers.push(items.resposta[a]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);
    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton || playAudio) return;

    setBlockButton(true);

    let tempRightPoints;
    let tempColor = optionColor;
    const selectedAnswer = answers[index];

    if (selectedAnswer.status === 1) {
      tempColor[index] = 1;
      setOptionColor(tempColor);

      tempRightPoints = PointRule(nivel, rightPoints);
      setNewPontos(1, tempRightPoints);
      setRightPoints(tempRightPoints);
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
        setOptionColor([0, 0, 0, 0]);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over"){
      setNewPontos(0,0);
      setTimeout(() =>{
        setOptionColor([0, 0, 0, 0]);
        navigate("/GameOver");
        setNewContainer(1);
      },1500);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    } else {
      setTimeout(() =>{
        setOptionColor([0, 0, 0, 0]);
        if(nivel === 0){
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        }else{
          setNewNivel(2);
          const atividade = conteudoDificil[0].id_tipo;
          setNewAtividade(atividade);
        }
      },1500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    playAudio ? setBlockButton(true) : setBlockButton(false);
  }, [playAudio, setBlockButton]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Choose the correct alternative" />
      <SubTitleLessonAudio audio={`${URL_FISKPRO}sounds/essentials1/lesson${numSelLesson}/${sound}.mp3`} />
      
      <Main>
        {answers.map((answer, index) => {
          return (
            <ButtonAnswer
              key={index}
              w="10rem"
              h="3rem"
              onPress={() => handleClick(index)}
              optionColor={optionColor[index]}
              disabledButton={blockButton}
            >
              {answer.label}
            </ButtonAnswer>
          )
        })}
      </Main>
    </Container>
  )
}