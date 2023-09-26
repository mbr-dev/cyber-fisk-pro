import React, { useEffect, useState } from "react";
import correct from "./../../assets/sounds/certo.mp3";
import wrong from "./../../assets/sounds/errado.mp3";
import audioImg from "./../../assets/icons/Btn_audio.png";
import useSound from "use-sound";
import EndModal from "../components/EndModal";

import OptionButton from "./../components/OptionButton";
import { shuffleArray } from "../../../../utils";
import {
  ContainerOptions,
  ContainerAudioButton,
  AudioButton,
  AudioImage,
} from "./style";

function ListenAndClick(props) {
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

  const [playCorrect] = useSound(correct, {
    onend: () => setPoints((oldState) => oldState + 1),
  });

  const playAudio = () => {
    setIsBlocked(true);
    const playAudio = new Audio(questions[roundCount].soundUrl);
    playAudio.onended = function () {
      setIsBlocked(false);
    };
    playAudio.play();
  };

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
      props.setInfoToast({ show: false, error: false });
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
    event?.target?.id === "p0" ? playCorrect() : playWrong();
  }

  return (
    <>
      {isReady && (
        <>
          <ContainerAudioButton>
            <AudioButton onClick={playAudio} disabled={isBlocked}>
              <AudioImage src={audioImg} />
            </AudioButton>
          </ContainerAudioButton>
          <ContainerOptions>
            {questions[roundCount]?.alternativas.map((question, index) => (
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

export default ListenAndClick;
