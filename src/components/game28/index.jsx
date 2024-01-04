import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useState, useEffect } from "react";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { Container, Form, Main, Select, ButtonCheck } from "./styles";

export const Game28 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState("");
  const [option, setOption] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [selected, setSelected] = useState("");
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    setIsLoading(true);

    let dataLength = 0;
    let tempData;
    
    if (!conteudoFacil || !conteudoMedio || !conteudoDificil) {
      navigate("/LessonSelected");
      return;
    }

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

    setQuestion(items.pergunta);
    setOption(items.resposta.label);
    setAnswer(items.resposta.status);
    setIsLoading(false);
  }, [setIsLoading, setData, round, setRandomNumber, setQuestion, setOption, setAnswer]);

  const newRound = (number) => {
    setOption("");
    setSelected("");

    const items = JSON.parse(data[randomNumber[number]].conteudo);

    setQuestion(items.pergunta);
    setOption(items.resposta.label);
    setAnswer(items.resposta.status);
  }

  const handleSelect = (event) => {
    const value = event.target.value;
    setSelected(value);
  }

  const handleVerify = (event) => {
    event.preventDefault();

    if (blockButton) return;
    setBlockButton(true);

    let tempRightPoints;

    if (selected === answer) {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 1;
      setStatusColor(newStatus);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 2;
      setStatusColor(newStatus);
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const rule = TrocaAtividade(nivel, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() =>{
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(nivel, 0);
      setTimeout(() => {
        navigate("/GameOver");
        setNewContainer(1);
      }, 1500);
    } else if (rule === "Score") {
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      setTimeout(() => {
        navigate(`/${page}`);
      }, 1500);
    } else {
      setTimeout(() =>{
        if (nivel === 0) {
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        } else {
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

  useEffect(() => {
    selected !== "" ? setBlockButton(false) : setBlockButton(true);
  }, [selected, setBlockButton]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Choose the correct word or phrases." />

      <Main>
        <Form id="myForm" onSubmit={handleVerify}>
          <label>{question[0]}</label>
          <Select value={selected} onChange={handleSelect}>
            {option.map((option, index) => {
              return (
                <option key={index} value={option}>{option}</option>
              )
            })}
          </Select>
          <label>{question[1]}</label>
        </Form>
        <ButtonCheck form="myForm" type="submit" disabled={blockButton}>
          <p>Check</p>
        </ButtonCheck>
      </Main>
    </Container>
  )
}