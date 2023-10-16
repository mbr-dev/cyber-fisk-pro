import { useContext, useState, useEffect, useCallback } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useNavigate } from "react-router-dom";

import { TitleLesson } from "../titleLesson";
import { SubTitleLesson } from "../subTitleLesson";
import { Loading } from "../Loading";
import { ButtonAnswer } from "../ButtonAnswer";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main } from "./styles";

export const Game8 = () => {
  const {
    setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [colorAnswers, setColorAnswers] = useState([0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2]);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(true);
  const [blockButton, setBlockButton] = useState(true);
  const [changeText, setChangeText] = useState("______");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

    setQuestion(items.pergunta);

    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    let tempAnswers = [];
    for (let a = 0; a < 3; a ++) {
      tempAnswers.push(items.resposta[tempRandomNumber[a]]);
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
    setIsLoading(false);
  }, [setIsLoading, setRandomNumber, round, setQuestion, setIdClick, setAnswers, setBlockButton, setData]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);
    setQuestion(items.pergunta);
    
    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    let tempAnswers = [];
    for (let a = 0; a < 3; a++) {
      tempAnswers.push(items.resposta[tempRandomNumber[a]])
    }
    setAnswers(tempAnswers);
    setBlockButton(false);
  }

  const verifyAnswer = (index) => {
    if (blockButton) return;

    setBlockButton(true);
    let tempColor = colorAnswers;
    let tempPoint;
    const rightAnswer = answers[index];

    if (rightAnswer.status === 1) {
      tempPoint = PointRule(nivel, correctPoints);
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

    const rule = TrocaAtividade(nivel, tempGeneralRound, tempPoint, tempRound);

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
        navigate("/GameOver");
      }, 1500);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    } else {
      setTimeout(() => {
        tempColor[index] = 0;
        setColorAnswers(tempColor);
        setChangeText("______");
        if (nivel === 0) {
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        } else {
          setNewNivel(2);
          const atividade = conteudoDificil[0].id_tipo;
          setNewAtividade(atividade);
        }
      }, 1500);
    }
  }

  const Draggable = ({ index, children }) => {
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
      id: `draggable-${index}`,
    });

    const style = transform ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      border: isDragging ? `1px solid ${defaultTheme['gray-400']}` : "",
    } : undefined;
  
    
    return (
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {children}
      </div>
    );
  }
  
  const Droppable = (props) => {
    const {isOver, setNodeRef} = useDroppable({
      id: "droppable",
    });

    const style = {
      color: isOver ? defaultTheme["gray-400"] : undefined,
      border: isOver ? `1px solid ${defaultTheme["gray-200"]}` : "1px solid transparent",
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
  }, []);

  if (isLoading) {
    return (
      <Loading />
    )
  }
  
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