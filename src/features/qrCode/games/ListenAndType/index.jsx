import React, { useEffect, useState, useRef } from "react";
import correct from "./../../assets/sounds/certo.mp3";
import wrong from "./../../assets/sounds/errado.mp3";
import audioImg from "./../../assets/icons/Btn_audio.png";
import useSound from "use-sound";
import { EndModal } from "../components/EndModal";

import { shuffleArray } from "../../../../utils";
import {
  Container,
  ContainerAudioButton,
  AudioButton,
  AudioImage,
  Image,
  Input,
  ContainerCheckButton,
  CheckButton
} from "./style";

export const ListenAndType = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [isTryAgain, setIsTryAgain] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [roundCount, setRoundCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);
  const [error, setError] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [grade, setGrade] = useState(60);
  const [text, setText] = useState("");
  const inputRef = useRef();

  const [playCorrect] = useSound(correct, {
    onend: () => setPoints((oldState) => oldState + 1)
  });
  const playAudio = () => {
    setIsBlocked(true);
    const playAudio = new Audio(questions[roundCount]?.soundUrl);
    playAudio.onended = () => {
      inputRef.current.focus();
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
      setText("");
      setIsBlocked(false);
      props.setInfoToast({ show: false, error: false });
    }
  }, [roundCount]);

  const generateAnswerArray = () => {
    const newQuestions = questions.map((question, index) => {
      return {
        ...question,
        correct: null,
        soundUrl: `${props?.urlSounds}${index + 1}.mp3`,
        image:
          index === 1 || index === 3
            ? `https://cyberhomolog.fisk.com.br:172/cyberfisk30/CyberQR/NovoQR/Essentials%201/Imagens/53_Lesson5_${index}.jpg`
            : null
        //image: question?.imagem
        //  ? `https://cyberhomolog.fisk.com.br:172/cyberfisk30/CyberQR/NovoQR/Essentials%201/Imagens/53_Lesson5_${
        //      index + 1
        //    }.jpg`
        //  : null
      };
    });
    setQuestions(newQuestions);
    //setQuestions(shuffleArray(newQuestions));
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

  const formatToCompare = (text) => {
    console.log("tex", text);
    return text?.trim()?.replace(/[?.!]/g, "").replace("’", "'");
  };

  const handleCheck = () => {
    setIsBlocked(true);
    const formatedText = formatToCompare(text);
    const formatedAnswer = formatToCompare(questions[roundCount]?.pergunta);
    formatedText === formatedAnswer ? playCorrect() : playWrong();
  };

  return (
    <>
      {questions.length && isReady && (
        <Container>
          <ContainerAudioButton>
            <AudioButton onClick={playAudio} disabled={isBlocked}>
              <AudioImage src={audioImg} />
            </AudioButton>
            {questions[roundCount]?.image && (
              <Image src={questions[roundCount]?.image} />
            )}
          </ContainerAudioButton>
          <Input
            value={text}
            onChange={(e) => {
              if (isBlocked) return;
              setText(e.target.value);
            }}
            //disabled={isBlocked}
            //ref={inputRef}
            inputRef={inputRef}
          />
          <ContainerCheckButton>
            <CheckButton
              onClick={handleCheck}
              disabled={isBlocked || text?.trim().length < 3}
            >
              Check
            </CheckButton>
          </ContainerCheckButton>
        </Container>
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
