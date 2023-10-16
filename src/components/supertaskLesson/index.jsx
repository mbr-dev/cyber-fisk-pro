import { useState, useContext, useEffect } from "react";
import { Container } from "./styles";
import { LessonContext } from "../../context/lesson";
import { CyberContext } from "../../context/cyber";
import { HeaderLesson } from "../HeaderLesson";
import { api } from "../../lib/api";
//Games
import { GameSL1 } from "../game_sl1";
import { GameSL2 } from "../game_sl2";
import { GameSL3 } from "../game_sl3";
import { GameSL4 } from "../game_sl4";
import { GameSL5 } from "../game_sl5";

export const SuperTaskLesson = () => {
  const { setNewRodada, numTask, numAtividade, numSelLesson, setNewConteudoSuperTask} = useContext(LessonContext);
  const { book } = useContext(CyberContext);
  const [strStart, setStrStart] = useState('');
  const [strEnd, setStrEnd] = useState('');
  const [num, setNum] = useState(0);

  const loadContent = async () => {
    await api.get(`/SuperTaskAtividades/Retorno?id_livro=${book.id}&num_lesson=${numSelLesson}`)
    .then((resp) =>{
      console.log('resp.data ==> ', resp.data);
      setNewConteudoSuperTask(resp.data.dados[0].dados_conteudo);
      setTimeout(()=>{
        setNum(numSelLesson);
        setNewRodada(0);
      }, 1000);
    })
  }

  const content = () => {
    const value = parseInt(num);
    switch(value) {
      case 1 :
        return(<GameSL1 />);
      case 2 :
        return(<GameSL2 />);
      case 3 :
        return(<GameSL3 />);
      case 4 :
        return(<GameSL4 />);
      case 5 :
        return(<GameSL5 />);
    }
  }

  useEffect(()=>{
    if(numTask === '1'){
      setStrStart('Task 1');
      setStrEnd('Task 2');
    }else if(numTask === '2'){
      setStrStart('Task 2');
      setStrEnd('Super Task');
    }
    loadContent();
  },[])

  return(
    <Container>
      <HeaderLesson superTaskStart trophyEnd numStart="Super task" numEnd="Finish" />
      {content()}
    </Container>
  )
}