import { useContext, useState, useCallback, useEffect } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";
import { SubTitleLesson } from "../SubTitleLesson";
import { ButtonAnswer } from "../ButtonAnswer";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";

import { Container, Main, Image, ButtonArea } from "./styles";
import { L5_T1_Facil } from "../../utils/lesson5_Task1";
import { TrocaAtividade } from "../../utils/regras";

export const Game14 = () => {
  const { rodadaGeral, setNewRodada, setNewContainer, setNewPontos, setNewLesson } = useContext(LessonContext);
  
  const [optionColor, setOptionColor] = useState([0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2, 3]);
  const [image, setImage] = useState("");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isloading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    const totalOfQuestion = L5_T1_Facil.length;

    let tempQuestions = [];
    for (let a = 0; a < totalOfQuestion; a++) {
      tempQuestions.push(a);
    }
    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);
    setQuestion(L5_T1_Facil[tempQuestions[round]].pergunta);
    setImage(L5_T1_Facil[tempQuestions[round]].image);

    let tempRandomAnswer = idClick;
    tempRandomAnswer = tempRandomAnswer.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomAnswer);

    let tempAnswers = [];
    let tempAnswersLength = L5_T1_Facil[tempQuestions[round]].resposta.length;
    for (let a = 0; a < tempAnswersLength; a++) {
      tempAnswers.push({
        label: L5_T1_Facil[tempQuestions[round]].resposta[a].label,
        status: L5_T1_Facil[tempQuestions[round]].resposta[a].status,
      })
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);

    setBlockButton(false);
  }, [setRandomNumber, round, setIdClick, setQuestion, setAnswers, setBlockButton, setImage]);

  const newRound = (number) => {
    let tempQuestion = L5_T1_Facil[randomNumber[number]].pergunta;
    console.log("tempQuestion: ", tempQuestion);
    setQuestion(tempQuestion);
    let tempImage = L5_T1_Facil[randomNumber[number]].image;
    setImage(tempImage);

    let tempRandomAnswer = idClick;
    tempRandomAnswer = tempRandomAnswer.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomAnswer);

    let tempAnswers = [];
    let tempAnswersLength = L5_T1_Facil[randomNumber[number]].resposta.length;
    for (let a = 0; a < tempAnswersLength; a++) {
      tempAnswers.push({
        label: L5_T1_Facil[randomNumber[number]].resposta[a].label,
        status: L5_T1_Facil[randomNumber[number]].resposta[a].status
      })
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);

    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton) return;

    setBlockButton(true);

    let tempRightPoints = rightPoints;
    let tempColor = [...optionColor];
    const selectedAnswer = answers[index];

    if (selectedAnswer.status === 1) {
      tempColor[index] = 1;
      setOptionColor(tempColor);

      tempRightPoints++;
      setRightPoints(tempRightPoints);
      setNewPontos(0, tempRightPoints);
    } else {
      tempColor[index] = 2;
      setOptionColor(tempColor);

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

    const rule = TrocaAtividade(0, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        setOptionColor([0, 0, 0]);
        newRound(tempRound);
      }, 1000);
    } else if (rule === "Game over") {
      alert('GAME OVER!!');
      setNewPontos(0, 0);
      setOptionColor([0, 0, 0]);
      
      setTimeout(() => {
        setNewContainer(1);
      }, 1000);
    } else {
      setTimeout(() => {
        alert('Passou de task');
        setOptionColor([0, 0, 0]);
        setNewLesson(2);
      }, 1000);
    }
  }

  useEffect(() => {
    loadLesson();
  }, [])

  return (
    <Container>
      <HeaderLesson numStart="Task1" numEnd="Task 2" />
      <TitleLesson title="Choose the correct alternative." /> 

      <Main>
        <Image>
          <img src={`${URL_FISKPRO}lesson${5}/${image}.png`} alt="" />
        </Image>

        <SubTitleLesson title={question} />

        <ButtonArea>
          {answers.map((answer, index) => {
            return (
              <ButtonAnswer
                w="15rem"
                h="3rem"
                key={index}
                onPress={() => handleClick(index)}
                optionColor={optionColor[index]}
              >
                {answer.label}
              </ButtonAnswer>
            )
          })}
        </ButtonArea>
      </Main>
    </Container>
  )
}