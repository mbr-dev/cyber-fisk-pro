import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { HeaderLessonSL1 } from "../HeaderLessonSL1";
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

  const [lettersAnswer, setLettersAnswer] = useState([]);
  const [data, setData] = useState([]);
  const [numberClick, setNumberClick] = useState(0);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [letters, setLetters] = useState([]);
  const [answers, setAnswers] = useState("");
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [blockButton, setBlockButton] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [blockLetters, setBlockLetters] = useState(false);
  const [countTimer, setCountTimer] = useState(0);

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isTablet = window.matchMedia("(min-width: 600px)").matches;

  const navigate = useNavigate();

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);

      const response = await api.get("/SuperTaskAtividades/Retorno?id_livro=53&num_lesson=1&num_task=1");
      const res = response.data;
      setData(res.dados[0].dados_conteudo);
      
      let dataLength = res.dados[0].dados_conteudo.length;
      
      let tempRandom = [];
      for (let a = 0; a < dataLength; a++) {
        tempRandom.push(a);
      }
      tempRandom = tempRandom.sort(() => Math.random() - 0.5);
      setRandomNumber(tempRandom);
      
      const items = JSON.parse(res.dados[0].dados_conteudo[tempRandom[round]].conteudo);

      const letter = Array(items.resposta.length).fill("");
      setLettersAnswer(letter);

      setAnswers(items.resposta);

      let tempLetters = items.letras;
      tempLetters = tempLetters.sort(() => Math.random() - 0.5);
      setLetters(items.letras);
      timePointer();
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  }, [setIsLoading, setRandomNumber, setData, round, setLettersAnswer, setLetters, setAnswers]);

  const newRound = (number) => {
    setNumberClick(0);
    setCountTimer(0);
    timePointer();

    const items = JSON.parse(data[randomNumber[number]].conteudo);

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

      if (countTimer > 91) {
        const newStatus = [...statusColor];
        newStatus[rodadaGeral] = 2;
        setStatusColor(newStatus);
      }

      let tempA = rightPoints;

      if (countTimer < 60) {
        tempA += 5;
      } else if (countTimer >= 61 || countTimer <= 75) {
        tempA += 4;
      } else if (countTimer >= 76 || countTimer <= 90) {
        tempA += 3;
      } else if (countTimer >= 91 || countTimer <= 120) {
        tempA += 2;
      } else {
        tempA += 1;
      }

      setRightPoints(tempA);
    } else {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 2;
      setStatusColor(newStatus);

      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);

      resetField();
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    setTimeout(() => {
      newRound(tempRound);
    }, 1500);
  }

  const timePointer = () => {
    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      setCountTimer(state => state + 1);
    }, 1000);

    setIntervalId(newIntervalId);
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

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
    if (wrongPoints > 3) {
      setTimeout(() => {
        navigate("/GameOver");
      }, 1500);
    }

    if (round === 6) {
      setTimeout(() => {
        navigate("/WellDone");
      }, 1500);
    }
  }, [round, timeElapsed]);

  useEffect(() => {
    if (lettersAnswer.length === numberClick) {
      setBlockButton(false);
      setBlockLetters(true);
    } else {
      setBlockButton(true);
      setBlockLetters(false);
    }
  }, [numberClick, lettersAnswer, setBlockButton, setBlockLetters]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <HeaderLessonSL1 trophyEnd superTaskStart numStart="Super task" numEnd="Finish" />
      <TitleLesson title="How many nationalities can you write with these letters?"/>

      <Main>
        <LettersArea>
          {lettersAnswer.map((letter, index) => {
            return (
              <Letter 
                key={index}
                style={{
                  borderColor: numberClick === index ? defaultTheme["red-200"] : "",
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
                fs={isDesktop ? "32px" : ""}
                w={isDesktop ? "42px" : "1rem"}
                h={isDesktop ? "64px" : "2.75rem"}
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
          fs={isDesktop && "28px"}
          h={isDesktop ? "44px" : "2.5rem"}
          w={isDesktop ? "200px" : "9rem"}
          onPress={handleClearField}
          title="Clear"
        />

        <ButtonBg
          fs={isDesktop && "28px"}
          h={isDesktop ? "44px" : "2.5rem"}
          w={isDesktop ? "200px" : "9rem"}
          greenBtn
          onPress={handleVerify}
          disabledButton={blockButton}
          title="Check"
        />
      </AreaButtons>

      <FooterBtnHome 
        fs={isDesktop ? "32px" : isTablet ? "28px" : ""}
        wl={isDesktop ? "48%" : "80%"}
        hasLS
        title="Tasks" 
        rota="LessonSelection"
        w={isDesktop ? "450px" : isTablet ? "400px" : ""}
        h={isDesktop ? "52px" : isTablet ? "48px" : ""}
      />
    </Container>
  )
}