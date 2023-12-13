import { useNavigate } from "react-router-dom";
import { useContext, useState, useCallback, useEffect } from "react";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { SubTitleLesson } from "../subTitleLesson";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { Container, Main, Image, ButtonArea, ButtonAnswer, DivDesk, DivMobile, Div } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game14 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState([]);
  const [idClick, setIdClick] = useState([]);
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
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
    
    setImage(items.image);
    setQuestion(items.pergunta);
    setSelectedColor(Array(items.resposta.length).fill(0));

    let tempRandomAnswer = [...Array(items.resposta.length).keys()];
    tempRandomAnswer = tempRandomAnswer.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomAnswer);

    let tempAnswers = [];
    for (let a = 0; a < items.resposta.length; a++) {
      tempAnswers.push(items.resposta[tempRandomAnswer[a]]);
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
    setIsLoading(false);
  }, [setIsLoading, setData, setRandomNumber, round, setIdClick, setQuestion, setAnswers, setBlockButton, setImage]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);

    setImage(items.image);
    setQuestion(items.pergunta);
    setSelectedColor(Array(items.resposta.length).fill(0));

    let tempRandomAnswer = [...Array(items.resposta.length).keys()];
    tempRandomAnswer = tempRandomAnswer.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomAnswer);

    let tempAnswers = [];
    for (let a = 0; a < tempRandomAnswer.length; a++) {
      tempAnswers.push(items.resposta[tempRandomAnswer[a]]);
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton) return;

    setBlockButton(true);

    let tempRightPoints;
    let tempSelectedColor = selectedColor;
    const selectedAnswer = answers[index];

    if (selectedAnswer.status === 1) {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 1;
      setStatusColor(newStatus);

      tempSelectedColor[index] = 1;
      setSelectedColor(tempSelectedColor);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 2;
      setStatusColor(newStatus);

      tempSelectedColor[index] = 1;
      setSelectedColor(tempSelectedColor);

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

    if(rule === "Continua") {
      setTimeout(() =>{
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

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Choose the correct alternative." /> 

      <Main>
        <DivDesk>
          <SubTitleLesson title={question} />
        </DivDesk>

        <Div>
          <Image>
            <img src={`${URL_FISKPRO}images/essentials1/lesson${numSelLesson}/${image}.png`} alt="" />
          </Image>

          <DivMobile>
            <SubTitleLesson title={question} />
          </DivMobile>

          <ButtonArea>
            {answers.map((answer, index) => {
              return (
                <ButtonAnswer
                  key={index}
                  onClick={() => handleClick(index)}
                  disabled={blockButton}
                  style={{
                    borderColor: selectedColor[index] ? defaultTheme["red-200"] : ""
                  }}
                >
                  <p>{answer.label}</p>
                </ButtonAnswer>
              )
            })}
          </ButtonArea>
        </Div>
      </Main>
    </Container>
  )
}