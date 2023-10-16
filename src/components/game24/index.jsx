import { useCallback, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";
import { SubTitleLessonAudio } from "../subTitleLessonAudio";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { L6_T1_Dificil } from "../../utils/lesson6_Task";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { Container, Form, Main, Input } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game24 = () => {
  const {
    setNewContainer, setNewPontos, rodadaGeral, setNewRodada, pontosD, pontosF, pontosM, nivel, playAudio
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [colorAnswers, setColorAnswer] = useState(0);
  const [data, setData] = useState([]);
  const [sound, setSound] = useState([]);
  const [question, setQuestion] = useState([]);
  const [answer0, setAnswer0] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [text0, setText0] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  /* arrumar a parte do ' para o ’ */

  const loadLesson = useCallback(async() => {
    const questionLength = L6_T1_Dificil.length;

    let tempRandom = [];
    for (let a = 0; a < questionLength; a++) {
      tempRandom.push(a);
    }
    //tempRandom = tempRandom.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandom);

    setSound(L6_T1_Dificil[tempRandom[round]].audio);

    setQuestion(L6_T1_Dificil[tempRandom[round]].pergunta);

    setAnswer0(L6_T1_Dificil[tempRandom[round]].option0);
    setAnswer1(L6_T1_Dificil[tempRandom[round]].option1);
    setAnswer2(L6_T1_Dificil[tempRandom[round]].option2);
    setAnswer3(L6_T1_Dificil[tempRandom[round]].option3);
    setAnswer4(L6_T1_Dificil[tempRandom[round]].option4);
  }, [setRandomNumber]);

  const newRound = (number) => {
    setText0("");
    setText1("");
    setText2("");
    setText3("");
    setText4("");
    
    setSound(L6_T1_Dificil[randomNumber[number]].audio);

    setAnswer0(L6_T1_Dificil[randomNumber[number]].option0);
    setAnswer1(L6_T1_Dificil[randomNumber[number]].option1);
    setAnswer2(L6_T1_Dificil[randomNumber[number]].option2);
    setAnswer3(L6_T1_Dificil[randomNumber[number]].option3);
    setAnswer4(L6_T1_Dificil[randomNumber[number]].option4);
  }

  const handleVerify = (event) => {
    event.preventDefault();

    if (blockButton || playAudio) return;

    setBlockButton(true);

    let tempRightPoints;
    let tempColor = colorAnswers;

    if (
      text0.replace(/'/g, "’") === answer0 && 
      text1.replace(/'/g, "’") === answer1 && 
      text2.replace(/'/g, "’") === answer2 && 
      text3.replace(/'/g, "’") === answer3 && 
      text4.replace(/'/g, "’") === answer4
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
    } else if (rule === "Score") {
  
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    text0.trim() === "" &&
    text1.trim() === "" &&
    text2.trim() === ""  &&
    text3.trim() === "" &&
    text4.trim() === "" 
    ? setBlockButton(true) : setBlockButton(false);
  }, [text0, text2, text3, text4, text1, setBlockButton]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="LISTEN TO COMPLETE THE PARAGRAPH." />
      <SubTitleLessonAudio audio={`${URL_FISKPRO}sounds/essentials1/lesson6/${sound}.mp3`} />

      <Main>
        <Form id="myForm" onSubmit={handleVerify}>
          <label style={{
            color: colorAnswers === 1 ? defaultTheme["green-200"] : colorAnswers === 2 ? defaultTheme["red-200"] : "",
          }}>{question[0]}</label>
          <Input
            type="text"
            style={{width: "7rem"}}
            value={text0}
            onChange={(e) => setText0(e.target.value)}
            required
          />

          <label style={{
            color: colorAnswers === 1 ? defaultTheme["green-200"] : colorAnswers === 2 ? defaultTheme["red-200"] : "",
          }}>{question[1]}</label>
          <Input
            type="text"
            style={{width: "5.5rem"}}
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            required
          />

          <label style={{
            color: colorAnswers === 1 ? defaultTheme["green-200"] : colorAnswers === 2 ? defaultTheme["red-200"] : "",
          }}>{question[2]}</label>
          <Input
            type="text"
            style={{width: "10.75rem"}}
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            required
          />

          <label style={{
            color: colorAnswers === 1 ? defaultTheme["green-200"] : colorAnswers === 2 ? defaultTheme["red-200"] : "",
          }}>{question[3]}</label>
          <Input
            type="text"
            style={{width: "7.25rem"}}
            value={text3}
            onChange={(e) => setText3(e.target.value)}
            required
          />

          <label style={{
            color: colorAnswers === 1 ? defaultTheme["green-200"] : colorAnswers === 2 ? defaultTheme["red-200"] : "",
          }}>{question[4]}</label>
          <Input
            type="text"
            style={{width: "8rem"}}
            value={text4}
            onChange={(e) => setText4(e.target.value)}
            required
          />

          <label style={{
            color: colorAnswers === 1 ? defaultTheme["green-200"] : colorAnswers === 2 ? defaultTheme["red-200"] : "",
          }}>{question[5]}</label>
        </Form>
        <ButtonBg
          form="myForm"
          type="submit"
          disabledButton={blockButton || playAudio}
          title="Check"
          w="15.875rem"
          h="2.5rem"
          greenBtn
        />
      </Main>
    </Container>
  )
}