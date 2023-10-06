import { useState, useContext, useEffect } from "react";

import { TitleLesson } from "../titleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { SubTitleSuperLesson } from "../SubTitleSuperLesson";

import { LessonContext } from "../../context/lesson";

import { GameSL1Content, GameSL1Container, BoxBtn, BoxBtnClear, ButtonLetter, ButtonClear } from "./style";

export const GameSL1 = () => {
  const respostas = ["American", "Canadian", "Brazilian", "French", "Italian", "Spanish"];
  const letras = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "M", "N", "P", "R", "S", "T", "Z"];
  const tempo = 30;

  const { superTask, setNewsuperTask, setNewContainer, setTimeElapsed, timeElapsed } = useContext(LessonContext);
  console.log("GAME TIME: ", timeElapsed);

  const [numClick, setNumClick] = useState(0);
  let [tempoRestante, setTempoRestante] = useState(tempo);
  const [pauseTime, setPauseTime] = useState(false);
  const [addTime, setAddTime] = useState(false);
  const [respondido, setRespondido] = useState([]);
  const [rodada, setRodada] = useState(0);
  const [palavraRodada, setPalavraRodada] = useState('');

  const handleClick = (str) => {
    let temp = superTask;
    let tempNum = numClick;
    temp[tempNum] = str;
    tempNum++;
    setNewsuperTask(temp);
    setNumClick(tempNum);
    let res = '';

    superTask.map((x) => {
      res += x;
    });
    //setPauseTime(true);
    respostas.map((el) => {
      if (res.toUpperCase() === el.toUpperCase()) {
        //setAddTime(true);
        if (respondido.includes(el)) {
          alert(`Voce já acertou esta palavra: ${el}`);
        } else {
          let temp = respondido;
          temp.push(el);
          setRespondido(temp);
          alert(`Acertou a palavra: ${el}, restam ${(respostas.length - temp.length)} palavra(s)`);
        }

        clearFields();
        //setTempoRestante(tempoRestante += 30);
      }
    })

    if (tempNum > 8) {
      clearFields();
    }

    //setPauseTime(false);
  }

  const handleClearField = () => {
    let temp = superTask;
    let tempNum = numClick;
    tempNum--;
    temp[tempNum] = '';
    if (tempNum < 1) {
      tempNum = 0;
    }
    setNewsuperTask(temp);
    setNumClick(tempNum);
  }

  const clearFields = () => {
    let temp = ['', '', '', '', '', '', '', '', ''];
    setNumClick(0);
    setNewsuperTask(temp);
  }

  const startTimer = () => {
    setTimeout(() => {
      if (!pauseTime) {
        if (tempoRestante > 0) {
          setTempoRestante(tempoRestante -= 1);
        } else {
          alert('GAME OVER!!');
          setPauseTime(true);
          setNewContainer(1);
        }
      }
    }, 1000)
  }

  const formataTempo = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  const calculaFracao = () => {
    return tempoRestante / tempo;
  }

  useEffect(() => {
    clearFields();
  }, []);
  //startTimer();

  useEffect(() => {
    const timer = setInterval(() => {
        setTimeElapsed(state => {
          return state + 1
        })
      }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed])

  return (
    <GameSL1Container>
      <HeaderLesson superTaskStart trophyEnd numStart="Super task" numEnd="Finish" />

      <TitleLesson title="How many nationalities can you write with these letters?" />
      <SubTitleSuperLesson palavra={palavraRodada} />

      <GameSL1Content>
        {/* <div className='boxTimer'>
            <span>{formataTempo(tempoRestante)} {addTime ? <span>+ 30</span>: <></>}</span>
        </div> */}
        <BoxBtn>
          {letras.map((letra, index) => {
            return (
              <ButtonLetter key={index}
                onClick={() => handleClick(letra)}
              >
                <p>{letra}</p>
              </ButtonLetter>
            )
          })}
        </BoxBtn>

        <BoxBtnClear>
          <ButtonClear 
            onClick={() => handleClearField()}
          >
            <p>Clear</p>
          </ButtonClear>
        </BoxBtnClear>
      </GameSL1Content>
    </GameSL1Container>
  )
}