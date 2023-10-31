import Confetti from "react-confetti"
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { FooterBtnHome } from "../../components/FooterBtnHome";
import { LineSeparator } from "../../components/LineSeparator";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import { LessonContext } from "../../context/lesson";

import Xp from "../../assets/Xp.svg";
import Robo from "../../assets/RoboWD.png";
import Fundo from "../../assets/Fundo.png";
import Dollars from "../../assets/Dollar.svg";
import Confetes from "../../assets/Confetes.png";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Header, Main, Top, Middle, AvatarArea, Bottom, AreaItem, Text, ButtonRed, IconAvatar } from "./styles";

export const WellDone = () => {
  const {timeElapsed} = useContext(LessonContext);

  const [name, setName] = useState("---");
  const [dollar, setDollar] = useState(0);
  const [time, setTime] = useState("");
 
  const navigate = useNavigate();

  const phrase = [
    "Good job!",
    "Keep up the good work!",
    "You doing awesome! Congrats!",
    "Your efforts are truly impressive. Congratulations.",
    "You’re a true champion!",
    "Keep up the excellent work!"
  ]

  const randomPhrase = Math.floor(Math.random() * phrase.length);

  useEffect(() => {
    const cookies = new Cookies();
    setName(cookies.get('raf'));
    setDollar(cookies.get('dollar'));
    //time
    let minutes = Math.floor(timeElapsed / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    let seconds = timeElapsed - minutes * 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds.toString();
    let hours = Math.floor(timeElapsed / 3600);
    hours = hours < 10 ? `0${hours}` : hours.toString;
    setTime(`${hours}:${minutes}:${seconds}`);
  },[]);

  return (
    <Container>
      <Confetti numberOfPieces={120} />
      <Header>
        <img src={Fundo} alt="" className="fundoBg" />
        <Top>
          <ButtonMenuHeader />
          <ButtonCloseHeader />
        </Top>
        <Middle>
          <AvatarArea>
            <img src={Confetes} alt="" className="bgConfetes" />
            <img src={Robo} alt="" />
            <p>Camila Eduarda</p>
          </AvatarArea>
          <h2>WELL DONE!</h2>
        </Middle>
        <Bottom>
          <AreaItem>
            <img src={Dollars} alt="" />
            <span>0</span>
            <p>Fisk Dollars</p>
          </AreaItem>
          <LineSeparator w="80%" bg={defaultTheme.white} />
          <AreaItem style={{marginRight: "64px"}}>
          <img src={Xp} alt="" />
          <span>0</span>
          <p>Xp</p>
          </AreaItem>
        </Bottom>
      </Header>

      <Main>
        <ButtonRed>
          <IconAvatar>
            <img src={Robo} alt="" />
          </IconAvatar>
          <p>Boost your avatar</p>
        </ButtonRed>
        <p>Activities done in</p>
        <span>00:00</span>

        <Text>
          <p>{phrase[randomPhrase]}</p>
        </Text>
      </Main>

      <FooterBtnHome hasLS title="Lesson Menu" />
    </Container>
  )
}