import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useCallback } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, AreaAnswers, Words, AreaWord, WordsDrop, Left, Right, AreaButton, Button } from "./styles";

export const Game29 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [words, setWords] = useState([]);
  const [words1, setWords1] = useState([]);
  const [answer, setAnswer] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [data, setData] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [blockButton, setBlockButton] = useState(true);
  const [blockClean, setBlockClean] = useState(false);
  const [wordsDropped, setWordsDropped] = useState([]);
  const [wordsIndex, setWordsIndex] = useState([]);
  const [wordsIndex1, setWordsIndex1] = useState([]);
  const [wordsDropped1, setWordsDropped1] = useState([]);

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

    let tempWord = items.option.pergunta;
    tempWord = tempWord.sort(() => Math.random() - 0.5);
    setWords(tempWord);

    let tempWord1 = items.option1.pergunta;
    tempWord1 = tempWord1.sort(() => Math.random() - 0.5);
    setWords1(tempWord1);

    setAnswer(items.option.resposta);
    setAnswer1(items.option1.resposta);

    setIsLoading(false);
    setBlockClean(false);
  }, [setIsLoading, setBlockClean, setData, setRandomNumber, round, setWords, setWords1, setAnswer, setAnswer1]);

  const newRound = (number) => {
    setWordsIndex([]);
    setWordsIndex1([]);
    setWordsDropped([]);
    setWordsDropped1([]);
    setBlockClean(false);

    const items = JSON.parse(data[randomNumber[number]].conteudo);

    let tempWord = items.option.pergunta;
    tempWord = tempWord.sort(() => Math.random() - 0.5);
    setWords(tempWord);

    let tempWord1 = items.option1.pergunta;
    tempWord1 = tempWord1.sort(() => Math.random() - 0.5);
    setWords1(tempWord1);

    setAnswer(items.option.resposta);
    setAnswer1(items.option1.resposta);
  }

  const handleVerify = () => {
    if (blockButton) return;
    setBlockButton(true);
    setBlockClean(true);

    const word = wordsDropped.join("").toLowerCase();
    const word1 = wordsDropped1.join("").toLowerCase();

    let tempRightPoints;

    if (word === answer.toLowerCase() && word1 === answer1.toLowerCase()) {
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

    if(rule === "Continua") {
      setTimeout(() =>{
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(nivel, 0);
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

  const handleClear = () => {
    setWordsDropped([]);
    setWordsIndex([]);
    setWordsDropped1([]);
    setWordsIndex1([]);
  }

  const Draggable = ({ index, children }) => {
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
      id: `draggable-${index}`,
    });

    const style = transform ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      border: isDragging ? `2px solid ${defaultTheme['gray-400']}` : "",
      borderRadius: isDragging ? "8px" : "",
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
      backgroundColor: isOver ? defaultTheme["gray-200"] : undefined,
      borderRadius: isOver ? "8px" : "",
      touchAction: "none",
    };

    return (
      <div ref={setNodeRef} style={style}>
        {props.children}
      </div>
    );
  }

  const Droppable1 = (props) => {
    const {isOver, setNodeRef} = useDroppable({
      id: "droppable1",
    });

    const style = {
      backgroundColor: isOver ? defaultTheme["gray-200"] : undefined,
      borderRadius: isOver ? "8px" : ""
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
      setWordsDropped(state => [...state, text]);
      setWordsIndex(state => [...state, droppedIndex]);
    }
  }

  const handleDragEnd1 = (event) => {
    const { active, over } = event;
    if (over && over.id === "droppable1") {
      const droppedIndex = Number(active.id.split("-")[1]);
      const text = over ? words1[droppedIndex] : "";
      setWordsDropped1(state => [...state, text]);
      setWordsIndex1(state => [...state, droppedIndex])
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
      if (wordsDropped.length === words.length && wordsDropped1.length === words1.length) {
        setBlockButton(false);
      } else {
        setBlockButton(true);
      }
  }, [wordsDropped, wordsDropped1, setBlockButton]);

  if (isLoading) {
    return (
      <Loading />
    )
  }
  
  return (
    <Container>
      <TitleLesson title="Drag and Drop the words to make sentences." />

      <Main>
        <Left>
        <DndContext onDragEnd={handleDragEnd}>
          <AreaWord>
              {words.map((word, index) => {
                const containIndex = wordsIndex.includes(index);

                return (
                  <Draggable index={index} key={index}>
                    <Words style={{
                      display: containIndex ? "none" : ""
                    }}>{word}</Words>
                  </Draggable>
                )
              })}
          </AreaWord>
          <Droppable>
            <AreaAnswers>
              {wordsDropped.map((word, index) => {
                return (
                  <WordsDrop key={index}>{word}</WordsDrop>
                )
              })}
            </AreaAnswers>
          </Droppable>
        </DndContext>
        </Left>

        <Right>
        <DndContext onDragEnd={handleDragEnd1}>
          <AreaWord>                
            {words1.map((word, index) => {
              const containIndex = wordsIndex1.includes(index);

              return (
                <Draggable index={index} key={index}>
                  <Words style={{
                      display: containIndex ? "none" : ""
                    }}>{word}</Words>
                </Draggable>
              )
            })}
          </AreaWord>
          <Droppable1>
            <AreaAnswers>
              {wordsDropped1.map((word, index) => {
                return (
                  <WordsDrop key={index}>{word}</WordsDrop>
                )
              })}
            </AreaAnswers>
          </Droppable1>
        </DndContext>
        </Right>
      </Main>

      <AreaButton>
        <Button onClick={handleClear} $variant="red" disabled={blockClean}>Clear</Button>
        <Button onClick={handleVerify} disabled={blockButton}>Check</Button>
      </AreaButton>
    </Container>
  )
}