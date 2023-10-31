import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { FooterBtnHome } from "../../components/FooterBtnHome";
import { LineSeparator } from "../../components/LineSeparator";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import { LessonContext } from "../../context/lesson";

import Robo from "../../assets/RoboGO.png";
import Fundo from "../../assets/Fundo.png";
import Dollars from "../../assets/Dollar.svg";
import Xp from "../../assets/Xp.svg";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Header, Main, Top, Middle, AvatarArea, Bottom, AreaItem, Text, ButtonRed } from "./styles";

export const GameOver = () => {
  const {timeElapsed} = useContext(LessonContext);

  const [name, setName] = useState("---");
  const [time, setTime] = useState("");
  
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

  useEffect(() => {
    const cookies = new Cookies();
    setName(cookies.get("raf"));
    //time
    let minutes = Math.floor(timeElapsed / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    let seconds = timeElapsed - minutes * 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds.toString();
    let hours = Math.floor(timeElapsed / 3600);
    hours = hours < 10 ? `0${hours}` : hours.toString;
    setTime(`${hours}:${minutes}:${seconds}`);
  },[]);

  const handleTryAgain = () => {
    navigate("/LessonSelection");
  }

  return (
    <Container>
      <Header>
        <img src={Fundo} alt="" className="fundoBg" />
        <Top>
          <ButtonMenuHeader />
          <ButtonCloseHeader />
        </Top>
        <Middle>
          <AvatarArea>
            <img src={Robo} alt="" />
            <p>Camila Eduarda</p>
          </AvatarArea>
          <h2>Game Over</h2>
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
        <ButtonRed
          onClick={handleTryAgain}
          title="Try Again"
          w="260px"
          h="56px"
        ><p>Try Again</p></ButtonRed>
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