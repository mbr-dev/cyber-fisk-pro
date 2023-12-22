import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import ImgBtn from "../../assets/ruido.svg";
import ImgBtn2 from "../../assets/btnAudio2.svg";

import { Container, Main, ButtonRow, ButtonAudio, ButtonAnswer } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game7 = () => {
  const {
    rodadaGeral, setNewPontos, setNewRodada, newStatusPlay, playAudio, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [colorAnswer, setColorAnswer] = useState([0, 0, 0]);
  const [data, setData] = useState([]);
  const [audios, setAudios] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightAudios, setRightAudios] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [blockAnswer, setBlockAnswer] = useState(true);
  const [selectAudio, setSelectAudio] = useState(null);
  const [countClick, setCountClick] = useState(0);
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
    
    let tempAudios = [];
    let tempAnswers = [];
    for (let a = 0; a < items.pergunta.length; a++) {
      tempAudios.push(items.pergunta[a]);
      tempAnswers.push(items.resposta[a]);
    }
    tempAudios = tempAudios.sort(() => Math.random() - 0.5);
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAudios(tempAudios);
    setAnswers(tempAnswers);

    setIsLoading(false);
  }, [setIsLoading, setRandomNumber, setAudios, round, setAnswers, setData]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);
    
    let tempAudios = [];
    let tempAnswers = [];
    for (let a = 0; a < items.pergunta.length; a++) {
      tempAudios.push(items.pergunta[a]);
      tempAnswers.push(items.resposta[a]);
    }
    tempAudios = tempAudios.sort(() => Math.random() - 0.5);
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAudios(tempAudios);
    setAnswers(tempAnswers);
    
    setRightAudios([]);
    setRightAnswers([]);
    setCountClick(0);
    setSelectAudio(null);
    setCancelAudio(false);
    setBlockAnswer(true);
    setColorAnswer([0, 0, 0]);
  }

  const handlePlayAudio = (sound) => {
    if (playAudio || cancelAudio) return;
    setBlockAnswer(false);

    let tempSound = sound.status;
    setSelectAudio(tempSound);

    const audio = new Audio(`${URL_FISKPRO}sounds/essentials1/lesson${numSelLesson}/${sound.audio}.mp3`);

    audio.play();
    newStatusPlay(true);

    audio.addEventListener("ended", () => {
      newStatusPlay(false);
    });
  }

  const handleGetAnswer = (answer, index) => {
    if (blockAnswer || playAudio) return;
    setBlockAnswer(true);

    let clicks = countClick;
    clicks++;
    setCountClick(clicks);

    let tempRightPoints;
    let tempColorAnswer = colorAnswer;

    if (answer.status === selectAudio) {
      if (clicks < 3) {
        tempColorAnswer[index] = 1;
        setColorAnswer(tempColorAnswer);

        setRightAudios(state => [...state, selectAudio]);
        setRightAnswers(state => [...state, answers[index]]);
        return;
      }

      tempColorAnswer[index] = 1;
      setColorAnswer(tempColorAnswer);

      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 1;
      setStatusColor(newStatus);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 2;
      setStatusColor(newStatus);
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
      setTimeout(() =>{
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);
      setTimeout(() =>{
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
      }, 1500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    playAudio ? setBlockAnswer(true) : setBlockAnswer(false);
  }, [playAudio, setBlockAnswer]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Make pairs.game7" />

      <Main>
        <ButtonRow>
          {audios.map((audio, index) => {
            const disabledAud = rightAudios.includes(audio.status);
            return (
              <ButtonAudio 
                key={index}
                onClick={() => handlePlayAudio(audio)}
                style={{
                  borderColor: selectAudio === audio.status && defaultTheme["red-200"],
                }}
                disabled={disabledAud}
              >
                <img src={ImgBtn2} alt="" className="btn2" />
                <img src={ImgBtn} alt="" />
              </ButtonAudio>
            )
          })}
        </ButtonRow>

        <ButtonRow>
          {answers.map((answer, index) => {
            const disabledRes = rightAnswers.includes(answer);

            return (
              <ButtonAnswer 
                key={index}
                onClick={() => handleGetAnswer(answer, index)}
                disabledButton={disabledRes || blockAnswer}
                style={{
                  borderColor: colorAnswer[index] === 1 && defaultTheme["red-200"],
                }}
              >
                <p>{answer.label}</p>
              </ButtonAnswer>
            )
          })}
        </ButtonRow>
      </Main>
    </Container>
  )
}