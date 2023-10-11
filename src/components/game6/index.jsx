import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../TitleLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { SubTitleLessonAudioImg } from "../SubTitleLessonAudioImg";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal } from "../../utils/regras";

import { Container, Main } from "./styles";

export const Game6 = () => {
  const {
    setNewContainer, setNewPontos, rodadaGeral, setNewRodada, playAudio, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);
  
  const navigate = useNavigate();

  const [optionColor, setOptionColor] = useState([0, 0, 0, 0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2, 3, 4, 5]);
  const [data, setData] = useState([]);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [countClick, setCountClick] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    setIsLoading(true);
    
    let dataLength = 0;
    let tempData;
    if(nivel === 0){
      setData(conteudoFacil);
      tempData = conteudoFacil;
      dataLength = conteudoFacil.length;
    }else if(nivel === 1){
      setData(conteudoMedio);
      tempData = conteudoMedio;
      dataLength = conteudoMedio.length;
    }else{
      setData(conteudoDificil);
      tempData = conteudoDificil;
      dataLength = conteudoDificil.length;
    }

    let tempSounds = [];
    for (let a = 0; a < dataLength; a++) {
      tempSounds.push(a);
    }
    tempSounds = tempSounds.sort(() => Math.random() - 0.5);
    setRandomNumber(tempSounds);

    const items = JSON.parse(tempData[tempSounds[round]].conteudo);
    
    setSound(items.pergunta);
    
    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    
    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a++) {
      tempAnswers.push(items.resposta[tempRandomNumber[a]]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);
    
    setBlockButton(false);
    setIsLoading(false);
  }, [setIsLoading, setData, setRandomNumber, round, setSound, idClick, setIdClick, setAnswers, setBlockButton]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);
    setSound(items.pergunta);

    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    
    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a++) {
      tempAnswers.push(items.resposta[tempRandomNumber[a]]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);
    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton || playAudio) return;

    setBlockButton(false);
    
    let clicks = countClick;
    clicks++;
    setCountClick(clicks);

    let tempColor = optionColor;

    let tempRightPoints = rightPoints;
    let tempRound = round;
    let tempGeneralRound = rodadaGeral;

    const answer = answers[index].status;

    if (answer === 1) {
      if (clicks < 3) {
        tempColor[index] = 1;
        setOptionColor(tempColor);
        return;
      }

      tempRightPoints +=3;
      setRightPoints(tempRightPoints);
      setNewPontos(2, tempRightPoints);
    } else {
      tempColor[index] = 2;
      setOptionColor(tempColor);

      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);
    }

    tempRound++;
    setRound(tempRound);

    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    setBlockButton(true);
    clicks = 0;
    setCountClick(clicks);
    
    const rule = TrocaAtividade(nivel, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        setOptionColor([0, 0, 0, 0, 0, 0]);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(nivel, 0);
      setTimeout(() => {
        navigate("/GameOver");
        setOptionColor([0, 0, 0, 0, 0, 0]);
        setNewContainer(1);
      }, 1500);
    }else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    }else {
      setTimeout(() => {
        setOptionColor([0, 0, 0, 0, 0, 0]);
        if(nivel === 0){
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        }else{
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
      <SubTitleLessonAudioImg audio={`${URL_FISKPRO}sounds/essentials1/lesson1/${sound}.mp3`} />

      <Main>
        {answers.map((answer, index) => {
          return (
            <ButtonAnswer
              key={index}
              w="7rem"
              h="3.25rem"
              onPress={() => handleClick(index)} 
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