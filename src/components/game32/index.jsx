import { useContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";
import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Answers, AnswersRow, RadioG, Radio, Options, Form } from "./styles";

export const Game32 = () => {
  const {
    setNewContainer, setNewPontos, rodadaGeral, setNewRodada, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, playAudio
  } = useContext(LessonContext);
  
  const navigate = useNavigate();

  const [optionColor, setOptionColor] = useState([]);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState([]);
  const [data, setData] = useState([]);

  const loadLesson = useCallback(() => {
    setIsLoading(true);

    let dataLength = 0;
    let tempData;
    if(nivel === 0){
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
    setOptionColor(Array(items.resposta.length).fill(0));

    setSound(items.pergunta);

    let tempAnswers = [];
    for (let a = 0; a < items.resposta.length; a++) {
      tempAnswers.push(items.resposta[a].label);
    }
    setAnswers(tempAnswers);

    let tempRightA = [];
    for (let a = 0; a < items.resposta.length; a++) {
      tempRightA.push(items.resposta[a].status);
    }
    setRightAnswers(tempRightA);
    setIsLoading(false);
  }, [setIsLoading, setData, setRandomNumber, setSound, setAnswers, round, setRightAnswers, setOptionColor])

  const newRound = (number) => {
    setSelectedRadio([]);

    const items = JSON.parse(data[randomNumber[number]].conteudo);
    setOptionColor(Array(items.resposta.length).fill(0));

    setSound(items.pergunta);

    let tempAnswers = [];
    for (let a = 0; a < items.resposta.length; a++) {
      tempAnswers.push(items.resposta[a].label);
    }
    setAnswers(tempAnswers);

    let tempRightA = [];
    for (let a = 0; a < items.resposta.length; a++) {
      tempRightA.push(items.resposta[a].status);
    }
    setRightAnswers(tempRightA);
  }

  const handleRadioChange = (value, index) => {
    const tempSelectedRadio = [...selectedRadio];
    tempSelectedRadio[index] = value;
    setSelectedRadio(tempSelectedRadio);

    if (tempSelectedRadio.length >= 4) {
      setBlockButton(false);
    }
  };

  const handleVerify = (event) => {
    event.preventDefault();
    if (blockButton || playAudio) return;

    setBlockButton(true);

    let tempAnswers = selectedRadio;
    let tempColor = optionColor;
    let tempRightPoints;

    const isCorrect = tempAnswers.every((value, index) => value === rightAnswers[index]);

    if (isCorrect) {
      for (let a = 0; a < tempAnswers.length; a++) {
        tempColor[a] = 1;
      }
      setOptionColor(tempColor);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      for (let a = 0; a < tempAnswers.length; a++) {
        tempColor[a] = tempAnswers[a] === rightAnswers[a] ? 1 : 2;
      }
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
      setTimeout(() =>{
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0,0);
      setTimeout(() =>{
        navigate("/GameOver");
        setNewContainer(1);
      },1500);
    } else if (rule === "Score") {
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
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
    playAudio && setBlockButton(true);
  }, [playAudio, setBlockButton]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Read and choose TRUE or FALSE." />
      <SubTitleLessonAudio audio={`${URL_FISKPRO}sounds/essentials1/lesson8/${sound}.mp3`} />

      <Main>
        <Answers>
          <Options>
            <p>TRUE</p>
            <p>FALSE</p>
          </Options>

          <Form id="myForm" onSubmit={handleVerify}>
            {answers.map((answer, index) => {
              return (
                <AnswersRow key={index}>
                  <p style={{borderColor: optionColor[index] === 1 ? defaultTheme["green-200"] : optionColor[index] === 2 ? defaultTheme["red-200"] : ""}}>
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