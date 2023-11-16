import Confetti from "react-confetti"
import Cookies from "universal-cookie";
import { apiQAS } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { Loading } from "../../components/Loading";
import { FooterBtnHome } from "../../components/FooterBtnHome";
import { LineSeparator } from "../../components/LineSeparator";
import { Notifications } from "../../components/Notifications";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import { CyberContext } from "../../context/cyber";
import { LessonContext } from "../../context/lesson";

import Xp from "../../assets/Xp.svg";
import Robo from "../../assets/RoboWD.png";
import Fundo from "../../assets/Fundo.png";
import Dollars from "../../assets/Dollar.svg";
import Confetes from "../../assets/Confetes.png";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Header, Main, Top, Middle, AvatarArea, Bottom, Bottom2, AreaItem, AreaItem2, Text, ButtonRed, IconAvatar, Content, ButtonClose, Div } from "./styles";

export const WellDone = () => {
  const {timeElapsed, dataInicio, numTask, numSelLesson} = useContext(LessonContext);
  const { book, chooseNotification } = useContext(CyberContext);

  const [name, setName] = useState("---");
  const [dollar, setDollar] = useState(0);

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  const phrase = [
    "Good job!",
    "Keep up the good work!",
    "You doing awesome! Congrats!",
    "Your efforts are truly impressive. Congratulations.",
    "You’re a true champion!",
    "Keep up the excellent work!"
  ]

  const randomPhrase = Math.floor(Math.random() * phrase.length);
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [error, setError] = useState(false);
  const [xpAtividade, setXPAtividade] = useState(0);
  const [salvou, setSalvou] = useState(false);

  const navigate = useNavigate();

  const salvar = async(tempoCronometro) =>{
    if(salvou) return;
    setSalvou(true);
    setIsLoading(true);
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
      if(dolar > 0)
      {
        await apiQAS.get(`/FiskDolars/Registrar?raf=${raf}&tipo=credito&descricao=lesson${numSelLesson}-task${numTask}&valor=${dolar}`)
        .then((res) =>{
          if(res.data.erro !== null){
            chooseNotification(3);
            //setMsgError(res.data.erro);
            setMsgError(res.data.erro.toString());
            setError(true);
            setIsLoading(false);
            return;
          }
        })
      }
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
          //setMsgError(resp.data.erro);
          setMsgError(resp.data.erro.toString());
          setError(true);
        }
        setIsLoading(false);
      })
    } catch(error) {
      setIsLoading(false);
      chooseNotification(3);
      //setMsgError(error);
      setMsgError(error.toString());
      setError(true);
    }
  }

  function clickAlert(){
    setError(false);
  }

  useEffect(() => {
    const cookies = new Cookies();
    setName(cookies.get('raf'));
    setDollar(cookies.get('dolar'));
    //time
    let minutes = Math.floor(timeElapsed / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    let seconds = timeElapsed - minutes * 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds.toString();
    let hours = Math.floor(timeElapsed / 3600);
    hours = hours < 10 ? `0${hours}` : hours.toString;
    setTime(`${hours}:${minutes}:${seconds}`);
    salvar(`${hours}:${minutes}:${seconds}`);
  },[]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Confetti numberOfPieces={120} />
      {error ? <Notifications description={msgError} event={clickAlert}/> : null}

      <Header>
        <img src={Fundo} alt="" className="fundoBg" />
        <Top>
          <ButtonMenuHeader />
          {!isDesktop && <ButtonCloseHeader />}
        </Top>

        <Middle>
          <AvatarArea>
            <img src={Confetes} alt="" className="bgConfetes" />
            <img src={Robo} alt="" />
            <p>{name}</p>
          </AvatarArea>
          <h2>WELL DONE!</h2>
        </Middle>
        
        {!isDesktop &&
          <Bottom>
            <AreaItem>
              <img src={Dollars} alt="" />
              <span>{dollar}</span>
              <p>Fisk Dollars</p>
            </AreaItem>
            <LineSeparator wl="80%" bg={defaultTheme.white} />
            <AreaItem style={{marginRight: "64px"}}>
            <img src={Xp} alt="" />
            <span>{xpAtividade}</span>
            <p>Xp</p>
            </AreaItem>
          </Bottom>}

        {isDesktop &&
          <ButtonRed>
            <IconAvatar>
              <img src={Robo} alt="" />
            </IconAvatar>
            <p>Boost your avatar</p>
          </ButtonRed>}
      </Header>

      <Content>
        <Main>
          {isDesktop && 
            <ButtonClose>
              <ButtonCloseHeader />
            </ButtonClose>}

          {!isDesktop &&
            <ButtonRed>
              <IconAvatar>
                <img src={Robo} alt="" />
              </IconAvatar>
              <p>Boost your avatar</p>
            </ButtonRed>}

          {isDesktop &&
            <Bottom2>
              <img src={Fundo} alt="" className="fundoBg" />
              <AreaItem2 style={{ marginLeft: "42px"}}>
                <img src={Dollars} alt="" />
                <span>{dollar}</span>
                <p>Fisk Dollars</p>
              </AreaItem2>
              <LineSeparator wl="80%" bg={defaultTheme.white} />
              <AreaItem2 style={{marginRight: "64px"}}>
              <img src={Xp} alt="" />
              <span>{xpAtividade}</span>
              <p>Xp</p>
              </AreaItem2>
            </Bottom2>}

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

        <FooterBtnHome />
      </Content>
    </Container>
  )
}