import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { SubTitleLessonAudio } from "../subTitleLessonAudio";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { L7_T2_Dificil } from "../../utils/lesson7_Task";
import { TrocaAtividade, PointRule, Score, ScoreFinal } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Photo } from "./styles";

export const Game27 = () => {
  const {
    setNewContainer, setNewPontos, rodadaGeral, setNewRodada, playAudio, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);
  
  const navigate = useNavigate();

  const [optionColor, setOptionColor] = useState([]);
  const [idClick, setIdClick] = useState([]);
  const [data, setData] = useState([]);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  console.log("game27");

  const loadLesson = useCallback(() => {
    setIsLoading(true);
    const dataLength = L7_T2_Dificil.length;

    let tempRandom = [];
    for (let a = 0; a < dataLength; a++) {
      tempRandom.push(a);
    }
    tempRandom = tempRandom.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandom);

    setOptionColor(Array(L7_T2_Dificil[tempRandom[round]].resposta.length).fill(0));

    setSound(L7_T2_Dificil[tempRandom[round]].pergunta);

    let tempRandomNumber = [...Array(L7_T2_Dificil[tempRandom[round]].resposta.length).keys()];
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    let tempAnswers = [];
    for (let a = 0; a < tempRandomNumber.length; a ++) {
      tempAnswers.push(L7_T2_Dificil[tempRandom[round]].resposta[tempRandomNumber[a]]);
    }
    setAnswers(tempAnswers);
    setBlockButton(false);
    setIsLoading(false);
  }, [setIsLoading, setRandomNumber, setOptionColor, setSound, setIdClick, setAnswers, setBlockButton]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);
    setOptionColor(Array(items.resposta.length).fill(0));
    setSound(items.pergunta);

    let tempRandomNumber = idClick;
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

    let tempRightPoints;
    let tempColor = optionColor;
    const selectedAnswer = answers[index];

    if (selectedAnswer.status === 1) {
      tempColor[index] = 1;
      setOptionColor(tempColor);
      
      tempRightPoints = PointRule(nivel, rightPoints);
      setNewPontos(nivel, tempRightPoints);
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
      setTimeout(() => {
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);
      setTimeout(() => {
        navigate("/GameOver");
        setNewContainer(1);
      }, 1500);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    } else {
      setTimeout(() => {
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
      <SubTitleLessonAudio audio={`${URL_FISKPRO}sounds/essentials1/lesson7/${sound}.mp3`} />
      
      <Main>
        {answers.map((answer, index) => {
          return (
            <Photo
              onClick={() => handleClick(index)}
              style={{
                backgroundColor: optionColor[index] === 1 ? defaultTheme["green-200"] : optionColor[index] === 2 ? defaultTheme["red-200"] : ""
              }}
              disabled={blockButton}
            >
              <img src={`${URL_FISKPRO}images/essentials1/lesson7/${answer.image}.jpg`} alt="" />
            </Photo>
          )
        })}
      </Main>
    </Container>
  )
}