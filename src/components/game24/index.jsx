import { useCallback, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { SubTitleLessonAudio } from "../subTitleLessonAudio";

import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { Container, Form, Main, Input, ButtonCheck } from "./styles";

export const Game24 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, playAudio, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

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
  const [cancelAudio, setCancelAudio] = useState(false);

  const loadLesson = useCallback(async() => {
    setIsLoading(true);

    let dataLength = 0;
    let tempData;
    
    if (!conteudoFacil || !conteudoMedio || !conteudoDificil) {
      navigate("/LessonSelected");
      return;
    }

    if (nivel === 0) {
      setData(conteudoFacil);
      tempData = conteudoFacil;
      dataLength = conteudoFacil.length;
    } else if(nivel === 1) {
      setData(conteudoMedio);
      tempData = conteudoMedio;
      dataLength = conteudoMedio.length;
    } else {
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

    setSound(items.audio);
    setQuestion(items.pergunta);
    setAnswer0(items.option0);
    setAnswer1(items.option1);
    setAnswer2(items.option2);
    setAnswer3(items.option3);
    setAnswer4(items.option4);

    setIsLoading(false);
  }, [setIsLoading, setData, round, setRandomNumber, setSound, setQuestion, setAnswer0, setAnswer1, setAnswer2, setAnswer3, setAnswer4]);

  const newRound = (number) => {
    setText0("");
    setText1("");
    setText2("");
    setText3("");
    setText4("");
    setCancelAudio(false);

    const items = JSON.parse(data[randomNumber[number]].conteudo);

    setSound(items.audio);
    setQuestion(items.pergunta);
    setAnswer0(items.option0);
    setAnswer1(items.option1);
    setAnswer2(items.option2);
    setAnswer3(items.option3);
    setAnswer4(items.option4);
  }

  const handleVerify = (event) => {
    if (blockButton || playAudio) return;
    setBlockButton(true);

    event.preventDefault();

    let tempRightPoints;

    if (
      text0 === answer0 && 
      text1 === answer1 && 
      text2 === answer2 && 
      text3 === answer3 && 
      text4 === answer4
      ) {
        const newStatus = [...statusColor];
        newStatus[rodadaGeral] = 1;
        setStatusColor(newStatus);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 2;
      setStatusColor(newStatus);

      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);
    }

    setCancelAudio(true);

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const rule = TrocaAtividade(nivel, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() =>{
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(nivel, 0);
      setTimeout(() => {
        navigate("/GameOver");
        setNewContainer(1);
        setStatusColor([0,0,0,0,0,0,0,0,0,0]);
      }, 2000);
    } else if (rule === "Score") {
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      setTimeout(() => {
        navigate(`/${page}`);
        setStatusColor([0,0,0,0,0,0,0,0,0,0]);
      }, 2000);
    } else {
      setTimeout(() =>{
        if (nivel === 0) {
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        } else {
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
      <SubTitleLessonAudio stopAudio={cancelAudio} audio={`${URL_FISKPRO}sounds/essentials1/lesson${numSelLesson}/${sound}.mp3`} />

      <Main>
        <Form id="myForm" onSubmit={handleVerify}>
          <label>{question[0]}</label>
          <Input
            type="text"
            value={text0}
            onChange={(e) => setText0(e.target.value)}
            required
          />

          <label>{question[1]}</label>
          <Input
            type="text"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            required
          />

          <label>{question[2]}</label>
          <Input
            type="text"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            required
          />

          <label>{question[3]}</label>
          <Input
            type="text"
            value={text3}
            onChange={(e) => setText3(e.target.value)}
            required
          />

          <label>{question[4]}</label>
          <Input
            type="text"
            value={text4}
            onChange={(e) => setText4(e.target.value)}
            required
          />

          <label>{question[5]}</label>
        </Form>

        <ButtonCheck form="myForm" type="submit" disabled={blockButton}>
          <p>Check</p>
        </ButtonCheck>
      </Main>
    </Container>
  )
}