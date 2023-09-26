import React, { useEffect, useState } from "react";
import correct from "./../../assets/sounds/certo.mp3";
import wrong from "./../../assets/sounds/errado.mp3";
import useSound from "use-sound";
import EndModal from "../components/EndModal";

import { shuffleArray } from "../../../../utils";
import { ContainerOptions, ContainerQuestion } from "./style";
import OptionButton from "../components/OptionButton";

function Quiz(props) {
  const [isReady, setIsReady] = useState(false);
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
  const [showComplete, setShowComplete] = useState(false);

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
    setQuestions((oldState) => {
      const newArray = [...oldState];
      newArray[roundCount].correct = !isError;
      return newArray;
    });
    setIsVisible(false);
    props.setInfoToast({ show: true, error: isError });
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
      setShowComplete(false);
    }
    props.setInfoToast({ show: false, error: false });
  }, [roundCount]);

  const generateAnswerArray = () => {
    const newQuestions = questions.map((question, index) => {
      return {
        ...question,
        correct: null,
        soundUrl: `${props.urlSounds}${index + 1}.mp3`,
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

  function handleClick(event) {
    setIsBlocked(true);
    if (event?.target?.id === "p0") {
      playCorrect();
      setShowComplete(true);
    } else playWrong();
  }

  return (
    <>
      {isReady && (
        <>
          <ContainerQuestion>
            {showComplete
              ? questions[roundCount]?.fullAnswer
              : questions[roundCount]?.question}
          </ContainerQuestion>
          <ContainerOptions>
            {questions[roundCount]?.options.map((question, index) => (
              <OptionButton
                key={index}
                id={`p${index}`}
                order={orders[index]}
                disabled={isBlocked}
                show={isVisible}
                correct={index === 0}
                onClick={(e) => handleClick(e)}
              >
                {question}
              </OptionButton>
            ))}
          </ContainerOptions>
        </>
      )}
      <EndModal
        open={openModal}
        setOpen={setOpenModal}
        grade={grade}
        repeat={repeat}
        points={points}
        questions={questions}
      />
    </>
  );
}

export default Quiz;
