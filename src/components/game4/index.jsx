import { useState, useContext, useEffect, useCallback } from "react";

import { Loading } from "../Loading";
import { TitleLesson } from "../TitleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import { api } from "../../lib/api";
import { URL_FISKPRO } from "../../config/infos";
import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";
import { L1_T2_Facil } from "../../utils/lesson1_Task";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Button } from "./styles";

export const Game4 = () => {
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio} = useContext(LessonContext);

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
      
      const response  = await api.get("/L1_T2_Facil");
      setData(response.data);
      
      const dataLength = data.length;

      let tempRandom = [];
      for (let a = 0; a < dataLength; a++) {
        tempRandom.push(a);
      }
      tempRandom = tempRandom.sort(() => Math.random() - 0.5);
      setRandomNumber(tempRandom);

      setSounds(data[tempRandom[round]].pergunta);
      setType(data[tempRandom[round]].tipo);

      let tempSortNum = data[tempRandom[round]].tipo === 3 ? idTipo3 : idTipo4;
      tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
      if(data[tempRandom[round]].tipo === 3){
        setIdTipo3(tempSortNum);
      } else {
        setIdTipo4(tempSortNum);
      }
      
      let tempAnswers = [];
      for (let a = 0; a < tempSortNum.length; a ++) {
        tempAnswers.push(data[tempRandom[round]].resposta[tempSortNum[a]]);
      }
      setAnswers(tempAnswers);
      setBlockButton(false);
      setIsLoading(false)
    } catch(error) {
      console.log(error);
    }
  }, [setIsLoading, setData, data, setRandomNumber, setSounds, setType, setIdTipo3, setIdTipo4, setAnswers, setBlockButton]);

  const newRound = (number) => {
    setSounds(data[randomNumber[number]].pergunta);
    setType(data[randomNumber[number]].tipo);
    
    let tempSortNum = data[randomNumber[number]].tipo === 3 ? idTipo3 : idTipo4;
    tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
    if (data[randomNumber[number]].tipo === 3) {
      setIdTipo3(tempSortNum);
    } else {
      setIdTipo4(tempSortNum);
    }
    
    let tempAnswers = [];
    for (let a = 0; a < tempSortNum.length; a ++) {
      tempAnswers.push(data[randomNumber[number]].resposta[tempSortNum[a]]);
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

    const answer = answers[index].status;

    if(answer === 1) {
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
      }, 1000);
    } else if (rule === "Game over"){
      setNewPontos(0,0);
      setTimeout(() =>{
        setIdClick([0, 0, 0, 0, 0, 0]);
        alert('GAME OVER!!');
        setNewContainer(1);
      },1000);
    } else {
      setTimeout(() =>{
        setIdClick([0, 0, 0, 0, 0, 0]);
        alert('troca nivel');
        setNewLesson(5);
      },1000);
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
      <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd />
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