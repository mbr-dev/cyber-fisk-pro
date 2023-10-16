import { useState, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../titleLesson";
import { SubTitleLessonAudio } from "../subTitleLessonAudio";
import { ButtonAnswer } from "../ButtonAnswer";

import { URL_FISKPRO } from "../../config/infos";
import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";
import { L3_T2_Medio } from "../../utils/Lesson3_Task";

import { Container, Main } from "./styles";

export const Game9 = () => {
  const { setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio,
    nivel, conteudoFacil, conteudoMedio, conteudoDificil,
    pontosD, pontosF, pontosM, setNewAtividade, setNewNivel,
    numSelLesson, numTask } = useContext(LessonContext);
  
  const navigate = useNavigate();

  const [colorAnswers, setColorAnswers] = useState([0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2]);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(7);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadLesson = useCallback(() => {
    
    let totalOfSounds = 0;
    let tempData;
    if(nivel === 0){
      setData(conteudoFacil);
      tempData = conteudoFacil;
      totalOfSounds = conteudoFacil.length;
    }else if(nivel === 1){
      setData(conteudoMedio);
      tempData = conteudoMedio;
      totalOfSounds = conteudoMedio.length;
    }else{
      setData(conteudoDificil);
      tempData = conteudoDificil;
      totalOfSounds = conteudoDificil.length;
    }
    
    let tempSounds = [];
    for (let a = 0; a < totalOfSounds; a++) {
      tempSounds.push(a);
    }
    let items = JSON.parse(tempData[tempSounds[round]].conteudo);
    tempSounds = tempSounds.sort(() => Math.random() - 0.5);
    setRandomNumber(tempSounds);
    setSound(items[tempSounds[round]].pergunta);
    
    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a++) {
      tempAnswers.push(items[tempSounds[round]].resposta[a]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);
    setBlockButton(false);
  }, [setRandomNumber, setSound, setIdClick, round, setAnswers, setBlockButton]);

  const newRound = (number) => {
    setSound(data[randomNumber[number]].pergunta);

    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a++) {
      tempAnswers.push(data[randomNumber[number]].resposta[a]);
    }
    setAnswers(tempAnswers);
    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton || playAudio) return;

    setBlockButton(true);

    let tempPoint = correctPoints;
    let tempColor = colorAnswers;
    let answerSelected = answers[index].status;

    if (answerSelected === 1) {
      tempPoint += 2;
      setCorrectPoints(tempPoint);
      setNewPontos(1, tempPoint);

      tempColor[index] = 1;
      setColorAnswers(tempColor);
    } else {
      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);

      tempColor[index] = 2;
      setColorAnswers(tempColor);
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const rule = TrocaAtividade(1, tempGeneralRound, tempPoint, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        setColorAnswers([0, 0, 0]);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);
      navigate('/GameOver');
      setTimeout(() => {
        setColorAnswers([0, 0, 0]);
        setNewContainer(1);
      }, 1500);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    }else {
      setTimeout(() => {
        setColorAnswers([0, 0, 0]);
        //setNewLesson(2);
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
  } , []);

  useEffect(() => {
    playAudio ? setBlockButton(true) : setBlockButton(false);
  }, [playAudio, setBlockButton])

  return (
    <Container>
      {/* <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd /> */}
      <TitleLesson title="Mark all the correct answer for each question you hear." />
      <SubTitleLessonAudio size={40} audio={`${URL_FISKPRO}sounds/essentials1/lesson3/${sound}.mp3`} />

      <Main>
        {answers.map((answer, index) => {
          return (
            <ButtonAnswer 
              key={index}
              w="14rem"
              h="3rem"
              onPress={() => handleClick(index)}
              optionColor={colorAnswers[index]}
              disabledButton={blockButton}
            >
              <p>{answer.label}</p>
            </ButtonAnswer>
          )
        })}
      </Main>
    </Container>
  )
}