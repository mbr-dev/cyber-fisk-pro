import { useContext, useState, useEffect, useCallback } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";
import { SubTitleLesson } from "../SubTitleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade } from "../../utils/regras";
import { L3_T1_Medio } from "../../utils/Lesson3_Task1";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Button, Main } from "./styles";

export const Game8 = () => {
  const { setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada } = useContext(LessonContext);

  const [colorAnswers, setColorAnswers] = useState([0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2]);
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(true);
  const [blockButton, setBlockButton] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [changeText, setChangeText] = useState('______');

  const loadLesson = useCallback(() => {
    const totalOfQuestions = L3_T1_Medio.length;

    let tempQuestions = [];
    for (let a = 0; a < totalOfQuestions; a++) {
      tempQuestions.push(a);
    }
    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);
    setQuestion(L3_T1_Medio[tempQuestions[round]].pergunta);

    let tempAnswers = [];
    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    for (let a = 0; a < 3; a ++) {
      tempAnswers.push(L3_T1_Medio[tempQuestions[round]].resposta[tempRandomNumber[a]]);
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
  }, [setRandomNumber, round, setQuestion, setIdClick, setAnswers, setBlockButton]);

  const newRound = (number) => {
    setQuestion(L3_T1_Medio[randomNumber[number]].pergunta);
    
    let tempAnswers = [];
    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    for (let a = 0; a < 3; a++) {
      tempAnswers.push(L3_T1_Medio[randomNumber[number]].resposta[tempRandomNumber[a]])
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
  }

  const verifyAnswer = (index) => {
    if (blockButton) return;

    setBlockButton(true);
    let tempColor = colorAnswers;
    let tempPoint = correctPoints;

    if (idClick[index] === 0) {
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

    let rule = TrocaAtividade(1, tempGeneralRound, tempPoint, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        tempColor[index] = 0;
        setColorAnswers(tempColor);
        setChangeText('______');
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);

      setTimeout(() => {
        tempColor[index] = 0;
        setColorAnswers(tempColor);
        setChangeText('______');
        setNewContainer(1);
      }, 1500);
    } else {
      setTimeout(() => {
        tempColor[index] = 0;
        setColorAnswers(tempColor);
        setChangeText('______');
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
      color: isOver ? defaultTheme["gray-400"] : undefined,
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
      const changeTxt = over ? answers[droppedIndex] : '______';
      setChangeText(changeTxt);
      
      verifyAnswer(droppedIndex);
    }
  }

  useEffect(() => {
    loadLesson();
  }, [])
  
  return (
    <Container>
      <HeaderLesson superTaskEnd numStart="Task 2" numEnd="Super task" />

      <TitleLesson title="Choose the best alternative." />

      <DndContext onDragEnd={handleDragEnd}>
        <Droppable>
          <SubTitleLesson title={question.replace('______', changeText)} />
        </Droppable>

        <Main>
          {answers.map((resposta, index) => {
            return (
              <Draggable index={index} key={index}>
                <Button
                  style={{
                    backgroundColor: colorAnswers[index] === 0 ? "" : colorAnswers[index] === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
                    color: colorAnswers[index] === 1 || colorAnswers[index] === 2 ? "white" : "" 
                  }}
                  disabled={blockButton}
                >
                  {resposta}
                </Button>
              </Draggable>
            )
          })}
        </Main>
      </DndContext>
    </Container>
  )
}