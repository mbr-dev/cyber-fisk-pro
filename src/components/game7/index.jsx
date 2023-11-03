import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { ButtonAnswer } from "../ButtonAnswer";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import ImgBtn from "../../assets/ruido.svg";
import ImgBtn2 from "../../assets/btnAudio2.svg";
import { Container, Main, ButtonRow, ButtonAudio } from "./styles";
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
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockAnswer, setBlockAnswer] = useState(true);
  const [selectAudio, setSelectAudio] = useState(null);
  const [countClick, setCountClick] = useState(0);
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

    tempRandom = shuffleArray(tempRandom);
    setRandomNumber(tempRandom);

    const items = tempData.map(item => item.conteudo);
    const dataItem = items.map(item => JSON.parse(item));

    let tempAudios = [];
    let tempAnswers = [];

    const randomIndices = shuffleArray(tempRandom).slice(0, 3);

    for (let a = 0; a < randomIndices.length; a++) {
      tempAudios.push(dataItem[randomIndices[a]].pergunta);
      tempAnswers.push(dataItem[randomIndices[a]].resposta);
    }
    tempAudios = tempAudios.sort(() => Math.random() - 0.5);
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAudios(tempAudios);
    setAnswers(tempAnswers);

    setIsLoading(false);
  }, [setIsLoading, setRandomNumber, setAudios, setAnswers, setData]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const newRound = () => {
    setCountClick(0);
    setColorAnswer([0, 0, 0]);

    let tempRandom = [];
    for (let a = 0; a < data.length; a++) {
      tempRandom.push(a);
    }
    tempRandom = shuffleArray(randomNumber);

    const items = data.map(item => item.conteudo);
    const dataItem = items.map(item => JSON.parse(item));

    let tempAudios = [];
    let tempAnswers = [];

    const randomIndices = shuffleArray(tempRandom).slice(0, 3);

    for (let a = 0; a < randomIndices.length; a++) {
      tempAudios.push(dataItem[randomIndices[a]].pergunta);
      tempAnswers.push(dataItem[randomIndices[a]].resposta);
    }
    tempAudios = tempAudios.sort(() => Math.random() - 0.5);
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAudios(tempAudios);
    setAnswers(tempAnswers);

    setRightAudios([]);
    setRightAnswers([]);
    setSelectAudio(null);
    setBlockAnswer(true);
  }

  const handlePlayAudio = (sound) => {
    if (playAudio) return;

    let tempSound = sound.status;
    setSelectAudio(tempSound);
    setBlockAnswer(false);

    const audio = new Audio(`${URL_FISKPRO}sounds/essentials1/lesson${numSelLesson}/${sound.audio}.mp3`);

    audio.play();
    newStatusPlay(true);

    audio.addEventListener("ended", () => {
      newStatusPlay(false);
    });
  }

  const handleGetAnswer = (index) => {
    if (blockAnswer || playAudio) return;

    setBlockAnswer(true);

    let clicks = countClick;
    clicks++;
    setCountClick(clicks);

    let tempRightPoints;
    let tempColorAnswer = colorAnswer;

    const answer =  answers[index];

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

      let tempE = wrongPoints;
      tempE += 1;
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
        newRound();
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0,0);
      setTimeout(() =>{
        navigate("/GameOver");
        setNewContainer(1);
        setStatusColor([0,0,0,0,0,0,0,0,0,0]);
      }, 2000);
    } else if (rule === "Score") {
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      setTimeout(() => {
        navigate(`/${page}`);
        setStatusColor([0,0,0,0,0,0,0,0,0,0]);
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
      <TitleLesson title="Make pairs." />

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
                w="8rem"
                h="2.625rem"
                onPress={() => handleGetAnswer(index)}
                disabledButton={disabledRes || blockAnswer}
                optionColor={colorAnswer[index]}
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