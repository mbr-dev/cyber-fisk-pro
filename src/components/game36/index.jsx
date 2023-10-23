import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { ButtonAnswer } from "../ButtonAnswer";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { L10_T1_Facil } from "../../utils/lesson10_Task";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import ImgBtn from "../../assets/ruido.svg";
import ImgBtn2 from "../../assets/btnAudio2.svg";
import { Container, Main, ButtonRow, ButtonAudio } from "./styles";

export const Game36 = () => {
  const {
    rodadaGeral, setNewPontos, setNewRodada, newStatusPlay, playAudio, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [optionColor, setOptionColor] = useState([]);
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
    let dataLength = L10_T1_Facil.length;
    /* let dataLength = 0;
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
    } */
    
    let tempRandom = [];
    for (let a = 0; a < dataLength; a++) {
      tempRandom.push(a);
    }
    //tempRandom = tempRandom.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandom);

    //const items = tempData.map(item => item.conteudo);
    //const dataItem = items.map(item => JSON.parse(item));
    const items = L10_T1_Facil[tempRandom[round]];
    //setOptionColor(Array(randomIndices.length).fill(0));
    setOptionColor(Array(items.resposta.length).fill(0));
    
    let tempAudios = [];
    for (let a = 0; a < items.pergunta.length; a++) {
      tempAudios.push(items.pergunta[a]);
    }
    tempAudios = tempAudios.sort(() => Math.random() - 0.5);
    setAudios(tempAudios);


    let tempAnswers = [];
    for (let a = 0; a < items.resposta.length; a++) {
      tempAnswers.push(items.resposta[a]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);

    setIsLoading(false);
  }, [setIsLoading, setRandomNumber, round, setAudios, setAnswers, setData]);
  console.log(audios);
  const newRound = (number) => {
    setCountClick(0);
    //const items = data.map(item => item.conteudo);
    //const dataItem = items.map(item => JSON.parse(item));
    const items = L10_T1_Facil[randomNumber[number]];
    setOptionColor(Array(items.resposta.length).fill(0));
    
    let tempAudios = [];
    for (let a = 0; a < items.pergunta.length; a++) {
      tempAudios.push(items.pergunta[a]);
    }
    tempAudios = tempAudios.sort(() => Math.random() - 0.5);
    setAudios(tempAudios);


    let tempAnswers = [];
    for (let a = 0; a < items.resposta.length; a++) {
      tempAnswers.push(items.resposta[a]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);

    setIsLoading(false);
    
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

    const audio = new Audio(`${URL_FISKPRO}sounds/essentials1/lesson10/${sound.audio}.mp3`);

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

    let tempColor = optionColor;
    let tempRightPoints;
    
    const answer =  answers[index];

    if (answer.status === selectAudio) {
      if (clicks < 2) {
        tempColor[index] = 1;
        setOptionColor(tempColor);
        
        setRightAudios(state => [...state, selectAudio]);
        setRightAnswers(state => [...state, answers[index]]);
        return;
      }
      
      tempColor[index] = 1;
      setOptionColor(tempColor);
      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      tempColor[index] = 2;
      setOptionColor(tempColor);

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
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0,0);
      setTimeout(() =>{
        navigate("/GameOver");
        setNewContainer(1);
      }, 1500);
    } else if (rule === "Score") {
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
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
        //setNewLesson(2);
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
      <TitleLesson title="Listen and choose the correct past." />

      <Main>
        <ButtonRow>
          {audios.map((audio, index) => {
            const disabledAud = rightAudios.includes(audio.status);
            return (
              <ButtonAudio 
                key={index}
                onClick={() => handlePlayAudio(audio)}
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
                optionColor={optionColor[index]}
                disabledButton={disabledRes || blockAnswer}
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