import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { SubTitleLesson } from "../subTitleLesson";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, ScoreFinal, Score, PointRule } from "../../utils/regras";

import { Container, Main, ButtonAnswer } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game1 = () => {
  const {
    setNewContainer, setNewPontos, rodadaGeral, setNewRodada, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState([]);
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

    setQuestion(items.pergunta);
    setSelectedColor(Array(items.images.length).fill(0));

    let tempIdClick = [...Array(items.images.length).keys()];
    tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
    setIdClick(tempIdClick);

    let tempImages = [];
    for (let a = 0; a < items.images.length; a++) {
      tempImages.push(items.images[tempIdClick[a]]);
    }
    setAnswers(tempImages);

    setBlockButton(false);
    setIsLoading(false);
  }, [setIsLoading, setData, round, setAnswers, setBlockButton, setIdClick, setQuestion, setRandomNumber]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);

    setQuestion(items.pergunta);
    setSelectedColor(Array(items.images.length).fill(0));

    let tempIdClick = [...Array(items.images.length).keys()];
    tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
    setIdClick(tempIdClick);

    let tempImages = [];
    for (let a = 0; a < tempIdClick.length; a++) {
      tempImages.push(items.images[tempIdClick[a]]);
    }
    setAnswers(tempImages);

    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton) return;
    setBlockButton(true);

    let tempRightPoints;
    let tempSelectedColor = selectedColor;
    const selectedAnswer = answers[index];

    if (selectedAnswer.status === 1) {
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
      setNewPontos(nivel, 0);
      setTimeout(() => {
        navigate("/GameOver");
        setNewContainer(1);
        setStatusColor([0,0,0,0,0,0,0,0,0,0]);
      }, 2000);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      setTimeout(() => {
        navigate(`/${page}`);
        setStatusColor([0,0,0,0,0,0,0,0,0,0]);
      }, 2000);
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

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Choose the correct alternative." />
      <SubTitleLesson title={question} />

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
              <img src={`${URL_FISKPRO}/images/essentials1/lesson${numSelLesson}/${answer.img}.png`} alt="" />
            </ButtonAnswer>
          )
        })}
      </Main>
    </Container>
  )
}