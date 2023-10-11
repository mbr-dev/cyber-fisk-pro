import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../TitleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import { URL_FISKPRO } from "../../config/infos";
import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Button } from "./styles";

export const Game4 = () => {
  const { setNewContainer, setNewPontos, rodadaGeral, setNewRodada, playAudio,
    nivel, conteudoFacil, conteudoMedio, conteudoDificil,
    pontosD, pontosF, pontosM, setNewAtividade, setNewNivel,
    numSelLesson, numTask } = useContext(LessonContext);
  
  const navigate = useNavigate();

  const [idTipo3, setIdTipo3] = useState([0, 1, 2, 3, 4, 5]);
  const [idTipo4, setIdTipo4] = useState([0, 1, 2, 3, 4]);
  const [idClick, setIdClick] = useState([0, 0, 0, 0, 0, 0]);
  const [data, setData] = useState([]);
  const [sounds, setSounds] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [type, setType] = useState(null);
  const [countClick, setCountClick] = useState(0);
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

      let items = JSON.parse(tempData[tempRandom[round]].conteudo);
      setSounds(items.pergunta);
      setType(items.tipo);
      
      let tempSortNum = items.tipo === 3 ? idTipo3 : idTipo4;
      tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
      if(items.tipo === 3){
        setIdTipo3(tempSortNum);
      } else {
        setIdTipo4(tempSortNum);
      }
      
      let tempAnswers = [];
      for (let a = 0; a < tempSortNum.length; a ++) {
        tempAnswers.push(items.resposta[tempSortNum[a]]);
      }
      setAnswers(tempAnswers);
      setBlockButton(false);
      setIsLoading(false)
    } catch(error) {
      console.log(error);
    }
  }, [setIsLoading, setData, data, setRandomNumber, setSounds, setType, setIdTipo3, setIdTipo4, setAnswers, setBlockButton]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);
    setSounds(items.pergunta);
    setType(items.tipo);
    
    let tempSortNum = items.tipo === 3 ? idTipo3 : idTipo4;
    tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
    if (items.tipo === 3) {
      setIdTipo3(tempSortNum);
    } else {
      setIdTipo4(tempSortNum);
    }
    
    let tempAnswers = [];
    for (let a = 0; a < tempSortNum.length; a ++) {
      tempAnswers.push(items.resposta[tempSortNum[a]]);
    }
    setAnswers(tempAnswers);
    setBlockButton(false);
  }

  const handleClick = (index) => {
    if(blockButton) return;
    if(playAudio) return;

    setBlockButton(false);

    let clicks = countClick;
    clicks++;
    setCountClick(clicks);

    let arr = idClick;
    
    let tempRightPoints = rightPoints;
    let tempRound = round;
    let tempGeneralRound = rodadaGeral;

    const answer = answers[index];

    if(answer.status === 1) {
      if (clicks < 3) {
        arr[index] = 1;
        setIdClick(arr);
        return;
      }
      
      tempRightPoints++;
      setRightPoints(tempRightPoints);
      setNewPontos(0, tempRightPoints);

      tempRound++;
      setRound(tempRound);
      tempGeneralRound++;
      setNewRodada(tempGeneralRound);
    } else {
      arr[index] = 2;
      setIdClick(arr);

      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);

      tempRound++;
      setRound(tempRound);
      tempGeneralRound++;
      setNewRodada(tempGeneralRound);
    }

    setBlockButton(true);
    clicks = 0;
    setCountClick(clicks);

    const rule = TrocaAtividade(0, tempGeneralRound, tempRightPoints, tempRound);

    if(rule === "Continua"){
      setTimeout(() =>{
        setIdClick([0, 0, 0, 0, 0, 0]);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over"){
      setNewPontos(0,0);
      setTimeout(() =>{
        setIdClick([0, 0, 0, 0, 0, 0]);
        navigate('/GameOver');
        setNewContainer(1);
      },1500);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    }else {
      setTimeout(() =>{
        setIdClick([0, 0, 0, 0, 0, 0]);
        if(nivel === 0){
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        }else{
          setNewNivel(2);
          const atividade = conteudoDificil[0].id_tipo;
          setNewAtividade(atividade);
        }
        //setNewLesson(5);
      },1500);
    }
  }

  useEffect(() => { 
    loadLesson();
  }, []);

  useEffect(() => {
    playAudio ? setBlockButton(true) : setBlockButton(false);
  }, [playAudio, setBlockButton]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return(
    <Container>
      {/* <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd /> */}
      <TitleLesson title="Choose the correct alternative"/>
      <SubTitleLessonAudio audio={`${URL_FISKPRO}sounds/essentials1/lesson1/${sounds}.mp3`}/>

      <Main>
        {answers.map((answer, index) => {
          return (
            <Button key={index}
              onClick={() => {handleClick(index)}} 
              style={{
                width: type === 3 ? "4.5rem" : "8.5rem",
                height: type === 3 ? "4.5rem" : "3rem",
                opacity: blockButton ? "0.5" : "1",
                borderColor: idClick[index] === 1 ? defaultTheme["green-200"] : idClick[index] === 2 ? defaultTheme["red-200"] : "",
              }}
              disabled={blockButton}
            >
              <p
                style={{
                  fontSize: type === 3 ? "2rem" : ""
                }}
              >{answer.label}</p>
            </Button>
          )
        })}
      </Main>
    </Container>
  )
}