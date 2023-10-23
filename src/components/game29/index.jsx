import { useContext, useState, useEffect, useCallback } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { L8_T1_Dificil } from "../../utils/lesson8_Task";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, AreaAnswers, Words, AreaWord, WordsDrop } from "./styles";

export const Game29 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, setNewLesson, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);
  
  const navigate = useNavigate();

  const [optionColor, setOptionColor] = useState(0);
  const [words, setWords] = useState([]);
  const [words1, setWords1] = useState([]);
  const [answer, setAnswer] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [data, setData] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [blockButton, setBlockButton] = useState(true);
  const [wordsDropped, setWordsDropped] = useState([]);
  const [wordsIndex, setWordsIndex] = useState([]);
  const [wordsIndex1, setWordsIndex1] = useState([]);
  const [wordsDropped1, setWordsDropped1] = useState([]);

  const loadLesson = useCallback(() => {
    setIsLoading(true);

    let dataLength = 0;
    let tempData;
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
  }, [setIsLoading, setRandomNumber, round, setWords, setWords1, setAnswer, setAnswer1]);

  const newRound = (number) => {
    setWordsIndex([]);
    setWordsIndex1([]);
    setWordsDropped([]);
    setWordsDropped1([]);
    setOptionColor(0);
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

    const word = wordsDropped.join("").toLowerCase();
    const word1 = wordsDropped1.join("").toLowerCase();

    let tempRightPoints;
    let tempColor = optionColor;
      
    if (word === answer.toLowerCase() && word1 === answer1.toLowerCase()) {
      tempColor = 1;
      setOptionColor(tempColor);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      tempColor = 2;
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

    if(rule === "Continua") {
      setTimeout(() =>{
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0,0);
      setTimeout(() =>{
        navigate("/GameOver");
        setNewContainer(1);
      },1500);
    } else if (rule === "Score") {
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    } else {
      setTimeout(() =>{
        if (nivel === 0) {
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        } else {
          setOptionColor(0);
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
      border: isDragging ? `2px solid ${defaultTheme['gray-400']}` : "",
      borderRadius: isDragging ? "8px" : "",
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
      backgroundColor: isOver ? defaultTheme["gray-200"] : undefined,
      borderRadius: isOver ? "8px" : ""
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
              <AreaAnswers style={{
                borderColor: optionColor === 1 ? defaultTheme["green-200"] : optionColor === 2 ? defaultTheme["red-200"] : ""
              }}>
                {wordsDropped.map((word, index) => {
                  return (
                    <WordsDrop key={index}>{word}</WordsDrop>
                  )
                })}
              </AreaAnswers>
            </Droppable>
          </DndContext>

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
              <AreaAnswers style={{
                borderColor: optionColor === 1 ? defaultTheme["green-200"] : optionColor === 2 ? defaultTheme["red-200"] : ""
              }}>
                {wordsDropped1.map((word, index) => {
                  return (
                    <WordsDrop key={index}>{word}</WordsDrop>
                  )
                })}
              </AreaAnswers>
            </Droppable1>
          </DndContext>

          <ButtonBg 
            w="14rem"
            h="2.5rem"
            greenBtn
            title="Check"
            disabledButton={blockButton}
            onPress={handleVerify}
          />
        </Main>
    </Container>
  )
}