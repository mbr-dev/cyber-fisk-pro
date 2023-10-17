import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { useSortable, arrayMove, SortableContext,   sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { ButtonBg } from "../ButtonBg";
import { SubTitleLessonAudio } from "../subTitleLessonAudio";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { L7_T2_Medio } from "../../utils/lesson7_Task";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { Container, Main } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game26 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, setNewLesson, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, playAudio
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [optionColor, setOptionColor] = useState([]);
  const [idClick, setIdClick] = useState([]);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [data, setData] = useState([]);
  const [round, setRound] = useState(0);
  const [countClick, setCountClick] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [blockAudio, setBlockAudio] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const loadLesson = () => {
    const dataLength = L7_T2_Medio.length;

    let tempRandom = [];
    for (let a = 0; a < dataLength; a++) {
      tempRandom.push(a);
    }
    tempRandom = tempRandom.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandom);

    setOptionColor(Array(L7_T2_Medio[tempRandom[round]].resposta.length).fill(0));

    setSound(L7_T2_Medio[tempRandom[round]].pergunta);
    setRightAnswers(L7_T2_Medio[tempRandom[round]].resposta);

    let tempRandomNumber = [...Array(L7_T2_Medio[tempRandom[round]].resposta.length).keys()];
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    let tempAnswers = [];
    for (let a = 0; a < tempRandomNumber.length; a ++) {
      tempAnswers.push(L7_T2_Medio[tempRandom[round]].resposta[tempRandomNumber[a]]);
    }
    setAnswers(tempAnswers);
    setBlockButton(false);
  }

  const newRound = (number) => {
    setOptionColor(Array(L7_T2_Medio[randomNumber[number]].resposta.length).fill(0));

    setSound(L7_T2_Medio[randomNumber[number]].pergunta);
    setRightAnswers(L7_T2_Medio[randomNumber[number]].resposta);

    let tempRandomNumber = [...Array(L7_T2_Medio[randomNumber[number]].resposta.length).keys()];
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    let tempAnswers = [];
    for (let a = 0; a < tempRandomNumber.length; a ++) {
      tempAnswers.push(L7_T2_Medio[randomNumber[number]].resposta[tempRandomNumber[a]]);
    }
    setAnswers(tempAnswers);
    setBlockButton(false);
  } 

  const handleVerify = () => {
    if (blockButton || playAudio) return;

    setBlockButton(true);

    let tempRightPoints;
    let tempColor = optionColor;

    const isCorrect = answers.every((answer, index) => {
      return answer.label === rightAnswers[index].label;
    });

    if (isCorrect) {
      tempColor = Array(answers.length).fill(1);
      setOptionColor(tempColor);

      tempRightPoints = PointRule(nivel, rightPoints);
      setNewPontos(1, tempRightPoints);
      setRightPoints(tempRightPoints);
    } else {
      tempColor = Array(answers.length).fill(2);
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
    } else if (rule === "Game over"){
      setNewPontos(0,0);
      setTimeout(() =>{
        navigate("/GameOver");
        setNewContainer(1);
      },1500);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    } else {
      setTimeout(() =>{
        if(nivel === 0){
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        }else{
          setNewNivel(2);
          const atividade = conteudoDificil[0].id_tipo;
          setNewAtividade(atividade);
        }
      },1500);
    }
  }

  const SortableItem = ({ id, children }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      isDragging,
      transform,
      transition
    } = useSortable({id: id});

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      backgroundColor: isDragging && defaultTheme["gray-300"],
      border: isDragging && `2px solid ${defaultTheme["gray-400"]}`,
      borderRadius: isDragging && "8px",
    };
    
    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {children}
      </div>
    );
  }

  function handleDragEnd(event) {
    const { active, over } = event;
  
    if (active.id !== over.id) {
      setAnswers((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    playAudio ? setBlockButton(true) : setBlockButton(false);
  }, [playAudio, setBlockButton]);

  useEffect(() => {
    if (countClick === 2) {
      setBlockAudio(true);
    }
  }, [countClick, setBlockAudio])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Listen and put the sentences in order." />
      <SubTitleLessonAudio
        audio={`${URL_FISKPRO}sounds/essentials1/lesson7/${sound}.mp3`}
        countC={countClick}
        setCountC={setCountClick}
        disabledButton={blockAudio}
      />
      
      <Main>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={answers} strategy={verticalListSortingStrategy}>
            {answers.map((answer, index) => {
              return (
              <SortableItem key={index} id={answer}>
                <ButtonAnswer
                   w="14rem"
                   h="3rem"
                   optionColor={optionColor[index]}
                   >
                  <p>{answer.label}</p>
                </ButtonAnswer>
              </SortableItem>
            )})}
          </SortableContext>
        </DndContext>
        <ButtonBg 
          h="2rem"
          w="10rem"
          disabledButton={blockButton}
          onPress={handleVerify}
          title="Check"
        />
      </Main>
    </Container>
  )
}