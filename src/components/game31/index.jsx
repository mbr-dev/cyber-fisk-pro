import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext, useCallback } from "react";

import { Loading } from "../Loading";
import { SubTitleLesson } from "../subTitleLesson";
import { SubTitleLessonAudio } from "../subTitleLessonAudio";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { Main, Container, Input, ButtonCheck, Form } from "./styles";

export const Game31 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, playAudio, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [word, setWord] = useState("");
  const [text, setText] = useState("");
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(3);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [countClick, setCountClick] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [blockAudio, setBlockAudio] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cancelAudio, setCancelAudio] = useState(false);
  
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

    const items = JSON.parse(tempData[tempRandom[round]].conteudo);

    setSound(items.pergunta);
    setWord(items.resposta.label);
    setAnswers(items.resposta.status);

    setBlockAudio(false);
    setIsLoading(false);
  }, [setIsLoading, setData, setRandomNumber, round, setSound, setWord, setAnswers, setBlockAudio]);

  const newRound = (number) => {
    setText("");
    setCountClick(0);
    setCancelAudio(false);

    const items = JSON.parse(data[randomNumber[number]].conteudo);

    setSound(items.pergunta);
    setWord(items.resposta.label);
    setAnswers(items.resposta.status);

    setBlockAudio(false);
  }

  const handleVerifyWord = (event) => {
    if (event.key === "Enter" || playAudio) {
      return
    }

    setBlockButton(true);

    event.preventDefault();

    let tempWord = text.trim().toLowerCase();
    let tempRightPoints;

    let isAnswerCorrect = false;

    answers.forEach((answerItem) => {
      if (tempWord.includes(answerItem.toLowerCase())) {
        isAnswerCorrect = true;
      }
    });

    if (isAnswerCorrect) {
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

      let tempEr = wrongPoints;
      tempEr++;
      setWrongPoints(tempEr);
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
      setNewPontos(nivel, 0);
      setTimeout(() => {
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
      },1500);
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    text.trim() === "" ? setBlockButton(true) : setBlockButton(false);
  }, [text, setBlockButton]);

  useEffect(() => {
    if (countClick === 3) {
      setBlockAudio(true);
    }
  }, [countClick, setBlockAudio]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <SubTitleLesson title="Listen and write a question." />
      <SubTitleLessonAudio
        stopAudio={cancelAudio}
        audio={`${URL_FISKPRO}sounds/essentials1/lesson${numSelLesson}/${sound}.mp3`}
        countC={countClick}
        setCountC={setCountClick}
        disabledButton={blockAudio}
      />
      
      <Main>
        <p>{word}</p>
        <Form id="myForm" onSubmit={handleVerifyWord}>
          <Input
            placeholder="Type here"
            maxLength={100}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </Form>
        <ButtonCheck form="myForm" type="submit" disabled={blockButton}>
          <p>Check</p>
        </ButtonCheck>
      </Main>
    </Container>
  )
}