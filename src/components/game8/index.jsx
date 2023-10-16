import { useContext, useState, useEffect, useCallback } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useNavigate } from "react-router-dom";

import { TitleLesson } from "../titleLesson";
import { SubTitleLesson } from "../subTitleLesson";
import { ButtonAnswer } from "../ButtonAnswer";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main } from "./styles";

export const Game8 = () => {
  const { setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada,
    nivel, conteudoFacil, conteudoMedio, conteudoDificil,
    pontosD, pontosF, pontosM, setNewAtividade, setNewNivel,
    numSelLesson, numTask } = useContext(LessonContext);

  const navigate = useNavigate();
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
  const [changeText, setChangeText] = useState("______");
  const [data, setData] = useState([]);

  const loadLesson = useCallback(() => {
    let totalOfQuestions = 0;
    let tempData;
    if(nivel === 0){
      setData(conteudoFacil);
      tempData = conteudoFacil;
      totalOfQuestions = conteudoFacil.length;
    }else if(nivel === 1){
      setData(conteudoMedio);
      tempData = conteudoMedio;
      totalOfQuestions = conteudoMedio.length;
    }else{
      setData(conteudoDificil);
      tempData = conteudoDificil;
      totalOfQuestions = conteudoDificil.length;
    }
    let items = JSON.parse(tempData[tempRandom[round]].conteudo);
    let tempQuestions = [];
    for (let a = 0; a < totalOfQuestions; a++) {
      tempQuestions.push(a);
    }
    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);
    setQuestion(items[tempQuestions[round]].pergunta);

    let tempAnswers = [];
    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    for (let a = 0; a < 3; a ++) {
      tempAnswers.push(items[tempQuestions[round]].resposta[tempRandomNumber[a]]);
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
  }, [setRandomNumber, round, setQuestion, setIdClick, setAnswers, setBlockButton]);

  const newRound = (number) => {
    setQuestion(data[randomNumber[number]].pergunta);
    
    let tempAnswers = [];
    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    for (let a = 0; a < 3; a++) {
      tempAnswers.push(data[randomNumber[number]].resposta[tempRandomNumber[a]])
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
  }

  const verifyAnswer = (index) => {
    if (blockButton) return;

    setBlockButton(true);
    let tempColor = colorAnswers;
    let tempPoint = correctPoints;
    const rightAnswer = answers[index].status;
    console.log("rightAnswer: ", rightAnswer)

    if (rightAnswer === 1) {
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
        tempColor[index] = 0;
        setColorAnswers(tempColor);
        setChangeText("______");
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);

      setTimeout(() => {
        tempColor[index] = 0;
        setColorAnswers(tempColor);
        setChangeText("______");
        setNewContainer(1);
        navigate('/GameOver');
      }, 1500);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    }else {
      setTimeout(() => {
        tempColor[index] = 0;
        setColorAnswers(tempColor);
        setChangeText("______");
        if(nivel === 0){
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        }else{
          setNewNivel(2);
          const atividade = conteudoDificil[0].id_tipo;
          setNewAtividade(atividade);
        }
        //setNewLesson(2);
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

    if (over && over.id === "droppable") {
      const droppedIndex = Number(active.id.split("-")[1]);
      const changeTxt = over ? answers[droppedIndex].label : "______";
      setChangeText(changeTxt);
      
      verifyAnswer(droppedIndex);
    }
  }

  useEffect(() => {
    loadLesson();
  }, [])
  
  return (
    <Container>
      <TitleLesson title="Choose the best alternative." />

      <DndContext onDragEnd={handleDragEnd}>
        <Droppable>
          <SubTitleLesson title={question.replace("______", changeText)} />
        </Droppable>

        <Main>
          {answers.map((answers, index) => {
            return (
              <Draggable index={index} key={index}>
                <ButtonAnswer
                  w="10rem"
                  h="3.5rem"
                  optionColor={colorAnswers[index]}
                  disabledButton={blockButton}
                >
                  {answers.label}
                </ButtonAnswer>
              </Draggable>
            )
          })}
        </Main>
      </DndContext>
    </Container>
  )
}