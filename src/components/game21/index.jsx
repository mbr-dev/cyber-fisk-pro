import { useCallback, useContext, useState, useEffect } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";
import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";
import { L5_T2_Facil } from "../../utils/lesson5_Task";
import { URL_FISKPRO } from "../../config/infos";

import { Container, Form, Main, Select, Button } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game21 = () => {
  const {setNewContainer, setNewPontos, rodadaGeral, setNewRodada, pontosD, pontosF, pontosM} = useContext(LessonContext);

  const [colorAnswers, setColorAnswer] = useState(0);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState([]);
  const [sound, setSound] = useState(null);
  const [answer0, setAnswer0] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [option0, setOption0] = useState([]);
  const [option1, setOption1] = useState([]);
  const [option2, setOption2] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [selected0, setSelected0] = useState("");
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [countClick, setCountClick] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(async() => {
    const questionLength = L5_T2_Facil.length;

    let tempRandom = [];
    for (let a = 0; a < questionLength; a++) {
      tempRandom.push(a);
    }
    tempRandom = tempRandom.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandom);

    setSound(L5_T2_Facil[tempRandom[round]].audio);
    setQuestion(L5_T2_Facil[tempRandom[round]].pergunta);
    setOption0(L5_T2_Facil[tempRandom[round]].option0.label);
    setOption1(L5_T2_Facil[tempRandom[round]].option1.label);
    setOption2(L5_T2_Facil[tempRandom[round]].option2.label);

    setAnswer0(L5_T2_Facil[tempRandom[round]].option0.status);
    setAnswer1(L5_T2_Facil[tempRandom[round]].option1.status);
    setAnswer2(L5_T2_Facil[tempRandom[round]].option2.status);
  }, [setRandomNumber, setSound, setQuestion, setOption0, setOption1, setOption2, setAnswer0, setAnswer1, setAnswer2]);

  const newRound = (number) => {
    setCountClick(0);
    setOption0("");
    setOption1("");
    setOption2("");
    setSelected0("");
    setSelected1("");
    setSelected2("");
    
    setSound(L5_T2_Facil[randomNumber[number]].audio);
    setQuestion(L5_T2_Facil[randomNumber[number]].pergunta);
    setOption0(L5_T2_Facil[randomNumber[number]].option0.label);
    setOption1(L5_T2_Facil[randomNumber[number]].option1.label);
    setOption2(L5_T2_Facil[randomNumber[number]].option2.label);

    setAnswer0(L5_T2_Facil[randomNumber[number]].option0.status);
    setAnswer1(L5_T2_Facil[randomNumber[number]].option1.status);
    setAnswer2(L5_T2_Facil[randomNumber[number]].option2.status);
  }

  const handleSelect0 = (event) => {
    const value = event.target.value;
    setSelected0(value);

    let click = countClick;
    click++;
    setCountClick(click);
  }
  const handleSelect1 = (event) => {
    const value = event.target.value;
    setSelected1(value);

    let click = countClick;
    click++;
    setCountClick(click);
  }
  const handleSelect2 = (event) => {
    const value = event.target.value;
    setSelected2(value);

    let click = countClick;
    click++;
    setCountClick(click);
  }

  const handleVerify = (event) => {
    event.preventDefault();
    if (blockButton) return;

    setBlockButton(true);

    let tempRightPoints = rightPoints;
    let tempColor = colorAnswers;

    if (
      selected0 === answer0 && 
      selected1 === answer1 && 
      selected2 === answer2
      ) {
      tempColor = 1;
      setColorAnswer(tempColor);

      tempRightPoints++;
      setRightPoints(tempRightPoints);
      setNewPontos(0, tempRightPoints);
    } else {
      tempColor = 2;
      setColorAnswer(tempColor);

      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const rule = TrocaAtividade(0, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() =>{
        setColorAnswer(0);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0,0);
      setTimeout(() =>{
        setColorAnswer(0);
        alert('GAME OVER!!');
        setNewContainer(1);
      }, 1500);
    } else {
      setTimeout(() =>{
        setColorAnswer(0);
        alert('Proximo lesson!!');
        setNewLesson(2);
      }, 1500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    countClick >= 3 ? setBlockButton(false) : setBlockButton(true)
  }, [countClick, setBlockButton]);
  

  return (
    <Container>
      <HeaderLesson numStart="Task 2" numEnd="Super task" superTaskEnd />
      <TitleLesson title="Complete" />
      <SubTitleLessonAudio audio={`${URL_FISKPRO}sounds/essentials1/lesson5/${sound}.mp3`} />

      <Main>
        <Form id="myForm" onSubmit={handleVerify}>
          <label style={{
            color: colorAnswers === 1 ? defaultTheme["green-200"] : colorAnswers === 2 ? defaultTheme["red-200"] : "",
          }}>{question[0]}</label>
          <Select value={selected0} onChange={handleSelect0}>
            {option0.map((option, index) => {
              return (
                <option key={index} value={option}>{option}</option>
              )
            })}
          </Select>
          <label style={{
            color: colorAnswers === 1 ? defaultTheme["green-200"] : colorAnswers === 2 ? defaultTheme["red-200"] : "",
          }}>{question[1]}</label>
          <Select value={selected1} onChange={handleSelect1}>
            {option1.map((option, index) => {
              return (
                <option key={index} value={option}>{option}</option>
              )
            })}
          </Select>
          <label style={{
            color: colorAnswers === 1 ? defaultTheme["green-200"] : colorAnswers === 2 ? defaultTheme["red-200"] : "",
          }}>{question[2]}</label>
          <Select value={selected2} onChange={handleSelect2}>
            {option2.map((option, index) => {
              return (
                <option key={index} value={option}>{option}</option>
              )
            })}
          </Select>
          <label style={{
            color: colorAnswers === 1 ? defaultTheme["green-200"] : colorAnswers === 2 ? defaultTheme["red-200"] : "",
          }}>{question[3]}</label>
        </Form>
        <Button form="myForm" type="submit" onClick={handleVerify} disabled={blockButton} >
          <p>Check</p>
        </Button>
      </Main>
    </Container>
  )
}