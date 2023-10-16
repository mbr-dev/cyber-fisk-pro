import { useEffect, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../TitleLesson";
import { HeaderLesson } from "../HeaderLesson";

import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";
import { L4_T2_Medio } from "../../utils/lesson4_Task";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Input, Form, Words } from "./styles";

export const Game12 = () => {
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio,
    nivel, conteudoFacil, conteudoMedio, conteudoDificil,
    pontosD, pontosF, pontosM, setNewAtividade, setNewNivel,
    numSelLesson, numTask } = useContext(LessonContext);
  
  const navigate = useNavigate();

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
    
    let tempRandomQuestion = [];
    let questionLength = tempData[tempQuestions[round]].pergunta;
    for (let a = 0; a < questionLength.length; a ++) {
      tempRandomQuestion.push(tempData[tempQuestions[round]].pergunta[a]);
    }
    tempRandomQuestion = tempRandomQuestion.sort(() => Math.random() - 0.5);
    setQuestion(tempRandomQuestion);

    let tempAnswer = tempData[tempQuestions[round]].resposta.toLowerCase();
    setAnswer(tempAnswer);
  }, [setRandomNumber, round, setQuestion, setAnswer]);

  const newRound = (number) => {
    setText("");

    let tempRandomQuestion = [];
    let questionLength = data[randomNumber[number]].pergunta;
    for (let a = 0; a < questionLength.length; a ++) {
      tempRandomQuestion.push(data[randomNumber[number]].pergunta[a]);
    }
    tempRandomQuestion = tempRandomQuestion.sort(() => Math.random() - 0.5);
    setQuestion(tempRandomQuestion);

    let tempAnswer = data[randomNumber[number]].resposta.toLowerCase();
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
      setNewPontos(0, 0);
      tempColorA = 0;
      setColorAnswer(tempColorA);
      navigate('/GameOver');
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    }else {

      setTimeout(() => {
        tempColorA = 0;
        setColorAnswer(tempColorA);
        if(nivel === 0){
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        }else{
          setNewNivel(2);
          const atividade = conteudoDificil[0].id_tipo;
          setNewAtividade(atividade);
        }
        //setNewLesson(2);
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
      {/* <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd /> */}
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
        <ButtonBg
          form="myForm"
          type="submit"
          disabledButton={blockButton}
          title="Check"
          w="15.875rem"
          h="2.5rem"
          greenBtn
        />
      </Main>
    </Container>
  )
}