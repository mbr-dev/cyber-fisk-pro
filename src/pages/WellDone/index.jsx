import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { LessonContext } from "../../context/lesson";

import Confetti from "react-confetti";

import { ButtonBg } from "../../components/ButtonBg";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { LineSeparator } from "../../components/LineSeparator";

import DollarImg from "../../assets/Dollar.svg";
import ConfetesImg from "../../assets/Confetes.png";
import MulherSvg from "./images/Mulher.svg";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Header, Main, AreaAvatar, AreaInfo, AreaXp, Avatar, AreaXpInfo, AvatarImg, AreaInfoBottom, Top, AreaButton } from "./styles";

export const WellDone = () => {
  const {timeElapsed} = useContext(LessonContext);

  const [name, setName] = useState('---');
  const [dollar, setDollar] = useState(0);
  const [time, setTime] = useState('');
 
  const navigate = useNavigate();

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

  const home = () => {
    navigate('/Home');
  }

  return (
    <Container>
      <Confetti 
        numberOfPieces={130}
        gravity={0.03}
      />
      <Header>
        <Top>
          <ButtonMenuHeader />
          <ButtonCloseHeader />
        </Top>
        <AreaAvatar>
          <img src={ConfetesImg} alt="" />
          <Avatar>
            <AvatarImg>
              <img src={MulherSvg} alt="" />
            </AvatarImg>
            <p>{name}</p>
          </Avatar>
          <h2>WELL DONE!</h2>
        </AreaAvatar>
        <AreaXp>
          <AreaXpInfo>
            <img src={DollarImg} alt="Dollar" />
            <span>{dollar}</span>
            <p>Fisk Dollar</p>
          </AreaXpInfo>
        </AreaXp>
      </Header>

      <Main>
        <AreaInfo>
          <ButtonBg title="Boost your avatar" w="15.875rem" h="2.5rem" />
          <p>Activities done in</p>
          <span>{time}</span>
          <AreaInfoBottom>
            <p>You were better then 30</p>
            <p>people in your level.</p>
          </AreaInfoBottom>
        </AreaInfo>
        <AreaButton>
          <LineSeparator w="18rem" bg={defaultTheme["gray-200"]} />
          <ButtonBg title="Home" w="15rem" h="2rem" onPress={home}/>
        </AreaButton>
      </Main>
    </Container>
  )
}