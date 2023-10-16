import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { SubTitleLesson } from "../subTitleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, ScoreFinal, Score } from "../../utils/regras";
import { URL_FISKPRO } from "../../config/infos";

import { Container, Main } from "./styles";

export const Game1 = () => {
  const { setNewContainer, setNewPontos, rodadaGeral, setNewRodada,
    nivel, conteudoFacil, conteudoMedio, conteudoDificil,
    pontosD, pontosF, pontosM, setNewAtividade, setNewNivel,
    numSelLesson, numTask } = useContext(LessonContext);
  
  const navigate = useNavigate();
  
  const [optionColor, setOptionColor] = useState([0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2]);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);

      let dataLength = 0;
      let tempData;
      if(nivel === 0){
        setData(conteudoFacil);
        tempData = conteudoFacil;
        dataLength = conteudoFacil.length;
      }else if(nivel === 1){
        setData(conteudoMedio);
        tempData = conteudoMedio;
        dataLength = conteudoMedio.length;
      }else{
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
      //let items = JSON.parse(res.dados[0].dados_conteudo[tempRandom[round]].conteudo);
      let items = JSON.parse(tempData[tempRandom[round]].conteudo);
      setQuestion(items.pergunta);
      
      let tempIdClick = idClick;
      tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
      setIdClick(tempIdClick);
      
      let tempImages = [];
      for (let a = 0; a < idClick.length; a++) {
        tempImages.push(items.images[tempIdClick[a]]);
      }
      tempImages = tempImages.sort(() => Math.random() - 0.5);
      setAnswers(tempImages);
      setBlockButton(false);
      setIsLoading(false);
    } catch(error) {
      console.log('error==> ', error);
    }
  }, [setIsLoading, setData, round, setAnswers, setBlockButton, setIdClick, idClick, setQuestion, setRandomNumber]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);
    setQuestion(items.pergunta);

    let tempIdClick = idClick;
    tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
    setIdClick(tempIdClick);
    
    let tempImages = [];
    for (let a = 0; a < idClick.length; a++) {
      tempImages.push(items.images[tempIdClick[a]]);
    }
    tempImages = tempImages.sort(() => Math.random() - 0.5);
    setAnswers(tempImages);
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
      setNewPontos(0, (tempRightPoints));
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
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(nivel, 0);
      setTimeout(() => {
        navigate('/GameOver');
        setOptionColor([0, 0, 0]);
        setNewContainer(1);
      }, 1500);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    }else {
      setTimeout(() => {
        setOptionColor([0, 0, 0]);
        if(nivel === 0){
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        }else{
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

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Choose the correct alternative" />
      <SubTitleLesson title={question} />

      <Main>
        {answers.map((answer, index) => {
          return (
            <ButtonAnswer 
              key={index}
              w="6rem"
              h="7rem"
              onPress={() => handleClick(index)}
              optionColor={optionColor[index]}
              disabledButton={blockButton}
            >
              <img src={`${URL_FISKPRO}/images/essentials1/lesson1/${answer.img}.png`} alt="" />
            </ButtonAnswer>
          )
        })}
      </Main>
    </Container>
  )
}