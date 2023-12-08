import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useCallback } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, ButtonAnswer, Title } from "./styles";

export const Game8 = () => {
  const {
    setNewContainer, setNewPontos, rodadaGeral, setNewRodada, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [idClick, setIdClick] = useState([]);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(true);
  const [blockButton, setBlockButton] = useState(true);
  const [changeText, setChangeText] = useState("______");
  const [data, setData] = useState([]);
  const [buttonVisibility, setButtonVisibility] = useState([0, 0, 0]);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    setIsLoading(true);

    let dataLength = 0;
    let tempData;

    if (!conteudoFacil || !conteudoMedio || !conteudoDificil) {
      navigate("/LessonSelected");
      return;
    }

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
  }, [setIsLoading, setRandomNumber, round, setQuestion, setIdClick, setAnswers, setBlockButton, setData]);

  const newRound = (number) => {
    setChangeText("______");
    setButtonVisibility([0, 0, 0]);

    const items = JSON.parse(data[randomNumber[number]].conteudo);

    setQuestion(items.pergunta);

    let tempRandomNumber = [...Array(items.resposta.length).keys()];
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    let tempAnswers = [];
    for (let a = 0; a < tempRandomNumber.length; a++) {
      tempAnswers.push(items.resposta[tempRandomNumber[a]])
    }
    setAnswers(tempAnswers);

    setBlockButton(false);
  }

  const verifyAnswer = (index) => {
    if (blockButton) return;

    setBlockButton(true);
    let tempPoint;
    const rightAnswer = answers[index];

    if (rightAnswer.status === 1) {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 1;
      setStatusColor(newStatus);

      tempPoint = PointRule(nivel, correctPoints);
      setCorrectPoints(tempPoint);
      setNewPontos(nivel, tempPoint);
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

    const rule = TrocaAtividade(nivel, tempGeneralRound, tempPoint, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);
      setTimeout(() => {
        setNewContainer(1);
        navigate("/GameOver");
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
      setTimeout(() => {
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
      touchAction: "none",
    });

    const style = transform ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      borderRadius: isDragging && "8px",
      border: isDragging ? `2px solid ${defaultTheme["red-200"]}` : "",
    } : {
      touchAction: "none",
    };
    
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
      setButtonVisibility(state => state.map((_, index) => index === droppedIndex ? 1 : 0))
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
      <TitleLesson title="Drag and drop / Choose the correct answers." />

      <DndContext onDragEnd={handleDragEnd}>
        <Droppable>
          <Title>
            <p>{question.replace("______", changeText)}</p>
          </Title>
        </Droppable>

        <Main>
          {answers.map((answer, index) => {
            return (
              <Draggable index={index} key={index}>
                <ButtonAnswer style={{
                    display: buttonVisibility[index] === 1 ? "none" : ""
                }}>
                  <p>{answer.label}</p>
                </ButtonAnswer>
              </Draggable>
            )
          })}
        </Main>
      </DndContext>
    </Container>
  )
}