import { useEffect, useState, useContext } from "react";
import { Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { HeaderLesson } from "../HeaderLesson";

import { L2_T1_Facil } from "../../utils/Lesson2_Task1";
import { LessonContext } from "../../context/lesson";

import SomImg from "./images/Som.svg";

import { Game7Container, Game7Main, AudioArea, ButtonRow, ButtonAnswer, ButtonAudio } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game7 = () => {
  const { rodadaGeral, timeElapsed, setTimeElapsed, setRodadaGeral, setNewRodada } = useContext(LessonContext);
  //console.log("GAME TIME: ", timeElapsed);
  const navigate = useNavigate();

  const [optionColor, setOptionColor] = useState([0, 0, 0, 0]);
  const [idClickAudio, setIdClickAudio] = useState([0, 1, 2, 3]);
  const [idClickAnswer, setIdClickAnswer] = useState([0, 1, 2, 3]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [audios, setAudios] = useState([]);
  const [rightAudio, setRightAudio] = useState([]);
  const [rightAnswer, setRightAnswer] = useState([]);
  const [round, setRound] = useState(0);
  const [countClick, setCountClick] = useState(0);
  const [blockAnswer, setBlockAnswer] = useState(true);
  const [blockAudio, setBlockAudio] = useState(true);
  const [selectAudIndex, setSelectAudIndex] = useState(null);

  console.log("rodada: ", round);

  const loadLesson = () => {
    const size = L2_T1_Facil.length;
    let tmp = [];

    for (let a = 0; a < size; a++) {
      tmp.push(a);
    }

    tmp = tmp.sort(() => Math.random() - 0.5);
    setRandomNumber(tmp);

    let tmpAudio = [];
    let tmpRandomAudio = idClickAudio;
    tmpRandomAudio = tmpRandomAudio.sort(() => Math.random() - 0.5);
    setIdClickAudio(tmpRandomAudio);
    for (let a = 0; a < idClickAudio.length; a++) {
      tmpAudio.push(L2_T1_Facil[tmp[round]].pergunta[tmpRandomAudio[a]]);
    }

    let tmpAnswer = [];
    let tmpRandomAnswer = idClickAnswer;
    tmpRandomAnswer = tmpRandomAnswer.sort(() => Math.random() - 0.5);
    setIdClickAnswer(tmpRandomAnswer);
    for (let a = 0; a < idClickAnswer.length; a++) {
      tmpAnswer.push(L2_T1_Facil[tmp[round]].resposta[tmpRandomAnswer[a]]);
    }

    setAudios(tmpAudio);
    setAnswer(tmpAnswer);
    setBlockAnswer(false);
    setBlockAudio(false);
  }

  const newRound = (number) => {
    let tmpAudio = [];
    let tmpRandomAudio = idClickAudio;
    tmpRandomAudio = tmpRandomAudio.sort(() => Math.random() - 0.5);
    setIdClickAudio(tmpRandomAudio);
    for (let a = 0; a < idClickAudio.length; a++) {
      tmpAudio.push(L2_T1_Facil[randomNumber[number]].pergunta[tmpRandomAudio[a]]);
    }

    let tmpAnswer = [];
    let tmpRandomNumber = idClickAnswer;
    tmpRandomNumber = tmpRandomNumber.sort(() => Math.random() - 0.5);
    setIdClickAnswer(tmpRandomNumber);
    for (let a = 0; a < idClickAnswer.length; a++) {
      tmpAnswer.push(L2_T1_Facil[randomNumber[number]].resposta[tmpRandomNumber[a]]);
    }

    setRightAudio([]);
    setRightAnswer([]);
    setAudios(tmpAudio);
    setAnswer(tmpAnswer);
    setBlockAudio(false);
    setBlockAnswer(false);
  }

  const handleGetAudio = (id) => {
    if (blockAudio) {
      setSelectAudIndex(null);
      setBlockAudio(false);
    } else {
      let tmpId = id;
      setSelectAudIndex(tmpId);
      setBlockAudio(true);
    }
  }

  const handleGetAnswer = (id) => {
    if (blockAnswer) {
      return;
    }
    
    if (rightAudio.includes(audios[selectAudIndex])) {
      return;
    }

    let arr = optionColor;
    let clicks = countClick;
    let tmpRound = round;
    let tmpRoundGeral = rodadaGeral;

    if (answer[id] === audios[selectAudIndex]) {
      clicks++;
      arr[id] = 1;
      setOptionColor(arr);
      setCountClick(clicks);
      setRightAudio(state => [...state, audios[selectAudIndex]]);
      setRightAnswer(state => [...state, answer[id]]);
      setBlockAudio(false);
    } else {
      arr[id] = 2;
      setOptionColor(arr);
      setBlockAudio(false);
    }

    setTimeout(() => {
      arr[id] = 0;
      setOptionColor(arr);
    }, 500);

    if (clicks > idClickAnswer.length - 1) {
      tmpRound++;
      setRound(tmpRound);
      tmpRoundGeral++;
      setNewRodada(tmpRoundGeral);

      clicks = 0;
      setCountClick(clicks);

      setTimeout(() => {
        newRound(tmpRound);
      }, 1000);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (round === 10) {
        navigate("/WellDone");
      }
    }, 2000);
    
  }, [round]);

  /* useEffect(() => {
    const timer = setInterval(() => {
      if (rodadaGeral < 10) {
        setTimeElapsed(state => state + 1)
      }
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed, rodadaGeral]) */
  
  return (
    <Game7Container>
      <HeaderLesson numStart="Task 1" numEnd="Task2" />

      <Game7Main>
        <p>Make pairs.</p>

        <AudioArea>
          <ButtonRow>
            {audios.map((audio, index) => {
              const disabledAud = rightAudio.includes(audio);

              return (
                <ButtonAudio 
                  key={index}
                  onClick={() => handleGetAudio(index)}
                  style={{
                    opacity: (blockAudio && selectAudIndex === index) || disabledAud ? 0.3 : 1
                  }}
                  disabled={disabledAud}
                >
                  {/* <Volume2 size={24} strokeWidth={2} />
                  <img src={SomImg} alt="" />  */}
                  <span>{audio}</span>
                </ButtonAudio>
              )
            })}
          </ButtonRow>

          <ButtonRow>
            {answer.map((resposta, index) => {
              const disabledRes = rightAnswer.includes(resposta);

              return (
                <ButtonAnswer 
                  key={index}
                  onClick={() => handleGetAnswer(index)}
                  style={{ 
                    opacity: disabledRes ? 0.3 : 1,
                    backgroundColor: optionColor[index] === 0 ? "transparent" : optionColor[index] === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"]
                  }}
                  disabled={disabledRes}
                >
                  <p>{resposta}</p>
                </ButtonAnswer>
              )
            })}
          </ButtonRow>
        </AudioArea>
      </Game7Main>
    </Game7Container>
  )
}