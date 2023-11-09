import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { FooterBtnHome } from "../FooterBtnHome";

import { api } from "../../lib/api";
import { LessonContext } from "../../context/lesson";

import { Container, Main, DivLetter, Letters, LineSeparator, TypeLetters, Phrase, DivWord, Answer, Input, TypeLetters2, DivLetter2 } from "./styles";

export const GameSL9 = () => {
  const {
    rodadaGeral, setNewRodada, setTimeElapsed, statusColor, setStatusColor
  } = useContext(LessonContext);

  const keyboardLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const navigate = useNavigate();

  const [round, setRound] = useState(0);
  const [question, setQuestion] = useState("");
  const [type, setType] = useState(0);
  const [data, setData] = useState([]);
  const [divLetter, setDivLetter] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [divLetterRight, setDivLetterRight] = useState([]);
  const [answersOfQuestion, setAnswersOfQuestion] = useState([]);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [points, setPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [block, setBlock] = useState(true);
  const [changed, setChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [countTimer, setCountTimer] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [selectedWrongIndexes, setSelectedWrongIndexes] = useState([]);

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isTablet = window.matchMedia("(min-width: 600px)").matches;
 
  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);
      const response = await api.get("/SuperTaskAtividades/Retorno?id_livro=53&num_lesson=9&num_task=1");
      const res = response.data;
      setData(res.dados[0].dados_conteudo);

      let tempRandom = [];
      for (let a = 0; a < 10; a++) {
        tempRandom.push(a);
      }
      tempRandom = tempRandom.sort(() => Math.random() - 0.5);
      setRandomNumber(tempRandom);

      let items = JSON.parse(res.dados[0].dados_conteudo[tempRandom[round]].conteudo);

      let tempQuestion = items.pergunta.toUpperCase();
      setQuestion(tempQuestion);

      setType(items.tipo);

      let letterQuestion = tempQuestion.split(" ");
      const lettersIndex = letterQuestion.map(word => word.split("").map(letter => keyboardLetters.indexOf(letter)));
      const lettersWord = lettersIndex.map(word => word.map(index => keyboardLetters[index]));
      setDivLetter(lettersIndex);
      setDivLetterRight(lettersWord);

      const answersLength = items.resposta.length;
      let tempAnswers = [];

      for (let a = 0; a < answersLength; a ++) {
        tempAnswers.push(items.resposta[a]);
      }
      setAnswersOfQuestion(tempAnswers);

      setBlock(false);
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  }, [round, keyboardLetters, setRandomNumber, setQuestion, setDivLetter, setDivLetterRight, setBlock, setAnswersOfQuestion])

  const newRound = (number) => {
    setText("");
    setSelectedIndexes([]);
    setSelectedWrongIndexes([]);

    const items = JSON.parse(data[randomNumber[number]].conteudo);

    let tempQuestion = items.pergunta.toUpperCase();

    setQuestion(tempQuestion);
    setType(items.tipo);

    let letterQuestion = tempQuestion.split(" ");
    const lettersIndex = letterQuestion.map(word => word.split("").map(letter => keyboardLetters.indexOf(letter)));
    const lettersWord = lettersIndex.map(word => word.map(index => keyboardLetters[index]));
    setDivLetter(lettersIndex);
    setDivLetterRight(lettersWord);

    const answersLength = items.resposta.length;
    let tempAnswers = [];

    for (let a = 0; a < answersLength; a ++) {
      tempAnswers.push(items.resposta[a]);
    }

    setCountTimer(0);
    setAnswersOfQuestion(tempAnswers);
    setChanged(false);
  }

  const handleLetterClick = (index) => {
    if (divLetter.length > 0) {
      const letterToReplace = keyboardLetters[index];

      const newDivLetter = divLetter.map((letters) =>
        letters.map((letter) => letter === index ? letterToReplace : letter)
      );

      setDivLetter(newDivLetter);

      if (divLetter.some(letter => letter.includes(index))) {
        setSelectedIndexes([...selectedIndexes, index]);
      } else {
        setSelectedWrongIndexes([...selectedWrongIndexes, index]);
      }
    }
  }

  const getPoints = () => {
    let tempP = correctPoints;

    if (countTimer <= 60) {
      tempP += 5;
    } else if (countTimer >= 61 && countTimer <= 75) {
      tempP += 4;
    } else if (countTimer >= 76 && countTimer <= 90) {
      tempP += 3;
    } else if (countTimer >= 91 && countTimer <= 120) {
      tempP += 2;
    } else {
      tempP += 1;
    }

    setCorrectPoints(tempP);
  }

  const handleVerifyAnswers = (event) => {
    event.preventDefault();

    const userText = text;

    if (type === 1) {
      console.log("caiu no tipo 1");
      const correctStarts = [
        "I shopped for new clothes",
        "I like",
        "At ",
        "I worked out at ",
        "I worked out ",
        "My favorite TV show is",
        "I visited a small city"
      ];
      
      const isStartCorrect = correctStarts.some((start) => userText.startsWith(start));
      
      if (isStartCorrect) {
        getPoints();

        const newStatus = [...statusColor];
        newStatus[rodadaGeral] = 1;
        setStatusColor(newStatus);

        let tempP = points;
        tempP++;
        setPoints(tempP);
      } else {
        const newStatus = [...statusColor];
        newStatus[rodadaGeral] = 2;
        setStatusColor(newStatus);

        let tempE = wrongPoints;
        tempE++;
        setWrongPoints(tempE);
      }
    } else {
      console.log("caiu no tipo 0");
      const isAnswerCorrect = answersOfQuestion.some((answer) => answer === userText);

      if (isAnswerCorrect) {
        getPoints();

        const newStatus = [...statusColor];
        newStatus[rodadaGeral] = 1;
        setStatusColor(newStatus);

        let tempP = points;
        tempP++;
        setPoints(tempP); 
      } else {
        const newStatus = [...statusColor];
        newStatus[rodadaGeral] = 2;
        setStatusColor(newStatus);

        let tempE = wrongPoints;
        tempE++;
        setWrongPoints(tempE);
      }
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    if (round === 9) {
      if (correctPoints >= 2) {
        setTimeout(() => {
          navigate("/WellDone");
        }, 1500);
      } else {
        setTimeout(() => {
          navigate("/GameOver");
        }, 1500);
      }
    } else {
      setTimeout(() => {
        newRound(tempRound);
      }, 1500);
    }
  }

  useEffect(() => {
    loadLesson();
  } , []);

  useEffect(() => {
    const checkIfLettersMatch = () => {
      const letter = divLetter.map((letters) => letters.join("")).join("");
      const lettersRight = divLetterRight.map((letters) => letters.join("")).join("");
      return letter === lettersRight;
    };

    if (divLetter.length > 0 && checkIfLettersMatch()) {
      setTimeout(() => {
        setChanged(true);
      }, 1500);
    } else {
      setChanged(false);
    }
  }, [divLetter, divLetterRight, setChanged]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountTimer(state => state + 1)
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [countTimer]);

  useEffect(() => {
    let timer = setInterval(() => {
      setTimeElapsed(state => state + 1)
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed]);

  useEffect(() => {
    text.trim() === "" ? setBlock(true) : setBlock(false);
  }, [text, setBlock]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <HeaderLesson superTaskStart trophyEnd numStart="Super task" numEnd="Finish" />
      {changed ? 
        <TitleLesson title="Now answer the question." />
        :
        <TitleLesson title="Solve the code to answer the question." />
      }

      <Main>
        {!changed ? 
          <Phrase>
            <Letters>
              {keyboardLetters.map((letter, index) => {
                const isRight = selectedIndexes.includes(index);
                const isWrong  = selectedWrongIndexes.includes(index);
                return (
                  <button 
                    key={index}
                    onClick={() => handleLetterClick(index)}
                    className={isRight ? "selected" : isWrong ? "erro" : ""}
                  >
                    <p>{letter.toUpperCase()}</p>
                    <LineSeparator />
                    <span>{index}</span>
                  </button>
                )
              })}
            </Letters>

            <TypeLetters>
              {divLetter.map((letters, letterIndex) => {
                return (
                  <DivWord key={letterIndex}>
                    {letters.map((letter, index) => {
                      const isString = typeof letter === "string";

                      return (
                        <DivLetter 
                          key={index}
                          className={isString ? "checked" : ""}
                        >
                          {letter}
                        </DivLetter>
                      )
                    })}
                  </DivWord>
                )
              })}
              <DivLetter className="checked">
                ?
              </DivLetter>
            </TypeLetters>
          </Phrase>
        :
          <Answer>
            <TypeLetters2>
              {divLetterRight.map((letters, letterIndex) => {
                return (
                  <DivWord key={letterIndex}>
                    {letters.map((letter, index) => {
                      return (
                        <DivLetter2 key={index}>
                          {letter}
                        </DivLetter2>
                      )
                    })}
                  </DivWord>
                )
              })}
              <DivLetter2>?</DivLetter2>
            </TypeLetters2>

            <form id="myForm" onSubmit={handleVerifyAnswers} >
              <Input
                type="text"
                placeholder="Type here"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </form>
            <ButtonBg
              w="250px"
              h="44px"
              fs={isDesktop ? "32px" : "20px"}
              form="myForm"
              type="submit"
              title="Check"
              greenBtn
              disabledButton={block}
            />
          </Answer>
        }
      </Main>

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