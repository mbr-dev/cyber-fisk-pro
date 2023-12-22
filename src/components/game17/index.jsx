import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { Container, Main, Image, ButtonAnswer, Div } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game17 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState([]);
  const [idClick, setIdClick] = useState([]);
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(async() => {
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

    setImage(items.img);
    setSelectedColor(Array(items.resposta.length).fill(0));

    let tempIdClick = [...Array(items.resposta.length).keys()];
    tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
    setIdClick(tempIdClick);

    let tempAnswers = [];
    for (let a = 0; a < items.resposta.length; a ++) {
      tempAnswers.push(items.resposta[a]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() * - 0.5);
    setAnswers(tempAnswers);

    setBlockButton(false);
    setIsLoading(false);
  }, [setIsLoading, setData, setRandomNumber, setImage, round, setIdClick, setAnswers, setBlockButton]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);
    
    setImage(items.img);
    setSelectedColor(Array(items.resposta.length).fill(0));

    let tempIdClick = [...Array(items.resposta.length).keys()];
    tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
    setIdClick(tempIdClick);

    let tempAnswers = [];
    for (let a = 0; a < tempIdClick.length; a ++) {
      tempAnswers.push(items.resposta[tempIdClick[a]]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() * - 0.5);
    setAnswers(tempAnswers);

    setBlockButton(false);
  }

  const handleClick = (index) => {
    if(blockButton) return;
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
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const rule = TrocaAtividade(nivel, tempGeneralRound, tempRightPoints, tempRound);

    if(rule === "Continua") {
      setTimeout(() =>{
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);
      setTimeout(() => {
        navigate("/GameOver");
        setNewContainer(1);
      }, 1500);
    } else if (rule === "Score") {
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      setTimeout(() => {
        navigate(`/${page}`);
      }, 1500);
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

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Choose the correct alternative.game17"/>

      <Main>
        <Image>
          <img src={`${URL_FISKPRO}images/essentials1/lesson${numSelLesson}/${image}.png`} alt="" />
        </Image>
        <Div>
          {answers.map((answer, index) => {
            return (
              <ButtonAnswer
              key={index}
              onClick={() => {handleClick(index)}}
              disabled={blockButton}
              style={{
                borderColor: selectedColor[index] === 1 && defaultTheme["red-200"],
              }}
              >
                <p>{answer.label}</p>
              </ButtonAnswer>
            )
          })}
        </Div>
      </Main>
    </Container>
  )
}