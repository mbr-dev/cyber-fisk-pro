import { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Form } from "./styles";

export const Game16 = () => {
  const {
    rodadaGeral, setNewRodada, setNewContainer, setNewPontos, setNewLesson, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);
  
  const navigate = useNavigate();

  const [colorAnswers, setColorAnswer] = useState(0);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [text, setText] = useState("");
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    setIsLoading(true);

    let dataLength = 0;
    let tempData;
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
    for (let a = 0; a < dataLength; a ++) {
      tempRandom.push(a);
    }
    tempRandom = tempRandom.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandom);

    const items = JSON.parse(tempData[tempRandom[round]].conteudo);
    
    setQuestion(items.pergunta);
    setAnswer(items.resposta.replace(/'/g, "’"));
    setIsLoading(false);
  }, [setIsLoading, round, setData, data, setRandomNumber, setQuestion, setAnswer]);

  const newRound = (number) => {
    setText("");
    const items = JSON.parse(data[randomNumber[number]].conteudo);
    setQuestion(items.pergunta);
    setAnswer(items.resposta.replace(/'/g, "’"));
  }

  const handleVerify = (event) => {
    event.preventDefault();
    
    let tempWord = text;
    let tempRightPoints;
    let tempColorA = colorAnswers;

    tempWord = tempWord.replace(/'/g, "’");

    if (tempWord.toLowerCase() === answer.toLowerCase()) {
      tempColorA = 1;
      setColorAnswer(tempColorA);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(2, tempRightPoints);
    } else {
      tempColorA = 2;
      setColorAnswer(tempColorA);

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

    if (rule === "Continua") {
      setTimeout(() =>{
        setColorAnswer(0);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0,0);
      setTimeout(() =>{
        setColorAnswer(0);
        navigate("/GameOver");
        setNewContainer(1);
      },1500);
    } else if (rule === "Score") {
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
    } else {
      setTimeout(() =>{
        setColorAnswer(0);
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
    text.trim() === "" ? setBlockButton(true) : setBlockButton(false);
  }, [text, setBlockButton]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Make questions for the answers." />

      <Main>
        <Form id="myForm" onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Type here"
            maxLength={50}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              backgroundColor: colorAnswers === 0 ? "" : colorAnswers === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
              color: colorAnswers === 0 ? "" : defaultTheme.white,
              border: colorAnswers === 0 ? "" : "none",
            }}
          />
        </Form>

        <p>{question}</p>
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