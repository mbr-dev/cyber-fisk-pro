import { useEffect, useState, useCallback, useContext } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";

import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";
import { L4_T2_Medio } from "../../utils/lesson4_Task";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Input, Form, Words, Button } from "./styles";

export const Game12 = () => {
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio } = useContext(LessonContext);

  const [colorAnswers, setColorAnswer] = useState(0);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState('');
  const [text, setText] = useState('');
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  
  const loadLesson = useCallback(() => {
    const totalOfQuestions = L4_T2_Medio.length;
    
    let tempQuestions = [];
    for (let a = 0; a < totalOfQuestions; a++) {
      tempQuestions.push(a);
    }
    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);
    
    let tempRandomQuestion = [];
    let questionLength = L4_T2_Medio[tempQuestions[round]].pergunta;
    for (let a = 0; a < questionLength.length; a ++) {
      tempRandomQuestion.push(L4_T2_Medio[tempQuestions[round]].pergunta[a]);
    }
    tempRandomQuestion = tempRandomQuestion.sort(() => Math.random() - 0.5);
    setQuestion(tempRandomQuestion);

    let tempAnswer = L4_T2_Medio[tempQuestions[round]].resposta.toLowerCase();
    setAnswer(tempAnswer);
  }, [setRandomNumber, round, setQuestion, setAnswer]);

  const newRound = (number) => {
    setText("");

    let tempRandomQuestion = [];
    let questionLength = L4_T2_Medio[randomNumber[number]].pergunta;
    for (let a = 0; a < questionLength.length; a ++) {
      tempRandomQuestion.push(L4_T2_Medio[randomNumber[number]].pergunta[a]);
    }
    tempRandomQuestion = tempRandomQuestion.sort(() => Math.random() - 0.5);
    setQuestion(tempRandomQuestion);

    let tempAnswer = L4_T2_Medio[randomNumber[number]].resposta.toLowerCase();
    setAnswer(tempAnswer);
  }

  const handleVerify = (event) => {
    event.preventDefault();
    
    let tempWord = text.toLowerCase();
    let tempRightPoints = correctPoints;
    let tempColorA = colorAnswers;

    if (tempWord === answer) {
      tempColorA = 1;
      setColorAnswer(tempColorA);
      tempRightPoints += 2;
      setCorrectPoints(tempRightPoints);
      setNewPontos(1, tempRightPoints);
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
      setTimeout(() => {
        tempColorA = 0;
        setColorAnswer(tempColorA);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      alert('GAME OVER!!');
      setNewPontos(0, 0);
      
      setTimeout(() => {
        alert('Passou para próxima task');
        tempColorA = 0;
        setColorAnswer(tempColorA);
        setNewContainer(1);
      }, 1500);
    } else {

      setTimeout(() => {
        tempColorA = 0;
        setColorAnswer(tempColorA);
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
      <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd />
      <TitleLesson title="Make questions with the words below. You don’t need to use all words." />

      <Main>
        <Words>
          {question.map((word, index) => {
            return (
              <p key={index}>{word}</p>
            )
          })}
        </Words>

        <Form id="myForm" onSubmit={handleVerify}>
          <Input
            type="text"
            placeholder="Write here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              backgroundColor: colorAnswers === 0 ? "" : colorAnswers === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
              color: colorAnswers === 0 ? "" : defaultTheme.white,
              border: colorAnswers === 0 ? "" : "none",
            }}
          />
        </Form>
        <Button
          form="myForm"
          type="submit"
          disabled={blockButton}
        ><p>Check</p></Button>
      </Main>
    </Container>
  )
}