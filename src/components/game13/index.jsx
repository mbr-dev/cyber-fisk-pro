import { useContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";

import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Question, Answers, AnswersRow, RadioG, Radio, Options, Form } from "./styles";

export const Game13 = () => {
  const {setNewContainer, setNewPontos, rodadaGeral, setNewRodada,
    nivel, conteudoFacil, conteudoMedio, conteudoDificil,
    pontosD, pontosF, pontosM, setNewAtividade, setNewNivel,
    numSelLesson, numTask } = useContext(LessonContext);
  
  const navigate = useNavigate();

  const [colorAnswers, setColorAnswer] = useState([0, 0, 0, 0, 0]);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState([]);
  const [data, setData] = useState([]);

  const loadLesson = useCallback(() => {
    let totalOfQuestions = 0;
    let tempData;
    if(nivel === 0){
      setData(conteudoFacil);
      tempData = conteudoFacil;
      totalOfQuestions = conteudoFacil.length;
    }else if(nivel === 1){
      setData(conteudoMedio);
      tempData = conteudoMedio;
      totalOfQuestions = conteudoMedio.length;
    }else{
      setData(conteudoDificil);
      tempData = conteudoDificil;
      totalOfQuestions = conteudoDificil.length;
    }

    let tempQuestions = [];
    for (let a = 0; a < totalOfQuestions; a++) {
      tempQuestions.push(a);
    }
    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);
    let tempQ = tempData[tempQuestions[round]].pergunta;
    setQuestion(tempQ);

    let tempAnswers = [];
    let tempAnswersLength = tempData[tempQuestions[round]].resposta.length;
    for (let a = 0; a < tempAnswersLength; a++) {
      tempAnswers.push(tempData[tempQuestions[round]].resposta[a].label);
    }
    setAnswers(tempAnswers);

    let tempRightA = [];
    for (let a = 0; a < tempAnswersLength; a++) {
      tempRightA.push(tempData[tempQuestions[round]].resposta[a].status);
    }
    setRightAnswers(tempRightA);

  }, [setRandomNumber, setQuestion, setAnswers, round, setRightAnswers])

  const newRound = (number) => {
    setSelectedRadio([]);
    let tempQuestion  = data[randomNumber[number]].pergunta;
    setQuestion(tempQuestion);

    let tempAnswers = [];
    let tempAnswersLength = data[randomNumber[number]].resposta;
    for (let a = 0; a < tempAnswersLength.length; a++) {
      tempAnswers.push(data[randomNumber[number]].resposta[a].label);
    }
    setAnswers(tempAnswers);

    let tempRightA = [];
    for (let a = 0; a < tempAnswersLength.length; a++) {
      tempRightA.push(data[randomNumber[number]].resposta[a].status);
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
    let tempRightPoints = rightPoints;

    const isCorrect = tempAnswers.every((value, index) => value === rightAnswers[index]);

    if (isCorrect) {
      for (let a = 0; a < tempAnswers.length; a++) {
        tempColor[a] = 1;
      }
      setColorAnswer(tempColor);

      tempRightPoints += 3;
      setRightPoints(tempRightPoints);
      setNewPontos(2, tempRightPoints);
    } else {
      for (let a = 0; a < tempAnswers.length; a++) {
        tempColor[a] = tempAnswers[a] === rightAnswers[a] ? 1 : 2;
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

    if(rule === "Continua") {
      setTimeout(() =>{
        setColorAnswer([0, 0, 0, 0, 0]);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over"){
      setNewPontos(0,0);
      setTimeout(() =>{
        setColorQuestions([0, 0, 0]);
        setColorAnswer([0, 0, 0, 0, 0]);
        setCountClick(0);
        navigate('/GameOver');
        setNewContainer(1);
      },1500);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    }else {
      setTimeout(() =>{
        setColorQuestions([0, 0, 0]);
        setColorAnswer([0, 0, 0, 0, 0]);
        setCountClick(0);
        if(nivel === 0){
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        }else{
          setNewNivel(2);
          const atividade = conteudoDificil[0].id_tipo;
          setNewAtividade(atividade);
        }
      },1500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  return (
    <Container>
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
                  <p style={{borderColor: colorAnswers[index] === 1 ? defaultTheme["green-200"] : colorAnswers[index] === 2 ? defaultTheme["red-200"] : ""}}>
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
            <ButtonBg
              form="myForm"
              type="submit"
              disabledButton={blockButton}
              title="Check"
              w="15.875rem"
              h="2.5rem"
            />
          </Form>
        </Answers>
      </Main>
    </Container>
  )
}