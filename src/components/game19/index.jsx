import { useCallback, useContext, useState, useEffect } from "react";

import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../TitleLesson";
import { HeaderLesson } from "../HeaderLesson";

import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";
import { L5_T1_Dificil } from "../../utils/lesson5_Task";

import { Container, Form, Main, Select } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game19 = () => {
  const {setNewContainer, setNewPontos, rodadaGeral, setNewRodada, pontosD, pontosF, pontosM} = useContext(LessonContext);

  const [colorAnswers, setColorAnswer] = useState(0);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState([]);
  const [answer0, setAnswer0] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [option0, setOption0] = useState([]);
  const [option1, setOption1] = useState([]);
  const [option2, setOption2] = useState([]);
  const [option3, setOption3] = useState([]);
  const [option4, setOption4] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [selected0, setSelected0] = useState("");
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");
  const [selected4, setSelected4] = useState("");
  const [countClick, setCountClick] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(async() => {
    const questionLength = L5_T1_Dificil.length;

    let tempRandom = [];
    for (let a = 0; a < questionLength; a++) {
      tempRandom.push(a);
    }
    tempRandom = tempRandom.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandom);

    setQuestion(L5_T1_Dificil[tempRandom[round]].pergunta);
    setOption0(L5_T1_Dificil[tempRandom[round]].option0.label);
    setOption1(L5_T1_Dificil[tempRandom[round]].option1.label);
    setOption2(L5_T1_Dificil[tempRandom[round]].option2.label);
    setOption3(L5_T1_Dificil[tempRandom[round]].option3.label);
    setOption4(L5_T1_Dificil[tempRandom[round]].option4.label);

    setAnswer0(L5_T1_Dificil[tempRandom[round]].option0.status);
    setAnswer1(L5_T1_Dificil[tempRandom[round]].option1.status);
    setAnswer2(L5_T1_Dificil[tempRandom[round]].option2.status);
    setAnswer3(L5_T1_Dificil[tempRandom[round]].option3.status);
    setAnswer4(L5_T1_Dificil[tempRandom[round]].option4.status);
  }, [setRandomNumber]);

  const newRound = (number) => {
    setCountClick(0);
    setOption0("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setSelected0("");
    setSelected1("");
    setSelected2("");
    setSelected3("");
    setSelected4("");
    
    setQuestion(L5_T1_Dificil[randomNumber[number]].pergunta);
    setOption0(L5_T1_Dificil[randomNumber[number]].option0.label);
    setOption1(L5_T1_Dificil[randomNumber[number]].option1.label);
    setOption2(L5_T1_Dificil[randomNumber[number]].option2.label);
    setOption3(L5_T1_Dificil[randomNumber[number]].option3.label);
    setOption4(L5_T1_Dificil[randomNumber[number]].option4.label);

    setAnswer0(L5_T1_Dificil[randomNumber[number]].option0.status);
    setAnswer1(L5_T1_Dificil[randomNumber[number]].option1.status);
    setAnswer2(L5_T1_Dificil[randomNumber[number]].option2.status);
    setAnswer3(L5_T1_Dificil[randomNumber[number]].option3.status);
    setAnswer4(L5_T1_Dificil[randomNumber[number]].option4.status);
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
  const handleSelect3 = (event) => {
    const value = event.target.value;
    setSelected3(value);

    let click = countClick;
    click++;
    setCountClick(click);
  }
  const handleSelect4 = (event) => {
    const value = event.target.value;
    setSelected4(value);

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
      selected2 === answer2 && 
      selected3 === answer3 && 
      selected4 === answer4
      ) {
      tempColor = 1;
      setColorAnswer(tempColor);

      tempRightPoints += 3;
      setRightPoints(tempRightPoints);
      setNewPontos(2, tempRightPoints);
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

    const rule = TrocaAtividade(2, tempGeneralRound, tempRightPoints, tempRound);

    if(rule === "Continua") {
      setTimeout(() =>{
        setColorAnswer(0);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Score") {
      setTimeout(() =>{
        const scoreFinal = Score(pontosF, pontosM, pontosD);
        let valorRank = 0;

        if (scoreFinal >= 70) {
            if(localStorage.getItem("cyber_pro_frequencia_task1")) {
              let frequencia = parseInt(localStorage.getItem("cyber_pro_frequencia_task1"));
              let oldRank = parseInt(localStorage.getItem("cyber_pro_rank"));
              frequencia++;

              if (frequencia === 4) {
                alert(`Parabéns voce ganhou: 10 Fisk Dollars`);
              }

              localStorage.setItem("cyber_pro_frequencia_task1",frequencia);
              const rank = PontosRank(frequencia,oldRank);
              valorRank = rank;
              localStorage.setItem("cyber_pro_rank",rank);
            } else {
              localStorage.setItem("cyber_pro_task2","1");
              localStorage.setItem("cyber_pro_msg_task2","1");
              localStorage.setItem("cyber_pro_frequencia_task1",1);
              const rank = PontosRank(1,0);
              valorRank = rank;
              localStorage.setItem("cyber_pro_rank",rank);
            }
          }

        alert(`SCORE: ${scoreFinal}%`);
        alert(`PONTOS PARA O RANKING: ${valorRank}`);
        setNewContainer(1);
      }, 1500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    countClick >= 5 ? setBlockButton(false) : setBlockButton(true)
  }, [countClick, setBlockButton]);
  

  return (
    <Container>
      <HeaderLesson numStart="Task 1" numEnd="Task 2" />
      <TitleLesson title="Complete" />

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
          <Select value={selected3} onChange={handleSelect3}>
            {option3.map((option, index) => {
              return (
                <option key={index} value={option}>{option}</option>
              )
            })}
          </Select> 
          <label style={{
            color: colorAnswers === 1 ? defaultTheme["green-200"] : colorAnswers === 2 ? defaultTheme["red-200"] : "",
          }}>{question[4]}</label>
          <Select value={selected4} onChange={handleSelect4}>
            {option4.map((option, index) => {
              return (
                <option key={index} value={option}>{option}</option>
              )
            })}
          </Select>
          <label style={{
            color: colorAnswers === 1 ? defaultTheme["green-200"] : colorAnswers === 2 ? defaultTheme["red-200"] : "",
          }}>{question[5]}</label>
        </Form>
        <ButtonBg
          form="myForm"
          type="submit"
          disabledButton={blockButton}
          title="Check"
          w="15.875rem"
          h="2.5rem"
          greenBtn
        />
      </Main>
    </Container>
  )
}