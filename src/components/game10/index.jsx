import { useState, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonBg } from "../ButtonBg";
import { SubTitleLesson } from "../subTitleLesson";
import { SubTitleLessonAudio } from "../subTitleLessonAudio";

import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";
import { URL_FISKPRO } from "../../config/infos";

import { defaultTheme } from "../../themes/defaultTheme";
import { Main, Container, Input } from "./styles";

export const Game10 = () => {
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio,
    nivel, conteudoFacil, conteudoMedio, conteudoDificil,
    pontosD, pontosF, pontosM, setNewAtividade, setNewNivel,
    numSelLesson, numTask } = useContext(LessonContext);
  
  const navigate = useNavigate();

  const [colorAnswers, setColorAnswer] = useState(0);
  const [sound, setSound] = useState(null);
  const [answer, setAnswer] = useState("");
  const [text, setText] = useState("");
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadLesson = useCallback(() => {
    let totalOfSounds = 0;
    let tempData;
    if(nivel === 0){
      setData(conteudoFacil);
      tempData = conteudoFacil;
      totalOfSounds = conteudoFacil.length;
    }else if(nivel === 1){
      setData(conteudoMedio);
      tempData = conteudoMedio;
      totalOfSounds = conteudoMedio.length;
    }else{
      setData(conteudoDificil);
      tempData = conteudoDificil;
      totalOfSounds = conteudoDificil.length;
    }
    
    let tempSounds = [];
    for (let a = 0; a < totalOfSounds; a ++) {
      tempSounds.push(a);
    }
    tempSounds = tempSounds.sort(() => Math.random() - 0.5);
    setRandomNumber(tempSounds);

    setSound(tempData[tempSounds[round]].pergunta);
    let items = JSON.parse(tempData[tempSounds[round]].conteudo.resposta.replace(/'/g, "’"));
    //let tempAnswer = tempData[tempSounds[round]].resposta.replace(/'/g, "’");
    setAnswer(items);
  }, [setRandomNumber, setSound, setAnswer])

  const newRound = (number) => {
    setText("");
    setSound(tempData[randomNumber[number]].pergunta);
    let tempAnswer = tempData[randomNumber[number]].resposta.replace(/'/g, "’");
    setAnswer(tempAnswer);
  }

  const handleVerifyWord = (event) => {
    event.preventDefault();
    if (playAudio) return;
    
    let tempWord = text;
    let tempRightPoints = rightPoints;
    let tempColorA = colorAnswers;

    tempWord = tempWord.replace(/'/g, "’");

    if (tempWord === answer) {
      tempColorA = 1;
      setColorAnswer(tempColorA);
      tempRightPoints += 3;
      setRightPoints(tempRightPoints);
      setNewPontos(2, tempRightPoints);
    } else {
      tempColorA = 2;
      setColorAnswer(tempColorA);
      let tempEr = wrongPoints;
      tempEr++;
      setWrongPoints(tempEr);
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
    } else if (rule === "Game over") {
      setNewPontos(0, 0);
      navigate('/GameOver');
      setTimeout(() => {
        setOptionColor([0, 0, 0]);
        setNewContainer(1);
      }, 1500);
    }else if (rule === "Score"){
        const pontos = Score(pontosF, pontosM, pontosD);
        const page = ScoreFinal(pontos, numSelLesson, numTask);
        navigate(`/${page}`);
      }else {
        setTimeout(() => {
          setOptionColor([0, 0, 0]);
          if(nivel === 0){
            setNewNivel(1);
            const atividade = conteudoMedio[0].id_tipo;
            setNewAtividade(atividade);
          }else{
            setNewNivel(2);
            const atividade = conteudoDificil[0].id_tipo;
            setNewAtividade(atividade);
          }
        }, 1500);
      }
    }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    text.trim() === "" ? setBlockButton(true) : setBlockButton(false);
  }, [text, setBlockButton]);

  return (
    <Container>
      <SubTitleLesson title="Write what you hear." />
      <SubTitleLessonAudio audio={`${URL_FISKPRO}sounds/essentials1/lesson3/${sound}.mp3`} />
      
      <Main>
        <form id="myForm" onSubmit={handleVerifyWord}>
          <Input 
            placeholder="Type here"
            maxLength={100}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              backgroundColor: colorAnswers === 0 ? "" : colorAnswers === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
              color: colorAnswers === 0 ? "" : defaultTheme.white,
              border: colorAnswers === 0 ? "" : "none",
            }}
          />
        </form>
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