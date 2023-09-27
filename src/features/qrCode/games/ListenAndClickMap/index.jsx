import React, { useEffect, useState } from "react";
import correct from "./../../assets/sounds/certo.mp3";
import wrong from "./../../assets/sounds/errado.mp3";
import audioImg from "./../../assets/icons/Btn_audio.png";
import useSound from "use-sound";
import { EndModal } from "../components/EndModal";
import {
  Container,
  ContainerAudioButton,
  AudioButton,
  AudioImage,
  ContainerMap,
  Map,
  GridMap,
  Place,
  TextPlace
} from "./style";

export const ListenAndClickMap = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [isTryAgain, setIsTryAgain] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [roundCount, setRoundCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);
  const [error, setError] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [grade, setGrade] = useState(60);

  const [playCorrect] = useSound(correct, {
    onend: () => setPoints((oldState) => oldState + 1)
  });

  const playAudio = () => {
    setIsBlocked(true);
    const playAudio = new Audio(questions[roundCount]?.soundUrl);
    playAudio.onended = function () {
      setIsBlocked(false);
    };
    playAudio.play();
  };

  const [playWrong] = useSound(wrong, {
    onend: () => setError((oldState) => oldState + 1)
  });

  const handleAnswer = (isError) => {
    setQuestions((oldState) => {
      const newArray = [...oldState];
      newArray[roundCount].correct = !isError;
      return newArray;
    });
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
      setIsBlocked(false);
    }
    props.setInfoToast({ show: false, error: false });
  }, [roundCount]);

  const generateAnswerArray = () => {
    const newQuestions = questions.map((question, index) => {
      return {
        ...question,
        correct: null,
        soundUrl: `${props?.urlSounds}${index + 1}.mp3`
      };
    });
    setQuestions(newQuestions);
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
    if (questions.every((question) => question?.correct === null)) {
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

  function handleClick(id) {
    if (isBlocked) return;
    setIsBlocked(true);
    id === roundCount ? playCorrect() : playWrong();
  }

  return (
    <>
      {isReady && (
        <>
          <Container>
            <ContainerAudioButton>
              <AudioButton onClick={playAudio} disabled={isBlocked}>
                <AudioImage src={audioImg} />
              </AudioButton>
            </ContainerAudioButton>
            <ContainerMap>
              <Map>
                <GridMap>
                  <Place
                    $show={questions[0]?.correct}
                    onClick={() => handleClick(0)}
                  >
                    <TextPlace>GYM</TextPlace>
                  </Place>
                  <Place
                    $show={questions[4]?.correct}
                    onClick={() => handleClick(4)}
                  >
                    <TextPlace>BAKERY</TextPlace>
                  </Place>
                  <Place onClick={() => handleClick(99)} />
                  <Place
                    $show={questions[3]?.correct}
                    onClick={() => handleClick(3)}
                  >
                    <TextPlace>SUPERMARKET</TextPlace>
                  </Place>
                  <Place
                    $show={questions[1]?.correct}
                    onClick={() => handleClick(1)}
                  >
                    <TextPlace>HOTEL</TextPlace>
                  </Place>
                  <Place
                    $show={questions[2]?.correct}
                    onClick={() => handleClick(2)}
                  >
                    <TextPlace>MALL</TextPlace>
                  </Place>
                </GridMap>
              </Map>
            </ContainerMap>
          </Container>
        </>
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
