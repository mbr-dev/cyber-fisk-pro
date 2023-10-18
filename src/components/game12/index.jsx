import { useEffect, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Input, Form, Words } from "./styles";

export const Game12 = () => {
  const {
    setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio, nivel, conteudoFacil, conteudoMedio, conteudoDificil,
    pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);
  
  const navigate = useNavigate();

  const [colorAnswers, setColorAnswer] = useState(0);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState("");
  const [text, setText] = useState("");
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadLesson = useCallback(() => {
    setIsLoading(true);

    let dataLength = 0;
    let tempData;
    if (nivel === 0) {
      setData(conteudoFacil);
      tempData = conteudoFacil;
      dataLength = conteudoFacil.length;
    } else if (nivel === 1) {
      setData(conteudoMedio);
      tempData = conteudoMedio;
      dataLength = conteudoMedio.length;
    } else {
      setData(conteudoDificil);
      tempData = conteudoDificil;
      dataLength = conteudoDificil.length;
    }

    let tempRandom = [];
    for (let a = 0; a < dataLength; a++) {
      tempRandom.push(a);
    }
    tempRandom = tempRandom.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandom);

    const items = JSON.parse(tempData[tempRandom[round]].conteudo);
      
    let tempRandomQuestion = [];
    for (let a = 0; a < items.pergunta.length; a ++) {
      tempRandomQuestion.push(items.pergunta[a]);
    }
    tempRandomQuestion = tempRandomQuestion.sort(() => Math.random() - 0.5);
    setQuestion(tempRandomQuestion);

    let tempAnswer = items.resposta.toLowerCase();
    setAnswer(tempAnswer);
    setIsLoading(false);
  }, [setIsLoading, setData, setRandomNumber, round, setQuestion, setAnswer]);

  const newRound = (number) => {
    setText("");

    const items = JSON.parse(data[randomNumber[number]].conteudo);

    let tempRandomQuestion = [];
    for (let a = 0; a < items.pergunta.length; a ++) {
      tempRandomQuestion.push(items.pergunta[a]);
    }
    tempRandomQuestion = tempRandomQuestion.sort(() => Math.random() - 0.5);
    setQuestion(tempRandomQuestion);

    let tempAnswer = items.resposta.toLowerCase();
    setAnswer(tempAnswer);
  }

  const handleVerify = (event) => {
    event.preventDefault();
    
    let tempWord = text.toLowerCase();
    let tempRightPoints;
    let tempColorA = colorAnswers;

    if (tempWord === answer) {
      tempColorA = 1;
      setColorAnswer(tempColorA);

      tempRightPoints = PointRule(nivel, correctPoints);
      setCorrectPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
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

    const rule = TrocaAtividade(nivel, tempGeneralRound, tempRightPoints, tempRound);

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
      navigate("/GameOver");
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

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
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