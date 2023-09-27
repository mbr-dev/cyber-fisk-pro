import React, { useEffect, useState } from "react";
import correct from "./../../assets/sounds/certo.mp3";
import wrong from "./../../assets/sounds/errado.mp3";
import { DndContext } from "@dnd-kit/core";
import useSound from "use-sound";
import { EndModal } from "../components/EndModal";

import { Droppable, Draggable } from "./components";
import { shuffleArray, formatQuestionServer } from "../../../../utils";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { ContainerOptions } from "./style";

export const DragAndDropGame = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [isDropped, setIsDropped] = useState(false);
  const [isTryAgain, setIsTryAgain] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [roundCount, setRoundCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);
  const [error, setError] = useState(0);
  const [orders, setOrders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [grade, setGrade] = useState(60);
  const [playCorrect] = useSound(correct, {
    onend: () => setPoints((oldState) => oldState + 1)
  });

  const [playWrong] = useSound(wrong, {
    onend: () => setError((oldState) => oldState + 1)
  });

  const ramdomizeOrder = () => {
    setOrders(shuffleArray(questions.map((_, index) => index)));
  };

  const handleAnswer = (isError, contError) => {
    setQuestions((oldState) => {
      const newArray = [...oldState];
      newArray[roundCount].correct = !isError;
      return newArray;
    });
    props.setInfoToast({ show: true, error: isError });
    setIsVisible(false);
    setTimeout(() => {
      setRoundCount((oldState) => oldState + 1);
    }, 2000);
  };

  useEffect(() => {
    if (!questions.length) return;
    handleAnswer(false);
  }, [points]);

  useEffect(() => {
    if (error === 2) {
      handleAnswer(true);
    } else setIsBlocked(false);
  }, [error]);

  useEffect(() => {
    setError(0);
    if (!questions.length) return;
    if (roundCount >= questions.length) {
      setGrade((100 / questions.length) * points);
      setOpenModal(true);
    } else {
      ramdomizeOrder();
      setIsBlocked(false);
      setIsVisible(true);
      setIsDropped(false);
    }
    props.setInfoToast({ show: false, error: false });
  }, [roundCount]);

  const generateAnswerArray = () => {
    const newQuestions = questions.map((question, index) => {
      return {
        ...question,
        correct: null,
        soundUrl: `${props.urlSounds}${index + 1}.mp3`
      };
    });
    setQuestions(shuffleArray(newQuestions));
  };

  useEffect(() => {
    if (!questions.length) {
      setQuestions(props?.questions);
    }
  }, [props]);

  useEffect(() => {
    if (!questions.length) return;
    props.setAnswered(questions);
    if (questions.some((question) => question?.correct === undefined))
      generateAnswerArray();
    if (questions.every((question) => question.correct === null)) {
      ramdomizeOrder();
      setIsReady(true);
    }
  }, [questions]);

  const moveIncorrectToEnd = (answers) => {
    const corrects = [];
    const incorrects = [];
    answers.forEach((answer) => {
      if (answer?.correct) corrects.push(answer);
      else incorrects.push({ ...answer, correct: null });
    });
    setRoundCount(questions.length - incorrects.length);
    return [...corrects, ...incorrects];
  };

  const repeat = () => {
    const orderedArray = moveIncorrectToEnd(questions);
    setQuestions(orderedArray);
    setIsTryAgain(true);
  };

  function handleDragEnd(event) {
    if (event?.over && event?.over?.id === "droppable") {
      setIsBlocked(true);
      if (event?.active?.id === "p0") {
        setIsDropped(true);
        playCorrect();
      } else {
        playWrong();
      }
    }
  }

  console.log("########", questions?.[0]?.id_qr);

  return (
    <>
      {isReady && (
        <DndContext
          onDragEnd={handleDragEnd}
          modifiers={[restrictToWindowEdges]}
        >
          <Droppable>
            {isDropped
              ? formatQuestionServer(
                  questions[roundCount]?.pergunta?.replace(
                    /_+/g,
                    questions[roundCount]?.alternativas[0]
                  )
                )
              : formatQuestionServer(questions[roundCount]?.pergunta)}
          </Droppable>
          <ContainerOptions>
            {questions[roundCount]?.alternativas.map((question, index) => {
              return index === 0 ? (
                !isDropped && (
                  <Draggable
                    key={index}
                    id={`p${index}`}
                    order={orders[index]}
                    disabled={isBlocked}
                    show={isVisible}
                    border="1px solid green"
                  >
                    {questions[roundCount]?.alternativas[index]}
                  </Draggable>
                )
              ) : (
                <Draggable
                  key={index}
                  id={`p${index}`}
                  order={orders[index]}
                  disabled={isBlocked}
                  show={isVisible}
                >
                  {questions[roundCount]?.alternativas[index]}
                </Draggable>
              );
            })}
          </ContainerOptions>
        </DndContext>
      )}
      <EndModal
        open={openModal}
        setOpen={setOpenModal}
        grade={grade}
        repeat={repeat}
        points={points}
        questions={questions}
        qrId={questions?.[0]?.id_qr}
      />
    </>
  );
};
