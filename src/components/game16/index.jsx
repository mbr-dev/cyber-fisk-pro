import { useState, useEffect, useCallback, useContext } from "react";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";
import { HeaderLesson } from "../HeaderLesson";

import { api } from "../../lib/api";
import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";
import { L2_T2_Dificil } from "../../utils/Lesson2_Task";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Form } from "./styles";

export const Game16 = () => {
  const {setNewContainer, setNewPontos, rodadaGeral, setNewRodada} = useContext(LessonContext);

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

  const loadLesson = useCallback(async() => {
    //try {
     // setIsLoading(true);
      
     // const response  = await api.get("/L2_T2_Dificil");
     // setData(response.data);
      
      const dataLength = L2_T2_Dificil.length;
      
      let tempRandom = [];
      for (let a = 0; a < dataLength; a ++) {
        tempRandom.push(a);
      }
      tempRandom = tempRandom.sort(() => Math.random() - 0.5);
      setRandomNumber(tempRandom);
      
      setQuestion(L2_T2_Dificil[tempRandom[round]].pergunta);
      let tempAnswer = L2_T2_Dificil[tempRandom[round]].resposta.replace(/'/g, "’");
      setAnswer(tempAnswer);
      setIsLoading(false);
    //} catch(error) {
      //console.log("tente novamente mais tarde");
    //}
  }, [setIsLoading, round, setData, data, setRandomNumber, setQuestion, setAnswer]);

  const newRound = (number) => {
    setText("");
    setQuestion(L2_T2_Dificil[randomNumber[number]].pergunta);
    let tempAnswer = L2_T2_Dificil[randomNumber[number]].resposta.replace(/'/g, "’");
    setAnswer(tempAnswer);
  }

  const handleVerify = (event) => {
    event.preventDefault();
    
    let tempWord = text;
    let tempRightPoints = rightPoints;
    let tempColorA = colorAnswers;

    tempWord = tempWord.replace(/'/g, "’");

    if (tempWord.toLowerCase() === answer.toLowerCase()) {
      tempColorA = 1;
      setColorAnswer(tempColorA);

      tempRightPoints += 3;
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

    const rule = TrocaAtividade(2, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        setColorAnswer(0);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Score") {
      setTimeout(() => {
        const scoreFinal = Score(pontosF, pontosM, pontosD);
        let valorRank = 0;
        if (scoreFinal >= 70) {
          if (localStorage.getItem('cyber_pro_frequencia_task2')) {
            let frequencia = parseInt(localStorage.getItem('cyber_pro_frequencia_task2'));
            let oldRank = parseInt(localStorage.getItem('cyber_pro_rank'));
            frequencia++;
            if (frequencia === 4) {
              alert(`Parabéns voce ganhou: 10 Fisk Dollars`);
            }
            localStorage.setItem('cyber_pro_frequencia_task2', frequencia);
            const rank = PontosRank(frequencia, oldRank);
            valorRank = rank;
            localStorage.setItem('cyber_pro_rank', rank);
          } else {
            localStorage.setItem('cyber_pro_supertask', '1');
            localStorage.setItem('cyber_pro_msg_supertask', '1');
            localStorage.setItem('cyber_pro_frequencia_task2', 1);
            if (localStorage.getItem('cyber_pro_rank')) {
              let oldRank = parseInt(localStorage.getItem('cyber_pro_rank'));
              const rank = PontosRank(1, oldRank);
              valorRank = rank;
            } else {
              const rank = PontosRank(1, 0);
              valorRank = rank;
            }
            localStorage.setItem('cyber_pro_rank', valorRank);
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
    text.trim() === "" ? setBlockButton(true) : setBlockButton(false);
  }, [text, setBlockButton]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd />
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