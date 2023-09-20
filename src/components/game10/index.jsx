import { useState, useEffect, useContext } from "react";

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
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio, timeElapsed, setTimeElapsed} = useContext(LessonContext);

  const [optionColor, setOptionColor] = useState(0);
  const [round, setRound] = useState(0);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState('');
  const [text, setText] = useState('');
  const [randomNumber, setRandomNumber] = useState([]);
  const [toHit, setToHit] = useState(0);
  const [erro, setErro] = useState(0);
  const [block, setBlock] = useState(true);
  const [isloading, setIsLoading] = useState(false);

  const loadLesson = () => {
    const totalOfQuestions = L3_T2_Dificil.length;
    let tempQuestions = [];

    for (let a = 0; a < totalOfQuestions; a ++) {
      tempQuestions.push(a);
    }

    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);
    setSound(`${URL_L3T2D}${tempQuestions[round]}.mp3`);

    let tempAnwer = L3_T2_Dificil[tempQuestions[round]].resposta.replace(/’/g, "'");

    setAnswers(tempAnwer);
    setBlock(false);
  }

  const newRound = (number) => {
    setText('');
    setSound(`${URL_L3T2D}${randomNumber[number]}.mp3`);

    let tempAnwer = L3_T2_Dificil[randomNumber[number]].resposta.replace(/’/g, "'");
    setAnswers(tempAnwer);
    setBlock(false);
  }

  const handleVerifyWord = (event) => {
    event.preventDefault();
    if (block) return;
    if (playAudio) return;

    setBlock(true);
    
    let tempWord = text;
    let tempHit = toHit;

    tempWord = tempWord.replace(/’/g, "'");

    if (tempWord === answers) {
      setOptionColor(1);
      tempHit += 3;
      setToHit(tempHit);
      setNewPontos(2, tempHit);
    } else {
      setOptionColor(2);
      let tempEr = erro;
      tempEr++;
      setErro(tempEr);
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const rule = TrocaAtividade(2, tempGeneralRound, tempHit, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        setOptionColor(0);
        newRound(tempRound);
      }, 1000);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);
      
      setTimeout(() => {
        setOptionColor(0);
        setNewContainer(1);
      }, 1000);
    } else {

      setTimeout(() => {
        setOptionColor(0);
        setNewLesson(2);
      }, 1000);
    }
  }

  useEffect(() => {
    loadLesson();
  }, [])

  return (
    <Container>
      <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd />
      <SubTitleLesson title="Write what you hear." />
      <SubTitleLessonAudio audio={sound} />
      
      <Main>
        <form id="myForm" onSubmit={handleVerifyWord}>
          <Input 
            placeholder="Type here"
            required
            maxLength={70}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              backgroundColor: optionColor === 0 ? "" : optionColor === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
              color: optionColor === 0 ? "" : defaultTheme.white,
              border: optionColor === 0 ? "" : "none",
            }}
          />
        </form>
        <Button
          form="myForm"
          type="submit"
          title="Enter"
        ><p>Check</p></Button>
      </Main>
    </Container>
  )
}