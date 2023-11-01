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
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { Container, Main } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game26 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, playAudio, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [idClick, setIdClick] = useState([]);
  const [data, setData] = useState([]);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
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

  const loadLesson = useCallback(() => {
    setIsLoading(true);

    let dataLength = 0;
    let tempData;
    if (nivel === 0) {
      setData(conteudoFacil);
      tempData = conteudoFacil;
      dataLength = conteudoFacil.length;
    } else if(nivel === 1) {
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

    setSound(items.pergunta);
    setRightAnswers(items.resposta);

    let tempRandomNumber = [...Array(items.resposta.length).keys()];
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    let tempAnswers = [];
    for (let a = 0; a < items.resposta.length; a ++) {
      tempAnswers.push(items.resposta[tempRandomNumber[a]]);
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
    setIsLoading(false);
  }, [setIsLoading, setRandomNumber, round, setData, setSound, setRightAnswers, setIdClick, setAnswers, setBlockButton])

  const newRound = (number) => {
    setCountClick(0);

    const items = JSON.parse(data[randomNumber[number]].conteudo);

    setSound(items.pergunta);
    setRightAnswers(items.resposta);

    let tempRandomNumber = [...Array(items.resposta.length).keys()];
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    let tempAnswers = [];
    for (let a = 0; a < tempRandomNumber.length; a ++) {
      tempAnswers.push(items.resposta[tempRandomNumber[a]]);
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
    setBlockAudio(false);
  } 

  const handleVerify = () => {
    if (blockButton || playAudio) return;

    setBlockButton(true);

    let tempRightPoints;

    const isCorrect = answers.every((answer, index) => {
      return answer.status === rightAnswers[index].status;
    });

    if (isCorrect) {
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

  const SortableItem = ({ id, children }) => {
    const {
      attributes, listeners, setNodeRef, isDragging, transform, transition
    } = useSortable({id: id});

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      backgroundColor: isDragging && defaultTheme["gray-300"],
      border: isDragging && `2px solid ${defaultTheme["gray-400"]}`,
      borderRadius: isDragging && "8px",
      touchAction: "none"
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
  }, [countClick, setBlockAudio]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Listen and put the sentences in order." />
      <SubTitleLessonAudio
        audio={`${URL_FISKPRO}sounds/essentials1/lesson${numSelLesson}/${sound}.mp3`}
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
                <ButtonAnswer w="14rem" h="3rem">
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