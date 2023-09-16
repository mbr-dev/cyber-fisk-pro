import React, { useEffect, useState } from "react";
import correct from "./../../assets/sounds/certo.mp3";
import wrong from "./../../assets/sounds/errado.mp3";
import useSound from "use-sound";
import EndModal from "../components/EndModal";

import { OptionButton } from "./components/OptionButton";
import { SelectButton } from "./components/SelectButton";
import { shuffleArray } from "../../../../utils";
import {
  ContainerQuestion,
  ContainerOptions,
  ContainerCheckButton,
  CheckButton,
} from "./style";

function SelectGame(props) {
  const [isReady, setIsReady] = useState(false);
  const [isTryAgain, setIsTryAgain] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [roundCount, setRoundCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);
  const [error, setError] = useState(0);
  const [orders, setOrders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openSelect, setOpenSelect] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showComplete, setShowComplete] = useState(false);
  const [grade, setGrade] = useState(60);

  const [playCorrect] = useSound(correct, {
    onend: () => setPoints((oldState) => oldState + 1),
  });

  const [playWrong] = useSound(wrong, {
    onend: () => setError((oldState) => oldState + 1),
  });

  const ramdomizeOrder = () => {
    setOrders(
      shuffleArray(questions[roundCount].options.map((_, index) => index))
    );
  };

  const handleAnswer = (isError) => {
    setQuestions((oldState) => {
      const newArray = [...oldState];
      newArray[roundCount].correct = !isError;
      return newArray;
    });
    props.setInfoToast({ show: true, error: isError });
    setOpenSelect(false);
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
      //alert(`Cabou: ${(100 / questions.length) * points}%`);
      setOpenModal(true);
    } else {
      ramdomizeOrder();
      setIsBlocked(false);
      setSelected(null);
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

  function handleClick(text) {
    setSelected(text);
    setOpenSelect(false);
  }

  function handleCheck() {
    setIsBlocked(true);
    console.log(questions[roundCount]?.options[0], selected);
    if (questions[roundCount]?.options[0] === selected) {
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
          <SelectButton
            $show={openSelect}
            onClick={() => setOpenSelect(!openSelect)}
            disabled={isBlocked}
          >
            {selected || "Select"}
          </SelectButton>
          <ContainerOptions $show={openSelect}>
            {questions[roundCount]?.options.map((option, index) => (
              <OptionButton
                key={index}
                id={`p${index}`}
                order={orders[index]}
                disabled={isBlocked || !openSelect}
                correct={index === 0}
                onClick={() => handleClick(option)}
                $border={
                  orders[index] !== questions[roundCount].options.length - 1
                }
              >
                {option}
              </OptionButton>
            ))}
          </ContainerOptions>
          <ContainerCheckButton>
            <CheckButton
              onClick={handleCheck}
              disabled={isBlocked || !selected}
            >
              Check
            </CheckButton>
          </ContainerCheckButton>
        </>
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

export default SelectGame;
