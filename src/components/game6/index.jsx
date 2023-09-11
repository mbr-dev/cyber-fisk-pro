import { useState, useContext, useEffect } from "react";

import Button from "@mui/material/Button";
import { TitleLesson } from "../titleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { SubtitleLessonAudioImg } from "../subtitleLessonAudioImg";

import { LessonContext } from "../../context/lesson";
import { L1_T2_Dificil } from "../../utils/lesson1_Task2";
import { Score, PontosRank, TrocaAtividade } from "../../utils/regras";
import { URL_HMLG } from "../../config/infos";

import { defaultTheme } from "../../themes/defaultTheme";
import { Game6Container, Game6Content } from "./style";

export const Game6 = (props) => {
  const [idTipo, setIdTipo] = useState([0, 1, 2, 3, 4, 5]);
  const [idClick, setIdClick] = useState([0, 0, 0, 0, 0, 0]);
  const { playAudio, setNewContainer, setNewPontos, rodadaGeral, setNewRodada, pontosD, pontosF, pontosM } = useContext(LessonContext);
  const [rodada, setRodada] = useState(0);
  const [sortNum, setSortNum] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [bloqueia, setBloqueia] = useState(true);
  const [sound, setSound] = useState(null);
  const [contClick, setContClick] = useState(0);

  const loadLesson = () => {
    const tam = L1_T2_Dificil.length;
    let temp = [];

    for (let a = 0; a < tam; a++) {
      temp.push(a);
    }

    temp = temp.sort(() => Math.random() - 0.5);
  
    setSortNum(temp);
    setSound(`Images/pro/game4/ess1_l1/Task2D_${temp[rodada]}.mp3`);
    
    let tempResp = [];
    let tempSortNum = idTipo;
    tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
    setIdTipo(tempSortNum);

    for (let a = 0; a < L1_T2_Dificil[temp[rodada]].resposta.length; a++) {
      tempResp.push(L1_T2_Dificil[temp[rodada]].resposta[tempSortNum[a]]);
    }

    setRespostas(tempResp);
    setBloqueia(false);
  }

  const newRodada = (num) => {
    setSound(`Images/pro/game4/ess1_l1/Task2D_${sortNum[num]}.mp3`);
    let tempResp = [];
    let tempSortNum = idTipo;
    tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
    setIdTipo(tempSortNum);

    for (let a = 0; a < L1_T2_Dificil[sortNum[num]].resposta.length; a++) {
      tempResp.push(L1_T2_Dificil[sortNum[num]].resposta[tempSortNum[a]]);
    }

    setRespostas(tempResp);
    setBloqueia(false);
  }

  const handleClick = (id) => {
    if (bloqueia) {
      return;
    }
    if (playAudio) {
      return;
    }
    
    let clicks = contClick;
    let arr = idClick;
    clicks++;
    setContClick(clicks);

    let tempA = acertos;
    let tempR = rodada;
    let tempGeral = rodadaGeral;

    if (idTipo[id] === 0 || idTipo[id] === 1 || idTipo[id] === 2) {
      if (clicks < 3) {
        arr[id] = 1;
        setIdClick(arr);
        return;
      }

      tempA = tempA + 3;
      setNewPontos(2, tempA);
      setAcertos(tempA);
    } else {
      let tempE = erros;
      tempE++;
      setErros(tempE);
    }

    tempR++;
    setRodada(tempR);
    tempGeral++;
    setNewRodada(tempGeral);
    setBloqueia(true);
    clicks = 0;
    setContClick(clicks);
    arr = [0, 0, 0, 0, 0, 0];
    setIdClick(arr);

    //nivel, rodada, pontos, rodadaNivel
    const regra = TrocaAtividade(2, tempGeral, tempA, tempR);
    if (regra === "Continua") {
      setTimeout(() => {
        newRodada(tempR);
      }, 500);
    } else if (regra === "Score") {
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
      }, 500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, [])

  return (
    <Game6Container>
      <HeaderLesson numStart="Task 6" numEnd="Task 7" />

      <TitleLesson title="Choose the correct alternative" />
      <SubtitleLessonAudioImg audio={`${URL_HMLG}${sound}`} />

      <Game6Content>
        {respostas.map((resposta, index) => {
          return (
            <Button key={index} 
              className="btn" 
              onClick={() => handleClick(index)} style={{ backgroundColor: idClick[index] === 0 ? defaultTheme.white : defaultTheme["green-200"] }}
            >
              <p>{resposta}</p>
            </Button>
          )
        })}
      </Game6Content>
    </Game6Container>
  )
}