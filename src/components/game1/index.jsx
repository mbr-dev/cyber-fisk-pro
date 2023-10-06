import { useState, useContext, useEffect } from "react";

import { Loading } from "../Loading";
import { TitleLesson } from "../TitleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { SubTitleLesson } from "../SubTitleLesson";
import { LessonContext } from "../../context/lesson";

import { TrocaAtividade } from "../../utils/regras";
import Button from "@mui/material/Button";
import { URL_HMLG } from "../../config/infos";
import { L1_T1_Facil } from "../../utils/lesson1_Task1";

import { Game1Content, Game1Container, Game1Main } from "./styles";

export const Game1 = () => {
  const { setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, setTimeElapsed, timeElapsed } = useContext(LessonContext);
  console.log("GAME TIME: ", timeElapsed);

  const [idClick, setIdClick] = useState([0, 1, 2]);
  const [rodada, setRodada] = useState(0);
  const [pergunta, setPergunta] = useState('');
  const [sortNum, setSortNum] = useState([]);
  const [images, setImages] = useState([]);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [bloqueia, setBloqueia] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = () => {
    const tam = L1_T1_Facil.length;
    let temp = [];

    for (let a = 0; a < tam; a++) {
      temp.push(a);
    }

    temp = temp.sort(() => Math.random() - 0.5); // embaralha o array

    setSortNum(temp);
    setPergunta(L1_T1_Facil[temp[rodada]].pergunta); // pega o valor da rodada

    let tempImg = [];
    let tempSortNum = idClick;

    tempSortNum = tempSortNum.sort(() => Math.random() - 0.5); // embaralha as resposta
    setIdClick(tempSortNum);

    for (let a = 0; a < 3; a++) {
      tempImg.push(`Images/pro/game1/F_${temp[rodada]}_${tempSortNum[a]}.png`);
    }

    setImages(tempImg);
    setBloqueia(false);
  }

  const newRodada = (num) => {
    setPergunta(L1_T1_Facil[sortNum[num]].pergunta);

    let tempImg = [];
    let tempSortNum = idClick;

    tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
    setIdClick(tempSortNum);

    for (let a = 0; a < 3; a++) {
      tempImg.push(`Images/pro/game1/F_${sortNum[num]}_${tempSortNum[a]}.png`);
    }

    setImages(tempImg);
    setBloqueia(false);
  }

  const handleClick = (id) => {
    if (bloqueia) {
      return
    }

    setBloqueia(true);
    let tempA = acertos;

    if (idClick[id] === 0) {
      tempA++;
      setNewPontos(0, (tempA));
      setAcertos(tempA);
    } else {
      let tempE = erros;
      tempE++;
      setErros(tempE);
    }

    let tempR = rodada;
    tempR++;
    setRodada(tempR);
    let tempGeral = rodadaGeral;
    tempGeral++;
    setNewRodada(tempGeral);
    // const playAudio = new Audio(idClick[id] === 0 ? somAcerto : somErro);
    // playAudio.play();
    //troca de nivel
    if (tempA == 2) {
      setTimeout(() => {
        setNewLesson(1);
      }, 1000);
    }

    const regra = TrocaAtividade(0, tempGeral, tempA, tempR);

    if (regra === "Continua") {
      setTimeout(() => {
        newRodada(tempR);
      }, 1000);
    } else if (regra === "Game over") {
      setNewPontos(0, 0);
      setTimeout(() => {
        alert('GAME OVER!!');
        setNewContainer(1);
      }, 1000);
    } else {
      //troca de nivel
      setTimeout(() => {
        setNewLesson(1);
      }, 1000);
    }
  }

  useEffect(() => {
    loadLesson();
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (rodadaGeral < 10) {
        setTimeElapsed(state => {
          return state + 1
        })
      }
      
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed, rodadaGeral])

  return (
    <Game1Container>
      {isLoading &&
        <Loading />
      }

      <HeaderLesson numStart={`Task 1`} numEnd={`Task 2`} />

      {images.length > 0 &&
        <Game1Main>
          <TitleLesson title="Choose the correct alternative" />
          <SubTitleLesson title={pergunta} />

          <Game1Content>
            {images.map((image, index) => {
              return (
                <Button key={index}
                  className="btn"
                  onClick={() => {handleClick(index)}}
                >
                  <img src={`${URL_HMLG}${image}`} className="img" />
                </Button>
              )
            })}
          </Game1Content>
        </Game1Main>
      }
    </Game1Container>
  )
}