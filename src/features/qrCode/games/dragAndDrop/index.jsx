import React, { useEffect, useState } from "react";
import correct from "./../../assets/sounds/certo.mp3";
import wrong from "./../../assets/sounds/errado.mp3";
import { DndContext } from "@dnd-kit/core";
import useSound from "use-sound";
import EndModal from "../components/EndModal";

import { Droppable, Draggable } from "./components";
import { shuffleArray } from "../../../../utils";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { ContainerOptions } from "./style";

function DragAndDropGame(props) {
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
    onend: () => setPoints((oldState) => oldState + 1),
  });

  const [playWrong] = useSound(wrong, {
    onend: () => setError((oldState) => oldState + 1),
  });

  const ramdomizeOrder = () => {
    setOrders(shuffleArray(questions.map((_, index) => index)));
  };

  const handleAnswer = (isError, contError) => {
    // ramdomizeOrder();
    // setIsVisible(false);
    setQuestions((oldState) => {
      const newArray = [...oldState];
      newArray[roundCount].correct = !isError;
      return newArray;
    });
    setTimeout(() => {
      setIsVisible(false);
      setRoundCount((oldState) => oldState + 1);
    }, 2000);
  };

  useEffect(() => {
    if (!questions.length) return;
    // ramdomizeOrder();
    handleAnswer(false);
    // setAnsweredQuestions((oldState) => {
    //   const newArray = [...oldState];
    //   newArray[roundCount].correct = true;
    //   return newArray;
    // });
    // setTimeout(() => {
    //   setIsVisible("false");
    //   setRoundCount((oldState) => oldState + 1);
    // }, 2000);
  }, [points]);

  useEffect(() => {
    if (error === 2) {
      handleAnswer(true);
      // setAnsweredQuestions((oldState) => {
      //   const newArray = [...oldState];
      //   newArray[roundCount].correct = false;
      //   return newArray;
      // });
      // setTimeout(() => {
      //   setIsVisible("false");
      //   setRoundCount((oldState) => oldState + 1);
      // }, 2000);
    } else setIsBlocked(false);
  }, [error]);

  useEffect(() => {
    // console.log("mudou rod");
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
  }, [roundCount]);

  const generateAnswerArray = () => {
    const newQuestions = questions.map((question, index) => {
      return {
        ...question,
        correct: null,
        soundUrl: `${props.urlSounds}${index + 1}.mp3`,
      };
    });
    console.log(
      "🚀 ~ file: index.jsx:119 ~ generateAnswerArray ~ newQuestions:",
      newQuestions
    );
    setQuestions(shuffleArray(newQuestions));
  };

  useEffect(() => {
    if (!questions.length) {
      setQuestions(props?.questions);
    }
  }, [props]);

  // console.log("ques", questions);

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

  //console.log("in", answeredQuestions);

  return (
    <>
      {/* Round: {roundCount}
      Points: {points}
      RoundErrors: {error.toString()}
      GeneralErrors: {generalErrors} */}
      {isReady && (
        <DndContext
          onDragEnd={handleDragEnd}
          modifiers={[restrictToWindowEdges]}
        >
          <Droppable>
            {isDropped
              ? questions[roundCount]?.fullAnswer
              : questions[roundCount]?.question}
          </Droppable>
          <ContainerOptions>
            {questions[roundCount]?.options.map((question, index) => {
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
                    {questions[roundCount]?.options[index]}
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
                  {questions[roundCount]?.options[index]}
                </Draggable>
              );
            })}
          </ContainerOptions>
        </DndContext>
      )}
      <EndModal
        open={roundCount > 2}
        setOpen={setOpenModal}
        grade={grade}
        repeat={repeat}
        points={points}
        questions={questions}
      />
    </>
  );
}

export default DragAndDropGame;
