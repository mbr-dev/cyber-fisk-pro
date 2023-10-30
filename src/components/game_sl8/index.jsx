import { useEffect, useState, useContext, useCallback } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";
import { ButtonAnswer } from "../ButtonAnswer";

import { api } from "../../lib/api";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Answer, WordSelected, WordsArea, Div, DivA, DivQuestion, Answers, Delete, Words, DivQ, ButtonArea } from "./styles";

export const GameSL8 = () => {
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

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);

      const response = await api.get("/SuperTaskAtividades/Retorno?id_livro=53&num_lesson=8&num_task=1");
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
  }, [setIsLoading, setQuestions, setAnswers, setLetters])

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
      <TitleLesson title="Make 5 Words" />

      <Main>
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
                <DivA>
                  {questions[qIndex].answer.map((item, index) => {
                    return (
                      <Answer 
                        key={index}
                        style={{
                          backgroundColor: isCompleted ? defaultTheme["red-200"] : ""
                        }}
                      >
                        {isCompleted ? item : hint === item ? item : ""}
                      </Answer>
                    )
                  })}
                </DivA>
              </Div>
            )
          })}
        </Answers>
        <WordSelected>
          <Words>
            {letterSelected.map((letter, index) => {
              return (
                <span key={index}>{letter},</span>
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
                w="1rem"
                h="2.5rem"
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
            w="9rem"
            h="1.5rem"
            title={`${hints} ${hints > 1 ? "hints" : "hint"}`}
            onPress={handleShowHint}
            disabledButton={hints === 0}
          />
          <ButtonBg
            w="9rem"
            h="1.5rem"
            title="Check"
            disabledButton={letterSelected.length === 0}
            onPress={handleVerify}
          />
        </ButtonArea>
      </Main>
    </Container>
  )
}