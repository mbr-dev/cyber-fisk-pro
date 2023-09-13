import { useEffect, useState, useContext } from "react";
import { Volume2 } from "lucide-react";

import { HeaderLesson } from "../HeaderLesson";

import { L2_T1_Facil } from "../../utils/Lesson2_Task1";
import { LessonContext } from "../../context/lesson";

import SomImg from "./images/Som.svg";

import { Game7Container, Game7Main, AudioArea, AnswerRow, ButtonAnswer, ButtonAudio } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game7 = () => {
  const { setNewPontos } = useContext(LessonContext);

  const [idClick, setIdClick] = useState([0, 0, 0]);
  const [idClickAudio, setIdClickAudio] = useState([0, 1, 2]);
  const [rodada, setRodada] = useState(0);
  const [sortNum, setSortNum] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const [audios, setAudios] = useState([])
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [sound, setSound] = useState(null);
  const [bloqueia, setBloqueia] = useState(true);
  const [bloqueiaAudio, setBloqueiaAudio] = useState(false);

  const loadLesson = () => {
    const tam = L2_T1_Facil.length;
    let temp = [];

    for (let i = 0; i < tam; i++) {
      temp.push(i);
    }

    temp = temp.sort(() => Math.random() - 0.5);
    setSortNum(temp);
    setSound(`Images/pro/game5/ess1_l1/Task2M_${temp[rodada]}.mp3`);

    let tempResp = [];
    let tempSortNum = idClick;
    tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
    setIdClick(tempSortNum);
    
    for (let i = 0; i < 3; i++) {
      tempResp.push(L2_T1_Facil[temp[rodada]].resposta[tempSortNum[i]]);
    }

    let tempAudio = [];
    let tempSortAudio = idClickAudio;
    tempSortAudio = tempSortAudio.sort(() => Math.random() - 0.5);
    setIdClickAudio(tempSortAudio);

    for (let i = 0; i < 3; i++) {
      tempAudio.push(L2_T1_Facil[temp[rodada]].pergunta[tempSortAudio[i]]);
    }

    setAudios(tempAudio);
    setRespostas(tempResp);
    setBloqueia(false);
    setBloqueiaAudio(false);
  }

  const handleAudio = (audioIndex) => {
    if (!bloqueiaAudio) {
      setBloqueiaAudio(true);
      setIdClickAudio(audioIndex);
    }
  }

  const handleClick = (respostaIndex) => {
    if (!bloqueia) {
      setBloqueia(true);
      
      if (respostaIndex === idClickAudio) {
        let tempA = acertos + 2;        
        setNewPontos(1, tempA);
        setAcertos(tempA);
        alert('acerto');
      } else {
        let tempE = erros + 1;
        setErros(tempE);
        alert('erro');
      }

      setTimeout(() => {
        if (rodada < L2_T1_Facil.length - 1) {
          setRodada(rodada + 1);
          loadLesson();
        } else {
          alert("jogo termino")
        }
        setBloqueia(false);
      }, 1500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, [])

  return (
    <Game7Container>
      <HeaderLesson numStart="Task 1" numEnd="Task2" />

      <Game7Main>
        <p>Make pairs.</p>

        <AudioArea>
          <AnswerRow>
            {audios.map((audio, index) => {
              return (
                <ButtonAudio 
                  key={index} 
                  onClick={() => handleAudio(audio)}
                  style={bloqueiaAudio ? {opacity: 0.5} : {}}
                >
                  <Volume2 size={24} strokeWidth={2} />
                  <img src={SomImg} alt="" /> 
                </ButtonAudio>
              )
            })}
          </AnswerRow>

          <AnswerRow>
            {respostas.map((resposta, index) => {
              return (
                <ButtonAnswer 
                  key={index} 
                  onClick={() => handleClick(resposta)}
                  style={{ backgroundColor: idClick[index] === 0 ? defaultTheme.white : defaultTheme["green-200"] }}
                >
                  <p>{resposta}</p>
                </ButtonAnswer>
              )
            })}
          </AnswerRow>
        </AudioArea>
      </Game7Main>
    </Game7Container>
  )
}