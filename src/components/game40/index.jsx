import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import { URL_FISKPRO } from "../../config/infos";
import { TrocaAtividade, PointRule, Score, ScoreFinal } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";

import { Container, Main, ButtonAnswer } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game40 = () => {
  const {
    setNewContainer, setNewPontos, rodadaGeral, setNewRodada, playAudio, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState([]);
  const [idClick, setIdClick] = useState([]);
  const [data, setData] = useState([]);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [countClick, setCountClick] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [cancelAudio, setCancelAudio] = useState(false);

  const loadLesson = useCallback(() => {
    setIsLoading(true);

    let dataLength = 0;
    let tempData;
    
    if (!conteudoFacil || !conteudoMedio || !conteudoDificil) {
      navigate("/LessonSelected");
      return;
    }

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
    setSelectedColor(Array(items.resposta.length).fill(0));

    let tempRandomNumber = [...Array(items.resposta.length).keys()];
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    let tempAnswers = [];
    for (let a = 0; a < items.resposta.length; a++) {
      tempAnswers.push(items.resposta[tempRandomNumber[a]]);
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
    setIsLoading(false);
  }, [setIsLoading, setRandomNumber, setData, setSound, round, setIdClick, setAnswers, setBlockButton, setSelectedColor]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);
    
    setSound(items.pergunta);
    setSelectedColor(Array(items.resposta.length).fill(0));

    let tempRandomNumber = [...Array(items.resposta.length).keys()];
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    let tempAnswers = [];
    for (let a = 0; a < tempRandomNumber.length; a++) {
      tempAnswers.push(items.resposta[tempRandomNumber[a]]);
    }
    setAnswers(tempAnswers);
    
    setCountClick(0);
    setCancelAudio(false);
    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton || playAudio || (selectedColor[index] === 1)) return;
    setBlockButton(false);

    let clicks = countClick;
    clicks++;
    setCountClick(clicks);

    let tempRightPoints;
    let tempSelectedColor = selectedColor;
    const selectedAnswer = answers[index];

    if (selectedAnswer.status === 1) {
      if (clicks < 2) {
        tempSelectedColor[index] = 1;
        setSelectedColor(tempSelectedColor);
        return;
      }

      setBlockButton(true);
      
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 1;
      setStatusColor(newStatus);
      
      tempSelectedColor[index] = 1;
      setSelectedColor(tempSelectedColor);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 2;
      setStatusColor(newStatus);

      tempSelectedColor[index] = 1;
      setSelectedColor(tempSelectedColor);
    }
    setCancelAudio(true);

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
      setTimeout(() => {
        navigate(`/${page}`);
      }, 1500);
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
      <TitleLesson title="Choose 2 correct answers." />
      <SubTitleLessonAudio stopAudio={cancelAudio} audio={`${URL_FISKPRO}sounds/essentials1/lesson${numSelLesson}/${sound}.mp3`} />
      
      <Main>
        {answers.map((answer, index) => {
          return (
            <ButtonAnswer
              key={index}
              onClick={() => handleClick(index)}
              disabled={blockButton}
              style={{
                borderColor: selectedColor[index] === 1 && defaultTheme["red-200"],
              }}
            >
              <p>{answer.label}</p>
            </ButtonAnswer>
          )
        })}
      </Main>
    </Container>
  )
}