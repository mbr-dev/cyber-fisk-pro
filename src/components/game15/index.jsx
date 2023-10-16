import { useContext, useState, useEffect, useCallback } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../titleLesson";
import { Loading } from "../Loading";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade } from "../../utils/regras";
import { L2_T2_Facil } from "../../utils/lesson2_Task";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, AreaAnswers, Words, AreaWord } from "./styles";

export const Game15 = () => {
  const { setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada } = useContext(LessonContext);

  const [words, setWords] = useState([]);
  const [answer, setAnswer] = useState("");
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(true);
  const [hit, setHit] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [phrase, setPhrase] = useState([]);

  const loadLesson = useCallback(() => {
    const totalOfQuestions = L2_T2_Facil.length;
    
    let tempQuestions = [];
    for (let a = 0; a < totalOfQuestions; a++) {
      tempQuestions.push(a);
    }
    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);
    
    let tempWords = L2_T2_Facil[tempQuestions[round]].pergunta;
    tempWords = tempWords.sort(() => Math.random() - 0.5);
    setWords(tempWords);
    
    let tempAnswer = L2_T2_Facil[tempQuestions[round]].resposta;
    setAnswer(tempAnswer);

  }, [setRandomNumber, round, setWords, setAnswer]);

  const newRound = (number) => {
    let tempWords = L2_T2_Facil[randomNumber[number]].pergunta;
    tempWords = tempWords.sort(() => Math.random() - 0.5);
    setWords(tempWords);

    let tempAnswer = L2_T2_Facil[randomNumber[number]].resposta;
    setAnswer(tempAnswer);
  }

  const verifyWord = () => {
    const word = phrase.join("").toLowerCase();

    let tempRightPoints = rightPoints;

    if (phrase.length === words.length) {
      if (word === answer.toLowerCase()) {
        setHit(1);
        tempRightPoints++;
        setRightPoints(tempRightPoints);
        setNewPontos(0, tempRightPoints);
      } else {
        setHit(2);
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
  
      let rule = TrocaAtividade(0, tempGeneralRound, tempRightPoints, tempRound);

      if(rule === "Continua"){
        setTimeout(() =>{
          setHit(0);
          setPhrase([]);
          newRound(tempRound);
        }, 1500);
      } else if (rule === "Game over"){
        setNewPontos(0,0);
        setTimeout(() =>{
          setHit(0);
          setPhrase([]);
          alert('GAME OVER!!');
          setNewContainer(1);
        },1500);
      } else {
        setTimeout(() =>{
          setHit(0);
          setPhrase([]);
          alert('troca nivel');
          setNewLesson(5);
        },1500);
      }
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
      height: "2rem",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      backgroundColor: isOver ? defaultTheme["gray-100"] : undefined,
      border: isOver ? `1px solid ${defaultTheme["gray-200"]}` : "2px solid transparent",
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
    if (answer.length > 1) {
      verifyWord();
    }
  }, [phrase, answer]);

  return (
    <Container>
      {isLoading &&
        <Loading />
      }
      <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd />
      <TitleLesson title="Unscramble the words to form sentences." />

      <DndContext onDragEnd={handleDragEnd}>
        <Main>
          <Droppable>
            <AreaAnswers
              style={{
                color: hit === 1 ? defaultTheme["green-200"] : hit === 2 ? defaultTheme["red-200"] : "",
              }}
            >
              <span>{phrase}</span>
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
        </Main>
      </DndContext>
    </Container>
  )
}