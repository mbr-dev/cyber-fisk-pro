import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../TitleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { ButtonAnswer } from "../ButtonAnswer";

import { L5_SUPER_LESSON } from "../../utils/lesson5_Task";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Answer, WordSelected, WordsArea, Div, DivA, DivQuestion, Answers, Delete, Words, DivQ, ButtonArea } from "./styles";

export const GameSL5 = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [letters, setLetters] = useState([]);
  const [letterSelected, setLetterSelected] = useState([]);
  const [points, setPoints] = useState(5);
  const [hints, setHints] = useState(3);
  const [hint, setHint] = useState("");
  const [blockButton, setBlockButton] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [completedWords, setCompletedWords] = useState([]);
  const [correctWordIndices, setCorrectWordIndices] = useState([]);
  const [shownWords, setShownWords] = useState(Array(questions.length).fill(false));
  const [clickedButtons, setClickedButtons] = useState(Array(letters.length).fill(false));


  const loadLesson = () => {
    setQuestions(L5_SUPER_LESSON[0].pergunta);
    setAnswers(L5_SUPER_LESSON[0].resposta);

    let tempRandomL = [];
    for (let a = 0; a < L5_SUPER_LESSON[0].letras.length; a++) {
      tempRandomL.push(a);
    }
    tempRandomL = tempRandomL.sort(() => Math.random() - 0.5);

    let tempLetters = [];
    for (let a = 0; a < L5_SUPER_LESSON[0].letras.length; a++) {
      tempLetters.push(L5_SUPER_LESSON[0].letras[tempRandomL[a]]);
    }
    setLetters(tempLetters);
    setBlockButton(false);
  }

  const handleSelected = (letter, index) => {
    if (!clickedButtons[index]) {
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
      setClickedButtons(Array(letters.length).fill(false));

      if (tempPoint === 0) {
        alert("perdeu");
      }
    }
  }

  const handleShowHint = () => {
    if (hints === 0) return; 
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
    console.log("hint: ", randomHint);
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
        console.log("Parabéns! Você completou todas as palavras!");
      }
    }
  }, [completedWords, questions.length]);
  return (
    <Container>
      <HeaderLesson numEnd="Finish" numStart="Super task" superTaskStart trophyEnd />
      <TitleLesson title="Make 5 Words" />

      <Main>
        <Answers>
          {questions.map((question, qIndex) => {
            const isCompleted = completedWords.includes(qIndex);
            const isCorrect = correctWordIndices.includes(qIndex);
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
                        {isCompleted || isCorrect ? item : hint === item ? item : ""}
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