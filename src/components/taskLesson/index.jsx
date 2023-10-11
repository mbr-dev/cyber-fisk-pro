import { useState, useContext, useEffect } from "react";
import { Container } from "./styles";
import { LessonContext } from "../../context/lesson";
import { CyberContext } from "../../context/cyber";
import { HeaderLesson } from "../HeaderLesson";
import { api } from "../../lib/api";
//Games
import { Game1 } from "../game1";
import { Game2 } from "../game2";
import { Game3 } from "../game3";
import { Game4 } from "../game4";
import { Game5 } from "../game5";
import { Game6 } from "../game6";
import { Game7 } from "../game7";
import { Game8 } from "../game8";
import { Game9 } from "../game9";
import { Game10 } from "../game10";
import { Game11 } from "../game11";
import { Game12 } from "../game12";
import { Game13 } from "../game13";
import { Game14 } from "../game14";
import { Game15 } from "../game15";
import { Game16 } from "../game16";
import { Game17 } from "../game17";
import { Game18 } from "../game18";
import { Game19 } from "../game19";
import { Game20 } from "../game20";
import { Game21 } from "../game21";
import { Game22 } from "../game22";

export const TaskLesson = () => {
  const {
    setNewRodada, numTask, numAtividade, numSelLesson, setNewAtividade, setNewConteudoFacil, setNewConteudoMedio, setNewConteudoDificil, setNewNivel
  } = useContext(LessonContext);
  const { book } = useContext(CyberContext);
  const [strStart, setStrStart] = useState('');
  const [strEnd, setStrEnd] = useState('');

  const loadContent = async () => {
    await api.get(`/CyberProAtividades/Retorno?id_livro=${book.id}&num_lesson=${numSelLesson}&num_task=${numTask}`)
    .then((resp) =>{
      console.log('resp.data ==> ', resp.data);
      //pega o primeiro jogo do nivel facil e o primeiro tipo do jogo
      const atividade = resp.data.dados[0].dados_conteudo[0].id_tipo;
      //iniciando no nivel facil 0=facil, 1=medio, 2=dificil
      setNewConteudoFacil(resp.data.dados[0].dados_conteudo);
      setNewConteudoMedio(resp.data.dados[1].dados_conteudo);
      setNewConteudoDificil(resp.data.dados[2].dados_conteudo);
      setTimeout(()=>{
        console.log('TIME');
        setNewNivel(0);
        setNewRodada(0);
        setNewAtividade(atividade);
      }, 1000);
    })
  }

  const content = () => {
    switch(numAtividade) {
      case 0 :
        return(null);
      case 1 :
        return(<Game1 />);
      case 2 :
        return(<Game2 />);
      case 3 :
        return(<Game3 />);
      case 4 :
        return(<Game4 />);
      case 5 :
        return(<Game5 />);
      case 6 :
        return(<Game6 />);
      case 7 :
        return(<Game7 />);
      case 8 :
        return(<Game8 />);
      case 9 :
        return(<Game9 />);
      case 10 :
        return(<Game10 />);
      case 11 :
        return(<Game11 />);
      case 12 :
        return(<Game12 />);
      case 13 :
        return(<Game13 />);
      case 14 :
        return(<Game14 />);
      case 15 :
        return(<Game15 />);
      case 16 :
        return(<Game16 />);
      case 17 :
        return(<Game17 />);
      case 18 :
        return(<Game18 />);
      case 19 :
        return(<Game19 />);
      case 20 :
        return(<Game20 />);
      case 21 :
        return(<Game21 />);
      case 22 :
        return(<Game22 />);
    }
  }

  useEffect(()=>{
    if(numTask === 1){
      setStrStart('Task 1');
      setStrEnd('Task 2');
    }else if(numTask === 2){
      setStrStart('Task 2');
      setStrEnd('Super Task');
    }
    loadContent();
  },[numTask, setStrStart, ])

  return(
    <Container>
      <HeaderLesson numStart={strStart} numEnd={strEnd} />
      {content()}
    </Container>
  )
}