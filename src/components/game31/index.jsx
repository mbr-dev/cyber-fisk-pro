import { useState, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { SubTitleLesson } from "../subTitleLesson";
import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { L8_T2_Medio } from "../../utils/lesson8_Task";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Main, Container, Input } from "./styles";

export const Game31 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, setNewLesson, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, playAudio
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [colorAnswers, setColorAnswer] = useState(0);
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
  
  const loadLesson = useCallback(() => {
    setIsLoading(true);
    const dataLength = L8_T2_Medio.length;

    let tempRandom = [];
    for (let a = 0; a < dataLength; a++) {
      tempRandom.push(a);
    }
    tempRandom = tempRandom.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandom);

    setSound(L8_T2_Medio[tempRandom[round]].pergunta);
    setWord(L8_T2_Medio[tempRandom[round]].resposta.label);
    setAnswers(L8_T2_Medio[tempRandom[round]].resposta.status);
    setIsLoading(false);

  }, [setIsLoading, /* setData, */ setRandomNumber, round, setSound, setWord, setAnswers]);

  const newRound = (number) => {
    setText("");
    setColorAnswer(0);
    setCountClick(0);
    /* const items = JSON.parse(data[randomNumber[number]].conteudo);
    setSound(items.pergunta); */
    setSound(L8_T2_Medio[randomNumber[number]].pergunta);
    setWord(L8_T2_Medio[randomNumber[number]].resposta.label);
    setAnswers(L8_T2_Medio[randomNumber[number]].resposta.status);
    setBlockAudio(false);
  }

  const handleVerifyWord = (event) => {
    event.preventDefault();
    if (playAudio) return;
    
    let tempWord = text.trim().replace(/'/g, "’").toLowerCase();
    let tempRightPoints;
    let tempColorA = colorAnswers;

    let isAnswerCorrect = false;

    answers.forEach((answerItem) => {
      if (tempWord.includes(answerItem.toLowerCase())) {
        isAnswerCorrect = true;
      }
    });

    if (isAnswerCorrect) {
      tempColorA = 1;
      setColorAnswer(tempColorA);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      tempColorA = 2;
      setColorAnswer(tempColorA);

      let tempEr = wrongPoints;
      tempEr++;
      setWrongPoints(tempEr);
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
      },1500);
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
      },1500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);
  console.log("countclick: ", countClick);

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
      <SubTitleLesson title="Listen and answer using the words you see." />
      <SubTitleLessonAudio
        audio={`${URL_FISKPRO}sounds/essentials1/lesson8/${sound}.mp3`}
        countC={countClick}
        setCountC={setCountClick}
        disabledButton={blockAudio}
      />
      
      <Main>
        <p>{word}</p>
        <form id="myForm" onSubmit={handleVerifyWord}>
          <Input 
            placeholder="Type here"
            maxLength={100}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              backgroundColor: colorAnswers === 0 ? "" : colorAnswers === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
              color: colorAnswers === 0 ? "" : defaultTheme.white,
              border: colorAnswers === 0 ? "" : "none",
            }}
          />
        </form>
        <ButtonBg
          form="myForm"
          type="submit"
          disabledButton={blockButton}
          title="Check"
          w="15.875rem"
          h="2.5rem"
          greenBtn
        />
      </Main>
    </Container>
  )
}