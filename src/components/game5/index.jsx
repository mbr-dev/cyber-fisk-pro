import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../TitleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import { URL_FISKPRO } from "../../config/infos";
import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";

import { Container, Main } from "./styles";

export const Game5 = () => {
  const { setNewContainer, setNewPontos, rodadaGeral, setNewRodada, playAudio,
    nivel, conteudoFacil, conteudoMedio, conteudoDificil,
    pontosD, pontosF, pontosM, setNewAtividade, setNewNivel,
    numSelLesson, numTask } = useContext(LessonContext);
  
  const navigate = useNavigate();
  const [optionColor, setOptionColor] = useState([0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2]);
  const [data, setData] = useState([]);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true)
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

      let items = JSON.parse(tempData[tempSounds[round]].conteudo);
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
    } catch(error) {
      console.log(error);
    }
  }, [setRandomNumber, setSound, round, setIdClick, setAnswers, setBlockButton]);

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

    setBlockButton(true);

    let tempRightPoints = rightPoints;
    let tempColor = optionColor;
    const selectedAnswer = answers[index].status;

    if (selectedAnswer === 1) {
      tempColor[index] = 1;
      setOptionColor(tempColor);

      tempRightPoints += 2;
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

    const rule = TrocaAtividade(1, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        setOptionColor([0, 0, 0]);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);
      setTimeout(() => {
        setOptionColor([0, 0, 0]);
        navigate('/GameOver');
        setNewContainer(1);
      }, 1500);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    }else {
      setTimeout(() => {
        setOptionColor([0, 0, 0]);
        if(nivel === 0){
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        }else{
          setNewNivel(2);
          const atividade = conteudoDificil[0].id_tipo;
          setNewAtividade(atividade);
        }
        //setNewLesson(6);
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
      {/* <HeaderLesson numStart="Task 2" numEnd="Super task" superTaskEnd /> */}
      <TitleLesson title='Choose the correct alternative' />
      <SubTitleLessonAudio audio={`${URL_FISKPRO}sounds/essentials1/lesson1/${sound}.mp3`} />
      
      <Main>
        {answers.map((answer, index) => {
          return (
            <ButtonAnswer
              key={index}
              w="13rem"
              h="3.5rem"
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