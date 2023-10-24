import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { L10_T2_Facil } from "../../utils/lesson10_Task";
import { TrocaAtividade, PointRule, Score, ScoreFinal } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Form, Select } from "./styles";

export const Game37 = () => {
  const {
    setNewContainer, setNewPontos, rodadaGeral, setNewRodada, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);
  
  const navigate = useNavigate();

  const [optionColor, setOptionColor] = useState(0);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState("");
  const [option, setOption] = useState([]);
  const [labelQ, setLabelQ] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [selected, setSelected] = useState("");
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    setIsLoading(true);
    let dataLength = L10_T2_Facil.length;
   /*  let dataLength = 0;
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
    } */

    let tempRandom = [];
    for (let a = 0; a < dataLength; a++) {
      tempRandom.push(a);
    }
    //tempRandom = tempRandom.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandom);

    //const items = JSON.parse(tempData[tempRandom[round]].conteudo);
    const items = L10_T2_Facil[tempRandom[round]];

    setQuestion(items.pergunta);
    setLabelQ(items.label);
    setAnswers(items.resposta.status);
    setOption(items.resposta.label);
    setIsLoading(false);
  }, [setIsLoading, setRandomNumber, setOption, setData, round, setAnswers, setLabelQ, setBlockButton]);

  const newRound = (number) => {
    setOptionColor(0);
    //const items = JSON.parse(data[randomNumber[number]].conteudo);
    const items = L10_T2_Facil[randomNumber[number]];

    setQuestion(items.pergunta);
    setLabelQ(items.label);
    setAnswers(items.resposta.status);
    setOption(items.resposta.label);
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
    let tempColor = optionColor;

    if (selected === answers) {
      tempColor = 1;
      setOptionColor(tempColor);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      tempColor = 2;
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

    const rule = TrocaAtividade(nivel, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);
      setTimeout(() => {
        navigate("/GameOver");
        setNewContainer(1);
      }, 1500);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    } else {
      setTimeout(() => {
        if (nivel === 0) {
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        } else {
          setOptionColor(0);
          setNewNivel(2);
          const atividade = conteudoDificil[0].id_tipo;
          setNewAtividade(atividade);
        }
      }, 1500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    selected !== "" && setBlockButton(false);
  }, [setBlockButton, selected]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Complete." />
      
      <Main>
        <p>{question}</p>
        <Form 
          id="myForm"
          onSubmit={handleVerify}
          style={{
            backgroundColor: optionColor === 1 ? defaultTheme["green-200"] : optionColor === 2 ? defaultTheme["red-200"] : ""
          }}
        >
          <label style={{
            color: optionColor === 1 || optionColor === 2 ? defaultTheme.white : ""
          }}
          >{labelQ[0]}</label>
          <Select value={selected} onChange={handleSelect}>
            {option.map((option, index) => {
              return (
                <option key={index} value={option}>{option}</option>
              )
            })}
          </Select>
          <label style={{
            color: optionColor === 1 || optionColor === 2 ? defaultTheme.white : ""
          }}
          >{labelQ[1]}</label>
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