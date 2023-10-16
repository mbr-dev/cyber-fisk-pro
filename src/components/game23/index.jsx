import { useState, useEffect, useContext, useCallback } from "react";

import { ButtonBg } from "../ButtonBg";
import { SubTitleLesson } from "../subTitleLesson";
import { SubTitleLessonAudio } from "../subTitleLessonAudio";

import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";
import { L6_T1_Medio } from "../../utils/lesson6_Task";
import { URL_FISKPRO } from "../../config/infos";

import { defaultTheme } from "../../themes/defaultTheme";
import { Main, Container, Input } from "./styles";

export const Game23 = () => {
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio, numSelLesson } = useContext(LessonContext);

  const [colorAnswers, setColorAnswer] = useState(0);
  const [sound, setSound] = useState(null);
  const [answer, setAnswer] = useState([]);
  const [text, setText] = useState("");
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isloading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    const totalOfSounds = L6_T1_Medio.length;
    
    let tempSounds = [];
    for (let a = 0; a < totalOfSounds; a ++) {
      tempSounds.push(a);
    }
    tempSounds = tempSounds.sort(() => Math.random() - 0.5);
    setRandomNumber(tempSounds);

    setSound(L6_T1_Medio[tempSounds[round]].pergunta);
    
    let tempAnswer = L6_T1_Medio[tempSounds[round]].resposta;
    setAnswer(tempAnswer);
  }, [setRandomNumber, setSound, setAnswer]);

  const newRound = (number) => {
    setText("");
    setSound(L6_T1_Medio[randomNumber[number]].pergunta);
    let tempAnswer = L6_T1_Medio[randomNumber[round]].resposta;
    setAnswer(tempAnswer);
  }

  const handleVerifyWord = (event) => {
    event.preventDefault();
    if (playAudio) return;
    
    let tempWord = text;
    let tempRightPoints = rightPoints;
    let tempColorA = colorAnswers;

    tempWord = tempWord.replace(/'/g, "’");

    if (answer.includes(tempWord)) {
      tempColorA = 1;
      setColorAnswer(tempColorA);
      tempRightPoints += 2;
      setRightPoints(tempRightPoints);
      setNewPontos(2, tempRightPoints);
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

    const rule = TrocaAtividade(1, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() =>{
        setColorAnswer(0);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0,0);
      setTimeout(() =>{
        setColorAnswer(0);
        alert('GAME OVER!!');
        setNewContainer(1);
      }, 1500);
    } else {
      setTimeout(() =>{
        setColorAnswer(0);
        alert('Proximo lesson!!');
        setNewLesson(2);
      }, 1500);
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
      <SubTitleLesson title="Answer the questions you hear." />
      <SubTitleLessonAudio audio={`${URL_FISKPRO}sounds/essentials1/lesson${numSelLesson}/${sound}.mp3`} />
      
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