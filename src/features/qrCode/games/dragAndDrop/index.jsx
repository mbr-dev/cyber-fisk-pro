import React, { useCallback, useEffect, useState } from "react";
import correct from "./../../assets/sounds/certo.mp3";
import wrong from "./../../assets/sounds/errado.mp3";
import { DndContext } from "@dnd-kit/core";
import useSound from "use-sound";

import { Droppable, Draggable } from "./components";
import { shuffleArray } from "./../../../../utils";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

function DragAndDropGame(props) {
  const [isDropped, setIsDropped] = useState(false);
  const [isTryAgain, setIsTryAgain] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [roundCount, setRoundCount] = useState(0);
  const [questions, setQuestion] = useState([]);
  const [points, setPoints] = useState(0);
  const [error, setError] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [orders, setOrders] = useState([]);
  const [playCorrect] = useSound(correct, {
    onend: () => {
      setPoints((oldState) => oldState + 1);
      // handleAnswer(false);
    },
  });

  const [playWrong] = useSound(wrong, {
    onend: () => {
      setError((oldState) => oldState + 1);
      // handleAnswer(true);
    },
  });

  const ramdomizeOrder = () => {
    setOrders(shuffleArray(questions.map((_, index) => index)));
  };

  const handleAnswer = (isError, contError) => {
    // ramdomizeOrder();
    // setIsVisible(false);
    setAnsweredQuestions((oldState) => {
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
      alert(`Cabou: ${(100 / questions.length) * points}%`);
      repeat();
    } else {
      ramdomizeOrder();
      setIsBlocked(false);
      setIsVisible(true);
      setIsDropped(false);
    }
  }, [roundCount]);

  const generateAnswerArray = () => {
    setAnsweredQuestions(() =>
      questions.map((question) => {
        return { ...question, correct: null };
      })
    );
  };

  useEffect(() => {
    if (!questions.length) {
      console.log("props", props);
      setQuestion(shuffleArray(props?.questions));
    }
  }, [props]);

  // console.log("ques", questions);

  useEffect(() => {
    console.log("quest", questions);
    if (!orders.length) ramdomizeOrder();
  }, [questions]);

  useEffect(() => {
    if (!answeredQuestions.length) return;
    props.setAswered(answeredQuestions);
  }, [answeredQuestions]);

  useEffect(() => {
    if (!questions.length || isTryAgain) return;
    generateAnswerArray();
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
    const orderedArray = moveIncorrectToEnd(answeredQuestions);
    setAnsweredQuestions(orderedArray);
    setQuestion(orderedArray);
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
      {questions.length && (
        <DndContext
          onDragEnd={handleDragEnd}
          modifiers={[restrictToWindowEdges]}
        >
          <Droppable>
            {isDropped
              ? questions[roundCount]?.fullAnswer
              : questions[roundCount]?.question}
          </Droppable>
          <div
            style={{
              flex: 1,
              display: "grid",
              marginBlock: 20,
              gap: 8,
            }}
          >
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
          </div>
        </DndContext>
      )}
    </>
  );
}

export default DragAndDropGame;
