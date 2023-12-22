import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useCallback } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, AreaAnswers, Words, AreaWord, AreaButton, Button } from "./styles";

export const Game15 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [words, setWords] = useState([]);
  const [answer, setAnswer] = useState("");
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [phrase, setPhrase] = useState([]);
  const [phraseFix, setPhraseFix] = useState("");
  const [blockButton, setBlockButton] = useState(true);
  const [data, setData] = useState([]);

  const loadLesson = useCallback(() => {
    setIsLoading(true);

    let dataLength = 0;
    let tempData;
    
    if (!conteudoFacil || !conteudoMedio || !conteudoDificil) {
      navigate("/SelectLesson");
      return;
    }

    if (nivel === 0) {
      setData(conteudoFacil);
      tempData = conteudoFacil;
      dataLength = conteudoFacil.length;
    } else if (nivel === 1) {
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

    let tempWords = items.pergunta;
    tempWords = tempWords.sort(() => Math.random() - 0.5);
    setWords(tempWords);

    let tempAnswer = items.resposta;
    setAnswer(tempAnswer);

    setIsLoading(false);
  }, [setIsLoading, setData, setRandomNumber, round, setWords, setAnswer]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);

    let tempWords = items.pergunta;
    tempWords = tempWords.sort(() => Math.random() - 0.5);
    setWords(tempWords);

    let tempAnswer = items.resposta;
    setAnswer(tempAnswer);

    setPhrase([]);
    setBlockButton(true);
  }

  const handleClear = () => {
    setPhrase([]);
  }

  const verifyWord = () => {
    if (blockButton) return;
    setBlockButton(true);

    const word = phrase.join("").toLowerCase();
    const answerRight = answer.split(" ").join("").toLowerCase();

    let tempRightPoints;

    if (word === answerRight) {
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
      setNewPontos(0, 0);
      setTimeout(() => {
        navigate("/GameOver");
        setNewContainer(1);
      }, 1500);
    } else if (rule === "Score") {
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      setTimeout(() => {
        navigate(`/${page}`);
      }, 1500);
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

  const Draggable = ({ index, children }) => {
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
      id: `draggable-${index}`,
    });

    const style = transform ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      border: isDragging ? `2px solid ${defaultTheme["red-200"]}` : "",
      borderRadius: isDragging ? "8px" : "",
      touchAction: "none",
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
      height: "2rem",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      backgroundColor: isOver ? defaultTheme["gray-100"] : undefined,
      touchAction: "none",
    };

    return (
      <div ref={setNodeRef} style={style}>
        {props.children}
      </div>
    );
  }

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && over.id === "droppable") {
      const droppedIndex = Number(active.id.split("-")[1]);
      const text = over ? words[droppedIndex] : "";
      setPhrase(state => [...state, text]);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    const text = phrase.join(" ");

    const textUp = text.charAt(0).toUpperCase()+text.slice(1);

    setPhraseFix(textUp);
  }, [phrase, setPhraseFix]);

  useEffect(() => {
    if (words.length > 1) {
      if (words.length === phrase.length) {
        setBlockButton(false);
      } else {
        setBlockButton(true);
      }
    }
  } ,[words, phrase])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Unscramble the words to form sentences.game15" />

        <Main>
          <DndContext onDragEnd={handleDragEnd}>
            <Droppable>
              <AreaAnswers>
                <p>{phraseFix}</p>
              </AreaAnswers>
            </Droppable>

            <AreaWord>
              {words.map((word, index) => {
                const containWord = phrase.includes(word)
                return (
                  <Draggable index={index} key={index}>
                    <Words style={{
                      display: containWord ? "none" : "",
                    }}>
                      {word}
                    </Words>
                  </Draggable>
                )
              })}
            </AreaWord>
          </DndContext>
        </Main>
        
        <AreaButton>
          <Button onClick={handleClear} $variant="red">Clear</Button>
          <Button onClick={verifyWord} disabled={blockButton}>Check</Button>
        </AreaButton>
    </Container>
  )
}