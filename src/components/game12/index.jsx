import { useEffect, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { Container, Main, Input, Form, Words, ButtonCheck } from "./styles";

export const Game12 = () => {
  const {
    setNewPontos, rodadaGeral, setNewRodada, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

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
    if (event.key === "Enter") {
      return
    }

    event.preventDefault();

    setBlockButton(true);
    
    let tempWord = text.toLowerCase();
    let tempRightPoints;

    if (tempWord === answer) {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 1;
      setStatusColor(newStatus);

      tempRightPoints = PointRule(nivel, correctPoints);
      setCorrectPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 2;
      setStatusColor(newStatus);

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
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(nivel, 0);
      setTimeout(() => {
        navigate("/GameOver");
        setNewContainer(1);
        setStatusColor([0,0,0,0,0,0,0,0,0,0]);
      }, 2000);
    } else if (rule === "Score") {
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      setTimeout(() => {
        navigate(`/${page}`);
        setStatusColor([0,0,0,0,0,0,0,0,0,0]);
      }, 2000);
    } else {
      setTimeout(() => {
        if (nivel === 0) {
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        } else {
          setNewNivel(2);
          const atividade = conteudoDificil[0].id_tipo;
          setNewAtividade(atividade);
        }
      }, 1500);
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

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
      <TitleLesson title="Make questions with the words below. You don’t need to use all the words." />

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
            placeholder="Type here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </Form>
        <ButtonCheck form="myForm" type="submit" disabled={blockButton}>
          <p>Check</p>
        </ButtonCheck>
      </Main>
    </Container>
  )
}