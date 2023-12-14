import { apiQAS } from "../../lib/api";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { Loading } from "../../components/Loading";
import { Notifications } from "../../components/Notifications";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { AreaFooterMiddleBtn } from "../../components/AreaFooterMiddleBtn";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";
import { AvatarCustomMetadeWG } from "../../components/AvatarCustomMetadeWG";

import { CyberContext } from "../../context/cyber";
import { LessonContext } from "../../context/lesson";

import FundoGoImg from "./images/FundoGO.png";
import Dollars from "../../assets/Dollar.svg";
import Xp from "../../assets/Xp.svg";

import { Container, Header, Main, Top, Middle, AvatarArea, Bottom, AreaItem, Text, ButtonRed, Content, ButtonClose, Div, AreaItem2, Bottom2, DivDesk, DivMobile, LineSeparator } from "./styles";

export const GameOver = () => {
  const {timeElapsed, dataInicio, numTask, numSelLesson} = useContext(LessonContext);
  const { book, chooseNotification } = useContext(CyberContext);

  const [time, setTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [error, setError] = useState(false);
  const [salvou, setSalvou] = useState(false);

  const navigate = useNavigate();

  const phrase = [
    "We know you can do better.",
    "Practice makes perfect. Try again!",
    "Just focus, and you’ll see progress!",
    "We know you can reach better results next time!",
    "Take this as a learning experience and try again!",
    "Remember, everyone faces challenges. Try it once more!"
  ]

  const randomPhrase = Math.floor(Math.random() * phrase.length);


  const salvar = async(tempoCronometro) => {
    if(salvou) return;
    setSalvou(true);
    const cookies = new Cookies();
    //gravar a data do acesso
    const newDate = new Date();
    //dia
    let date = newDate.getDate();
    if(date < 10) date = `0${date}`;
    //mes
    let month = newDate.getMonth()+1;
    if(month < 10) month = `0${month}`;
    //ano
    const year = newDate.getFullYear();
    //hora
    let hour = newDate.getHours();
    if(hour < 10) hour = `0${hour}`;
    //minutos
    let minute = newDate.getMinutes();
    if(minute < 10) minute = `0${minute}`;
    //segundos
    let second = newDate.getSeconds();
    if(second < 10) second = `0${second}`;
    const dateComplete = `${date}/${month}/${year} ${hour}:${minute}:${second}`;
     //convertendo o tempo em segundos
     const strSplit = tempoCronometro.split(':'); // split it at the colons
     // minutes are worth 60 seconds. Hours are worth 60 minutes.
     const seconds = (+strSplit[0]) * 60 * 60 + (+strSplit[1]) * 60 + (+strSplit[2]);
    try{
      const score = cookies.get("score");
      const raf = cookies.get("raf");
      const dolar = cookies.get("dolar");
      const xp = cookies.get("xp");
      setXPAtividade(xp);
      await apiQAS.get(`XPUsuario/Registrar?raf=${raf}&id_livro=${book.id}&num_lesson=${numSelLesson}&num_task=${numTask}&pontos_xp=${xp}&score=${score}&dolar=${dolar}&tempo=${seconds}&data_inicio=${dataInicio}&data_fim=${dateComplete}`)
      .then((resp) => {
        console.log('salvar ==> ', resp.data)
        if(resp.data.erro === null){
          cookies.remove("score");
          cookies.remove("dolar");
          cookies.remove("xp");
        }else{
          setIsLoading(false);
          chooseNotification(3);
          setMsgError(resp.data.erro);
          setError(true);
        }
        setIsLoading(false);
      })
    } catch(error) {
      setIsLoading(false);
      chooseNotification(3);
      setMsgError(error);
      setError(true);
    }
  }

  const clickAlert = () => {
    setError(false);
  }

  useEffect(() => {
    const cookies = new Cookies();
    //time
    let minutes = Math.floor(timeElapsed / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    let seconds = timeElapsed - minutes * 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds.toString();
    let hours = Math.floor(timeElapsed / 3600);
    hours = hours < 10 ? `0${hours}` : hours.toString;
    setTime(`${hours}:${minutes}:${seconds}`);
    //salvar(`${hours}:${minutes}:${seconds}`);
  },[]);

  const handleTryAgain = () => {
    navigate("/LessonSelection");
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      {error ? <Notifications description={msgError} event={clickAlert}/> : null}
      <Header style={{
        backgroundImage: `url("${FundoGoImg}")`
      }}>
        <Top>
          <ButtonMenuHeader />
          <DivMobile>
            <ButtonCloseHeader />
          </DivMobile>
        </Top>

        <Middle>
          <AvatarArea>
            <AvatarCustomMetadeWG hasName />
          </AvatarArea>
          <h2>Game Over</h2>
        </Middle>

        <DivMobile>
          <Bottom>
            <AreaItem>
              <img src={Dollars} alt="" />
              <span>0</span>
              <p>Fisk Dollars</p>
            </AreaItem>
            <LineSeparator />
            <AreaItem style={{marginRight: "64px"}}>
            <img src={Xp} alt="" />
            <span>0</span>
            <p>Xp</p>
            </AreaItem>
          </Bottom>
        </DivMobile>
        
        <DivDesk>
          <ButtonRed onClick={handleTryAgain}>
            <p>Try Again</p>
          </ButtonRed>
        </DivDesk>
      </Header>

      <Content>
        <Main>
          <ButtonClose>
            <ButtonCloseHeader />
          </ButtonClose>

          <DivMobile>
            <ButtonRed onClick={handleTryAgain}>
              <p>Try Again</p>
            </ButtonRed>
          </DivMobile>

          <Bottom2>
            <img src={FundoGoImg} alt="" className="fundoBg" />
            <AreaItem2>
              <img src={Dollars} alt="" />
              <span>0</span>
              <p>Fisk Dollars</p>
            </AreaItem2>
            <LineSeparator />
            <AreaItem2>
            <img src={Xp} alt="" />
            <span>0</span>
            <p>Xp</p>
            </AreaItem2>
          </Bottom2>

          <Div>
            <div>
              <p>Activities done in</p>
              <span>{time}</span>
            </div>
            <Text>
              <p>{phrase[randomPhrase]}</p>
            </Text>
          </Div>
        </Main>

        <AreaFooterMiddleBtn />
      </Content>
    </Container>
  )
}