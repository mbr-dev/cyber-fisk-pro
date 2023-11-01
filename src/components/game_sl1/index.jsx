import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { FooterBtnHome } from "../FooterBtnHome";

import { api } from "../../lib/api";
import { LessonContext } from "../../context/lesson";
import { L1_SUPER_LESSON } from "../../utils/lesson1_Task";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, ButtonArea, Letter, LettersArea, AreaButtons } from "./styles";

export const GameSL1 = () => {
  const { 
    setTimeElapsed, timeElapsed, statusColor, setStatusColor, rodadaGeral, setNewRodada 
  } = useContext(LessonContext);

  const [optionColor, setOptionColor] = useState([]);
  const [lettersAnswer, setLettersAnswer] = useState([]);
  const [numberClick, setNumberClick] = useState(0);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [letters, setLetters] = useState([]);
  const [answers, setAnswers] = useState("");
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [blockButton, setBlockButton] = useState(true);
  const [blockLetters, setBlockLetters] = useState(false);

  const navigate = useNavigate();
  console.log(answers);

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);

      /* const response = await api.get("/SuperTaskAtividades/Retorno?id_livro=53&num_lesson=1&num_task=1");
      const res = response.data;

      let items = JSON.parse(res.dados[0].dados_conteudo[0].conteudo); */

      let dataLength = L1_SUPER_LESSON.length;

      let tempRandom = [];
      for (let a = 0; a < dataLength; a++) {
        tempRandom.push(a);
      }
      tempRandom = tempRandom.sort(() => Math.random() - 0.5);
      setRandomNumber(tempRandom);

      const items = L1_SUPER_LESSON[tempRandom[round]];
      setOptionColor(Array(items.resposta.length).fill(0));

      const letter = Array(items.resposta.length).fill("");
      setLettersAnswer(letter);

      setAnswers(items.resposta);

      let tempLetters = items.letras;
      tempLetters = tempLetters.sort(() => Math.random() - 0.5);
      setLetters(items.letras);

      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  }, [setIsLoading, setOptionColor, setRandomNumber, round, setLettersAnswer, setLetters, setAnswers]);

  const newRound = (number) => {
    setNumberClick(0);

    const items = L1_SUPER_LESSON[randomNumber[number]];

    const letter = Array(items.resposta.length).fill("");
    setLettersAnswer(letter);

    setAnswers(items.resposta);
    setLetters(items.letras);

    setBlockLetters(false);
    setBlockButton(true);
  }

  const handleClearField = () => {
    let tempLetters = lettersAnswer;
    let tempNumber = numberClick;
    tempNumber--;
    tempLetters[tempNumber] = "";

    if (tempNumber < 1) {
      tempNumber = 0;
    }

    setLettersAnswer(tempLetters);
    setNumberClick(tempNumber);
  }

  const resetField = () => {
    setNumberClick(0);
    setLettersAnswer(Array(L1_SUPER_LESSON[randomNumber[round]].resposta.length).fill(""));
  }

  const handleClick = (letter) => {
    let temp = lettersAnswer;
    let tempNumber = numberClick;

    temp[tempNumber] = letter;
    tempNumber++;

    setLettersAnswer(temp);
    setNumberClick(tempNumber);
  }

  const handleVerify = () => {
    const word = lettersAnswer.join("");

    if (word.toLowerCase() === answers.toLowerCase()) {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 1;
      setStatusColor(newStatus);

      let tempA = rightPoints;
      tempA++;
      setWrongPoints(tempA);
      let tempRound = round;
      tempRound++;
      setRound(tempRound);

      let tempGeneralRound = rodadaGeral;
      tempGeneralRound++;
      setNewRodada(tempGeneralRound);

      setTimeout(() => {
        newRound(tempRound);
      }, 1500);
    } else {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 2;
      setStatusColor(newStatus);

      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);

      resetField();
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
        setTimeElapsed(state => {
          return state + 1
        })
      }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed]);

  useEffect(() => {
    if (round === 6) {
      setTimeout(() => {
        navigate("/WellDone");
      }, 1500);
    }
  }, [round]);

  useEffect(() => {
    if (lettersAnswer.length === numberClick) {
      setBlockButton(false);
      setBlockLetters(true);
    } else {
      setBlockButton(true);
      setBlockLetters(false);
    }
  }, [numberClick, lettersAnswer, setBlockButton, setBlockLetters])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="How many nationalities can you write with these letters?"/>

      <Main>
        <LettersArea>
          {lettersAnswer.map((letter, index) => {
            return (
              <Letter 
                key={index}
                style={{
                  borderColor: numberClick === index ? defaultTheme["red-200"] : optionColor[index] === 1 ? "transparent" : "",
                  backgroundColor: optionColor[index] === 1 ? defaultTheme["green-200"] : "",
                  color: optionColor[index] === 1 ? defaultTheme.white : ""
                }}
              >
                {letter}
              </Letter>
            )
          })}
        </LettersArea>

        <ButtonArea>
          {letters.map((letter, index) => {
            return (
              <ButtonAnswer 
                key={index}
                w="1rem"
                h="2.75rem"
                onPress={() => handleClick(letter)}
                disabledButton={blockLetters}
              >
                <p className="pBold">{letter}</p>
              </ButtonAnswer>
            )
          })}
        </ButtonArea>
      </Main>

      <AreaButtons>
        <ButtonBg
          h="2.5rem"
          w="9rem"
          onPress={handleClearField}
          title="Clear"
        />

        <ButtonBg
          h="2.5rem"
          w="9rem"
          greenBtn
          onPress={handleVerify}
          disabledButton={blockButton}
          title="Check"
        />
      </AreaButtons>
    </Container>
  )
}