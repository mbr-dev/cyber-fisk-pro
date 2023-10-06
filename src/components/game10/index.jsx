import { useState, useEffect, useContext, useCallback } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { SubTitleLesson } from "../SubTitleLesson";
import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import { URL_L3T2D } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { L3_T2_Dificil } from "../../utils/Lesson3_Task2";
import { TrocaAtividade } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Main, Container, Input, Button } from "./styles";

export const Game10 = () => {
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio } = useContext(LessonContext);

  const [colorAnswers, setColorAnswer] = useState(0);
  const [sound, setSound] = useState(null);
  const [answer, setAnswer] = useState('');
  const [text, setText] = useState('');
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isloading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    const totalOfQuestions = L3_T2_Dificil.length;
    
    let tempQuestions = [];
    for (let a = 0; a < totalOfQuestions; a ++) {
      tempQuestions.push(a);
    }
    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);
    setSound(`${URL_L3T2D}${tempQuestions[round]}.mp3`);

    let tempAnswer = L3_T2_Dificil[tempQuestions[round]].resposta.replace(/'/g, "’");
    setAnswer(tempAnswer);
  }, [setRandomNumber, setSound, setAnswer])

  const newRound = (number) => {
    setText("");
    setSound(`${URL_L3T2D}${randomNumber[number]}.mp3`);

    let tempAnswer = L3_T2_Dificil[randomNumber[number]].resposta.replace(/'/g, "’");
    setAnswer(tempAnswer);
  }

  const handleVerifyWord = (event) => {
    event.preventDefault();
    if (playAudio) return;
    
    let tempWord = text;
    let tempPoint = correctPoints;
    let tempColorA = colorAnswers;

    tempWord = tempWord.replace(/'/g, "’");

    if (tempWord === answer) {
      tempColorA = 1;
      setColorAnswer(tempColorA);
      tempPoint += 3;
      setCorrectPoints(tempPoint);
      setNewPontos(2, tempPoint);
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

    const rule = TrocaAtividade(2, tempGeneralRound, tempPoint, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        tempColorA = 0;
        setColorAnswer(tempColorA);
        newRound(tempRound);
      }, 1000);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);
      
      setTimeout(() => {
        tempColorA = 0;
        setColorAnswer(tempColorA);
        setNewContainer(1);
      }, 1000);
    } else {

      setTimeout(() => {
        tempColorA = 0;
        setColorAnswer(tempColorA);
        setNewLesson(2);
      }, 1000);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    text.trim() === "" ? setBlockButton(true) : setBlockButton(false);
  }, [text, setBlockButton]);

  return (
    <Container>
      <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd />
      <SubTitleLesson title="Write what you hear." />
      <SubTitleLessonAudio audio={sound} />
      
      <Main>
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
        <Button
          form="myForm"
          type="submit"
          disabled={blockButton}
        ><p>Check</p></Button>
      </Main>
    </Container>
  )
}