import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, ScoreFinal, Score, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Button } from "./styles";

export const Game4 = () => {
  const {
    setNewContainer, setNewPontos, rodadaGeral, setNewRodada, playAudio, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState([]);
  const [idTipo3, setIdTipo3] = useState([0, 1, 2, 3, 4, 5]);
  const [idTipo4, setIdTipo4] = useState([0, 1, 2, 3, 4]);
  const [data, setData] = useState([]);
  const [sounds, setSounds] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [type, setType] = useState(null);
  const [countClick, setCountClick] = useState(0);
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
    setSelectedColor(Array(items.resposta.length).fill(0));

    setType(items.tipo);
    setSounds(items.pergunta);

    let tempSortNum = items.tipo === 3 ? idTipo3 : idTipo4;
    tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
    if (items.tipo === 3) {
      setIdTipo3(tempSortNum);
    } else {
      setIdTipo4(tempSortNum);
    }

    let tempAnswers = [];
    for (let a = 0; a < tempSortNum.length; a ++) {
      tempAnswers.push(items.resposta[tempSortNum[a]]);
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
    setIsLoading(false);
  }, [setIsLoading, setData, round, setRandomNumber, setSounds, setType, setIdTipo3, setIdTipo4, setAnswers, setBlockButton, setSelectedColor]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);

    setType(items.tipo);
    setSounds(items.pergunta);
    setSelectedColor(Array(items.resposta.length).fill(0));

    let tempSortNum = items.tipo === 3 ? idTipo3 : idTipo4;
    tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
    if (items.tipo === 3) {
      setIdTipo3(tempSortNum);
    } else {
      setIdTipo4(tempSortNum);
    }

    let tempAnswers = [];
    for (let a = 0; a < tempSortNum.length; a ++) {
      tempAnswers.push(items.resposta[tempSortNum[a]]);
    }
    setAnswers(tempAnswers);
    
    setCancelAudio(false);
    setBlockButton(false);
  }

  const handleClick = (index) => {
    if(blockButton || playAudio || (selectedColor[index] === 1)) return;
    setBlockButton(false);

    let clicks = countClick;
    clicks++;
    setCountClick(clicks);

    let tempRightPoints;
    let tempSelectedColor = selectedColor;

    const answer = answers[index];

    if(answer.status === 1) {
      if (clicks < 3) {
        tempSelectedColor[index] = 1;
        setSelectedColor(tempSelectedColor);
        return;
      }

      setBlockButton(true);

      tempSelectedColor[index] = 1;
      setSelectedColor(tempSelectedColor);
      
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 1;
      setStatusColor(newStatus);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      tempSelectedColor[index] = 1;
      setSelectedColor(tempSelectedColor);
      
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 2;
      setStatusColor(newStatus);
    }

    setCancelAudio(true);
    setBlockButton(true);

    clicks = 0;
    setCountClick(clicks);

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
      setTimeout(() =>{
        navigate("/GameOver");
        setNewContainer(1);
      },1500);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      setTimeout(() => {
        navigate(`/${page}`);
      }, 2000);
    } else {
      setTimeout(() =>{
        if (nivel === 0) {
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        } else {
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

  return(
    <Container>
      <TitleLesson title="Choose the 3 correct alternatives." />
      <SubTitleLessonAudio stopAudio={cancelAudio} audio={`${URL_FISKPRO}sounds/essentials1/lesson${numSelLesson}/${sounds}.mp3`} />

      <Main>
        {answers.map((answer, index) => {
          return (
            <Button key={index}
              onClick={() => {handleClick(index)}}
              $variant={type === 3 ? "pequeno" : "medio"}
              style={{
                borderColor: selectedColor[index] === 1 && defaultTheme["red-200"],
              }}
              disabled={blockButton}
            >
              <p>{answer.label}</p>
            </Button>
          )
        })}
      </Main>
    </Container>
  )
}