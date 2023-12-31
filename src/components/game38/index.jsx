import { useContext, useState, useEffect, useCallback } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, AreaAnswers, Words, AreaWord, WordsDrop } from "./styles";

export const Game38 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [optionColor, setOptionColor] = useState(0);
  const [words, setWords] = useState([]);
  const [answer, setAnswer] = useState("");
  const [data, setData] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [blockButton, setBlockButton] = useState(true);
  const [wordsDropped, setWordsDropped] = useState([]);
  const [wordsIndex, setWordsIndex] = useState([]);

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

    setAnswer(items.resposta);

    let tempWord = items.pergunta;
    tempWord = tempWord.sort(() => Math.random() - 0.5);
    setWords(tempWord);

    setIsLoading(false);
  }, [setIsLoading, setData, setRandomNumber, round, setWords, setAnswer]);

  const newRound = (number) => {
    setWordsIndex([]);
    setWordsDropped([]);
    setOptionColor(0);

    const items = JSON.parse(data[randomNumber[number]].conteudo);

    setAnswer(items.resposta);

    let tempWord = items.pergunta;
    tempWord = tempWord.sort(() => Math.random() - 0.5);
    setWords(tempWord);
  }

  const handleVerify = () => {
    if (blockButton) return;

    setBlockButton(true);

    const word = wordsDropped.join("").toLowerCase();

    let tempRightPoints;
    let tempColor = optionColor;

    if (word === answer.toLowerCase()) {
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

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && over.id === "droppable") {
      const droppedIndex = Number(active.id.split("-")[1]);
      const text = over ? words[droppedIndex] : "";
      setWordsDropped(state => [...state, text]);
      setWordsIndex(state => [...state, droppedIndex]);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
      if (wordsDropped.length === words.length) {
        setBlockButton(false);
      } else {
        setBlockButton(true);
      }
  }, [wordsDropped, setBlockButton, words]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Unscramble." />

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