import { useEffect, useState, useContext, useCallback } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { FooterBtnHome } from "../FooterBtnHome";
import { HeaderLessonSLTitle } from "../HeaderLessonSLTitle";

import { api } from "../../lib/api";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Answer, WordSelected, WordsArea, Div, DivA, DivQuestion, Answers, Delete, Words, DivQ, ButtonArea, Left, Right } from "./styles";

export const GameSL5 = () => {
  const { setTimeElapsed } = useContext(LessonContext);

  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [letters, setLetters] = useState([]);
  const [letterSelected, setLetterSelected] = useState([]);
  const [points, setPoints] = useState(5);
  const [hints, setHints] = useState(3);
  const [hint, setHint] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [completedWords, setCompletedWords] = useState([]);
  const [shownWords, setShownWords] = useState(Array(questions.length).fill(false));
  const [clickedButtons, setClickedButtons] = useState(Array(letters.length).fill(false));

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);
      setPoints(5);

      const response = await api.get("/SuperTaskAtividades/Retorno?id_livro=53&num_lesson=5&num_task=1");
      const res = response.data;

      const items = JSON.parse(res.dados[0].dados_conteudo[0].conteudo);

      setQuestions(items.pergunta);
      setAnswers(items.resposta);

      let tempRandomL = [];
      for (let a = 0; a < items.letras.length; a++) {
        tempRandomL.push(a);
      }
      tempRandomL = tempRandomL.sort(() => Math.random() - 0.5);

      let tempLetters = [];
      for (let a = 0; a < items.letras.length; a++) {
        tempLetters.push(items.letras[tempRandomL[a]]);
      }
      setLetters(tempLetters);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [setIsLoading, setPoints, setQuestions, setAnswers, setLetters])

  const handleSelected = (letter, index) => {
    if (!clickedButtons[index] && !completedWords.includes(letter)) {
      setLetterSelected(state => [...state, letter]);
      setClickedButtons(state => {
        const newState = [...state];
        newState[index] = true;
        return newState;
      });
    }
  }

  const handleVerify = () => {
    const matchingIndex = answers.findIndex(answer => answer.toUpperCase() === letterSelected.join("").toUpperCase());
    if (matchingIndex !== -1) {
      const newCompletedWords = [...completedWords, matchingIndex];
      setCompletedWords(newCompletedWords);
      setShownWords(newCompletedWords.map(index => ({ index, shown: true })));
      setLetterSelected([]);
    } else {
      let tempPoint = points;
      tempPoint--;
      setPoints(tempPoint);
      setLetterSelected([]);

      setClickedButtons(state => {
        const newState = [...state];
        letterSelected.forEach(letter => {
          const letterIndex = letters.findIndex(item => item === letter);
          if (letterIndex !== -1) {
            newState[letterIndex] = false;
          }
        });
        return newState;
      });

      if (tempPoint === 0) {
        setTimeout(() => {
          navigate("/GameOver");
        }, 1500);
      }
    }
  }

  const handleShowHint = () => {
    let tempHint = hints;
    tempHint--;
    setHints(tempHint);

    let availableHints = questions.filter((question, index) => !completedWords.includes(index)).flatMap(question => question.answer);

    if (availableHints.length === 0) {
      return;
    }

    let randomHintIndex = Math.floor(Math.random() * availableHints.length);
    let randomHint = availableHints[randomHintIndex];
    setHint(randomHint);
  }

  const handleDelete = () => {
    if (letterSelected.length > 0) {
      const updatedLetterSelected = letterSelected.slice(0, -1);
      setLetterSelected(updatedLetterSelected);
      const updatedClickedButtons = clickedButtons.map((clicked, index) => {
        return letterSelected.includes(letters[index]) ? false : clicked;
      });
      setClickedButtons(updatedClickedButtons);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    if (completedWords.length > 0) {

      if (completedWords.length === questions.length) {
        setTimeout(() => {
          navigate("/WellDone")
        }, 1500);
      }
    }
  }, [completedWords, questions.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(state => state + 1)
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <HeaderLessonSLTitle superTaskStart trophyEnd title="Super Lesson 5" numStart="Super task" numEnd="Finish" />
      <TitleLesson title="Make 5 Words" />

      <Main>
        <Left>
          <Answers>
            {questions.map((question, qIndex) => {
              const isCompleted = completedWords.includes(qIndex);
              return (
                <Div key={qIndex}>
                  <DivQ>
                    <DivQuestion>
                      <span>{qIndex + 1}. {question.label}</span>
                    </DivQuestion>
                  </DivQ>
                  <DivA style={{ gap: isCompleted && "0"}}>
                    {questions[qIndex].answer.map((item, index) => {
                      return !isCompleted ? (
                        <Answer 
                          key={index}
                          style={{
                            backgroundColor: isCompleted ? defaultTheme["red-200"] : "",
                            marginLeft: isCompleted && "-9px"
                          }}
                        >
                          {isCompleted ? item : hint === item ? item : ""}
                        </Answer>
                      ) : (
                      <span>{item}</span>
                      )
                    })}
                  </DivA>
                </Div>
              )
            })}
          </Answers>
        </Left>

        <Right>
          <WordSelected>
            <Words>
              {letterSelected.map((letter, index) => {
                return (
                  <span key={index}>{letter}</span>
                )
              })}
            </Words>
            <Delete onClick={handleDelete}>
              <X size={32} color="white" strokeWidth={3} />
            </Delete>
          </WordSelected>

          <WordsArea>
            {letters.map((letter, index) => {
              return (
                <ButtonAnswer
                  key={index}
                  w={isDesktop ? "32px" : "1rem"}
                  h={isDesktop ? "58px" : "2.5rem"}
                  fs={isDesktop && "22px"}
                  onPress={() => handleSelected(letter, index)}
                  bgColor={clickedButtons[index]}
                  disabledButton={clickedButtons[index]}
                >
                  {letter}
                </ButtonAnswer>
              )
            })}
          </WordsArea>

          <ButtonArea>
            <ButtonBg
              w={isDesktop ? "200px" : "9rem"}
              h={isDesktop ? "52px" : "1.5rem"}
              fs={isDesktop && "28px"}
              title={`${hints} ${hints > 1 ? "hints" : "hint"}`}
              onPress={handleShowHint}
              disabledButton={hints === 0}
            />
            <ButtonBg
              w={isDesktop ? "200px" : "9rem"}
              h={isDesktop ? "52px" : "1.5rem"}
              fs={isDesktop && "28px"}
              title="Check"
              disabledButton={letterSelected.length === 0}
              onPress={handleVerify}
            />
          </ButtonArea>
        </Right>
      </Main>

      <FooterBtnHome 
        fs={isDesktop && "32px"}
        title="Tasks"
        hasLS
        wl={isDesktop && "60%"}
        rota="LessonSelection"
        w={isDesktop && "450px"}
        h={isDesktop && "52px"}
      />
    </Container>
  )
}