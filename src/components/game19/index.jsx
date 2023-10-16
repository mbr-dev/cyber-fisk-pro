import { useCallback, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Form, Main, Select } from "./styles";

export const Game19 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, setNewLesson, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);

  const navigate = useNavigate();

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

  const loadLesson = useCallback(() => {
    setIsLoading(true);

    let dataLength = 0;
    let tempData;
    if(nivel === 0){
      setData(conteudoFacil);
      tempData = conteudoFacil;
      dataLength = conteudoFacil.length;
    }else if(nivel === 1){
      setData(conteudoMedio);
      tempData = conteudoMedio;
      dataLength = conteudoMedio.length;
    }else{
      setData(conteudoDificil);
      tempData = conteudoDificil;
      dataLength = conteudoDificil.length;
    }

    let tempRandom = [];
    for (let a = 0; a < dataLength; a++) {
      tempRandom.push(a);
    }
    tempRandom = tempRandom.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandom);

    const items = JSON.parse(tempData[tempRandom[round]].conteudo);

    setQuestion(items.pergunta);
    setOption0(items.option0.label);
    setOption1(items.option1.label);
    setOption2(items.option2.label);
    setOption3(items.option3.label);
    setOption4(items.option4.label);

    setAnswer0(items.option0.status);
    setAnswer1(items.option1.status);
    setAnswer2(items.option2.status);
    setAnswer3(items.option3.status);
    setAnswer4(items.option4.status);
    setIsLoading(false);
  }, [setIsLoading, setData, setRandomNumber, setQuestion, setOption0, setOption1, setOption2, setOption3, setOption4, setAnswer0, setAnswer1, setAnswer2, setAnswer3, setAnswer4]);

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

    const items = JSON.parse(data[randomNumber[number]].conteudo);
    
    setQuestion(items.pergunta);
    setOption0(items.option0.label);
    setOption1(items.option1.label);
    setOption2(items.option2.label);
    setOption3(items.option3.label);
    setOption4(items.option4.label);

    setAnswer0(items.option0.status);
    setAnswer1(items.option1.status);
    setAnswer2(items.option2.status);
    setAnswer3(items.option3.status);
    setAnswer4(items.option4.status);
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

    let tempRightPoints;
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

      tempRightPoints = PointRule(nivel, rightPoints);
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

    const rule = TrocaAtividade(nivel, tempGeneralRound, tempRightPoints, tempRound);

    if(rule === "Continua") {
      setTimeout(() =>{
        setColorAnswer(0);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over"){
      setNewPontos(0,0);
      setTimeout(() =>{
        setColorAnswer(0);
        navigate("/GameOver");
        setNewContainer(1);
      },1500);
    } else if (rule === "Score"){
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    } else {
      setTimeout(() =>{
        setColorAnswer(0);
        if(nivel === 0){
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        }else{
          setNewNivel(2);
          const atividade = conteudoDificil[0].id_tipo;
          setNewAtividade(atividade);
        }
      },1500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    countClick >= 5 ? setBlockButton(false) : setBlockButton(true)
  }, [countClick, setBlockButton]);
  
  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
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