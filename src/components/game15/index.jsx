import { useContext, useState, useEffect, useCallback } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, AreaAnswers, Words, AreaWord } from "./styles";

export const Game15 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, setNewLesson, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);
  
  const navigate = useNavigate();

  const [words, setWords] = useState([]);
  const [answer, setAnswer] = useState("");
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(true);
  const [hit, setHit] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [phrase, setPhrase] = useState([]);
  const [data, setData] = useState([]);

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
  }

  const verifyWord = () => {
    const word = phrase.join("").toLowerCase();

    let tempRightPoints;

    if (phrase.length === words.length) {
      if (word === answer.toLowerCase()) {
        setHit(1);

        tempRightPoints = PointRule(nivel, rightPoints);
        setRightPoints(tempRightPoints);
        setNewPontos(nivel, tempRightPoints);
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
  
      const rule = TrocaAtividade(nivel, tempGeneralRound, tempRightPoints, tempRound);

      if(rule === "Continua") {
        setTimeout(() =>{
          setHit(0);
          setPhrase([]);
          newRound(tempRound);
        }, 1500);
      } else if (rule === "Game over") {
        setNewPontos(0,0);
        setTimeout(() =>{
          setHit(0);
          setPhrase([]);
          navigate("/GameOver");
          setNewContainer(1);
        },1500);
      } else if (rule === "Score") {
        const pontos = Score(pontosF, pontosM, pontosD);
        const page = ScoreFinal(pontos, numSelLesson, numTask);
        navigate(`/${page}`);
      } else {
        setTimeout(() =>{
          setHit(0);
          setPhrase([]);
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

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
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