import { useContext, useCallback, useEffect, useState } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";

import { L4_T2_Dificil } from "../../utils/lesson4_Task2";
import { LessonContext } from "../../context/lesson";
import { TrocaAtividade } from "../../utils/regras";

import { Container, Main, Question, Answers, AnswersRow, RadioG, Radio /* Indicator */, Options, Form, Button } from "./styles"
import { defaultTheme } from "../../themes/defaultTheme";

export const Game13 = () => {
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio } = useContext(LessonContext);

  const [colorAnswers, setColorAnswer] = useState([0, 0, 0, 0, 0]);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState([]);

  const loadLesson = useCallback(() => {
    const totalOfQuestions = L4_T2_Dificil.length;

    let tempQuestions = [];
    for (let a = 0; a < totalOfQuestions; a++) {
      tempQuestions.push(a);
    }
    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);
    let tempQ = L4_T2_Dificil[tempQuestions[round]].pergunta;
    setQuestion(tempQ);

    let tempAnswers = [];
    let tempAnswersLength = L4_T2_Dificil[tempQuestions[round]].resposta.length;
    for (let a = 0; a < tempAnswersLength; a++) {
      tempAnswers.push(L4_T2_Dificil[tempQuestions[round]].resposta[a].label);
    }
    setAnswers(tempAnswers);

    let tempRightA = [];
    for (let a = 0; a < tempAnswersLength; a++) {
      tempRightA.push(L4_T2_Dificil[tempQuestions[round]].resposta[a].status);
    }
    setRightAnswers(tempRightA);

  }, [setRandomNumber, setQuestion, setAnswers, round, setRightAnswers])

  const newRound = (number) => {
    setSelectedRadio([]);
    let tempQuestion  = L4_T2_Dificil[randomNumber[number]].pergunta;
    setQuestion(tempQuestion);

    let tempAnswers = [];
    let tempAnswersLength = L4_T2_Dificil[randomNumber[number]].resposta;
    for (let a = 0; a < tempAnswersLength.length; a++) {
      tempAnswers.push(L4_T2_Dificil[randomNumber[number]].resposta[a].label);
    }
    setAnswers(tempAnswers);

    let tempRightA = [];
    for (let a = 0; a < tempAnswersLength.length; a++) {
      tempRightA.push(L4_T2_Dificil[randomNumber[number]].resposta[a].status);
    }
    setRightAnswers(tempRightA);
  }

  const handleRadioChange = (value, index) => {
    const tempSelectedRadio = [...selectedRadio];
    tempSelectedRadio[index] = value;
    setSelectedRadio(tempSelectedRadio);

    if (tempSelectedRadio.length >= 5) {
      setBlockButton(false);
    }
  };

  const handleVerify = (event) => {
    event.preventDefault();
    if (blockButton) return;

    setBlockButton(true);

    let tempAnswers = selectedRadio;
    let tempColor = [...colorAnswers];
    let tempRightPoints = correctPoints;

    const isCorrect = tempAnswers.every((value, index) => value === rightAnswers[index]);

    if (isCorrect) {
      tempRightPoints++;
      setCorrectPoints(tempRightPoints);
      setNewPontos(2, tempRightPoints);
    } else {
      for (let a = 0; a < tempAnswers.length; a++) {
        if (tempAnswers[a] !== rightAnswers[a]) {
          tempColor[a] = 1;
        }
      }
      setColorAnswer(tempColor);

      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const rule = TrocaAtividade(2, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        setColorAnswer([0, 0, 0, 0, 0]);
        newRound(tempRound);
      }, 1000);
    } else if (rule === "Game over") {
      alert('GAME OVER!!');
      setNewPontos(0, 0);
      setColorAnswer([0, 0, 0, 0, 0]);
      
      setTimeout(() => {
        setNewContainer(1);
      }, 1000);
    } else {
      setTimeout(() => {
        setColorAnswer([0, 0, 0, 0, 0]);
        setNewLesson(2);
      }, 1000);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  return (
    <Container>
      <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd />
      <TitleLesson title="Read and choose TRUE or FALSE." />

      <Main>
        <Question>
          <p>{question}</p>
        </Question>

        <Answers>
          <Options>
            <p>TRUE</p>
            <p>FALSE</p>
          </Options>

          <Form id="myForm" onSubmit={handleVerify}>
            {answers.map((answer, index) => {
              return (
                <AnswersRow key={index}>
                  <p style={{borderColor: colorAnswers[index] === 0 ? "" : defaultTheme["red-200"]}}>
                    {answer}
                  </p>
                  <RadioG>
                    <Radio value={1} onClick={() => handleRadioChange(1, index)}>
                      <span style={{backgroundColor: selectedRadio[index] === 1 ? defaultTheme["red-200"] : ""}}></span>
                    </Radio>
                    <Radio value={0} onClick={() => handleRadioChange(0, index)}>
                      <span style={{backgroundColor: selectedRadio[index] === 0 ? defaultTheme["red-200"] : ""}}></span>
                    </Radio>
                  </RadioG>
                </AnswersRow>
              )
            })}

            <Button
              form="myForm"
              type="submit"
              disabled={blockButton}
            ><p>Check</p></Button>
          </Form>
        </Answers>
      </Main>
    </Container>
  )
}