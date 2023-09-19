import { useContext, useState, useEffect } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";
import { SubTitleLesson } from "../SubTitleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade } from "../../utils/regras";
import { L3_T2_Medio } from "../../utils/Lesson3_Task1";

import { defaultTheme } from "../../themes/defaultTheme";
import { Game8Container, Button, Game8Main } from "./styles";

export const Game8 = () => {
  const { setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada } = useContext(LessonContext);

  const [optionColor, setOptionColor] = useState([0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2]);
  const [rodada, setRodada] = useState(0);
  const [pergunta, setPergunta] = useState('');
  const [sortNum, setSortNum] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [bloqueia, setBloqueia] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [textoTroca, setTextoTroca] = useState('______');

  const loadLesson = () => {
    const tam = L3_T2_Medio.length;
    let tempQuestions = [];

    for (let a = 0; a < tam; a++) {
      tempQuestions.push(a);
    }

    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);

    setSortNum(tempQuestions);
    setPergunta(L3_T2_Medio[tempQuestions[rodada]].pergunta);

    let tempRandomAnswers = [];
    let tempDrawNumber = idClick;

    tempDrawNumber = tempDrawNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempDrawNumber);

    for (let a = 0; a < 3; a ++) {
      tempRandomAnswers.push(L3_T2_Medio[tempQuestions[rodada]].resposta[tempDrawNumber[a]]);
    }

    setRespostas(tempRandomAnswers);
    setBloqueia(false);
  }

  const newRound = (number) => {
    setPergunta(L3_T2_Medio[sortNum[number]].pergunta);
    let tempAnswers = [];
    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    for (let a = 0; a < 3; a++) {
      tempAnswers.push(L3_T2_Medio[sortNum[number]].resposta[tempRandomNumber[a]])
    }

    setRespostas(tempAnswers);
    setBloqueia(false);
  }

  const verifyAnswer = (index) => {
    if (bloqueia) {
      return;
    }

    setBloqueia(true);
    let tempA = acertos;
    let arr = optionColor

    if (idClick[index] === 0) {
      tempA += 2;
      setNewPontos(1, tempA);
      setAcertos(tempA);
      arr[index] = 1;
      setOptionColor(arr);
    } else {
      arr[index] = 2;
      setOptionColor(arr);
      let tempE = erros;
      tempE++;
      setErros(tempE);
    }

    let tempRound = rodada;
    tempRound++;
    setRodada(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const rule = TrocaAtividade(1, tempGeneralRound, tempA, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        arr[index] = 0;
        setOptionColor(arr);
        setTextoTroca('______');
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);

      setTimeout(() => {
        arr[index] = 0;
        setOptionColor(arr);
        setTextoTroca('______');
        setNewContainer(1);
      }, 1500);
    } else {
      setTimeout(() => {
        arr[index] = 0;
        setOptionColor(arr);
        setTextoTroca('______');
        alert("Indo para faze Dificil");
        setNewLesson(2);
      }, 1500);
    }
  }

  const Draggable = ({ index, children }) => {
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
      id: `draggable-${index}`,
    });

    const style = transform ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      border: isDragging ? `1px solid ${defaultTheme['gray-400']}` : '',
    } : undefined;
  
    
    return (
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {children}
      </div>
    );
  }
  
  const Droppable = (props) => {
    const {isOver, setNodeRef} = useDroppable({
      id: 'droppable',
    });

    const style = {
      color: isOver ? defaultTheme['blue-100'] : undefined,
      border: isOver ? `1px solid ${defaultTheme['gray-200']}` : '1px solid transparent',
    };
    
    return (
      <div ref={setNodeRef} style={style}>
        {props.children}
      </div>
    );
  }

  const handleDragEnd = (event) => {
    const { over, active } = event;

    if (over && over.id === 'droppable') {
      const droppedIndex = Number(active.id.split('-')[1]);
      const changeText = over ? respostas[droppedIndex] : '______';
      setTextoTroca(changeText);
      verifyAnswer(droppedIndex);
    }
  }

  useEffect(() => {
    loadLesson();
  }, [])
  
  return (
    <Game8Container>
      <HeaderLesson superTaskEnd numStart="Task 2" numEnd="Super task" />

      <TitleLesson title="Choose the best alternative." />

      <DndContext onDragEnd={handleDragEnd}>
        <Droppable>
          <SubTitleLesson 
            title={
              pergunta.replace('______', textoTroca)
            } 
          />
        </Droppable>

        <Game8Main>
          {respostas.map((resposta, index) => {
            return (
              <Draggable index={index} key={index}>
                <Button
                  style={{
                    borderColor: optionColor[index] === 0 ? "transparent" : optionColor[index] === 1 ? defaultTheme["green-100"] : defaultTheme["red-200"],
                  }}
                >
                  {resposta}
                </Button>
              </Draggable>
            )
          })}
        </Game8Main>
      </DndContext>
    </Game8Container>
  )
}