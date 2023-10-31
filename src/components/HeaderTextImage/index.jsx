import Cookies from "universal-cookie";
import { useState, useEffect } from "react";

import { ButtonMenuHeader } from "../ButtonMenuHeader";
import { ButtonCloseHeader } from "../ButtonCloseHeader";

import LogoFisk from "../../assets/logoFisk2.svg";
import bgHeaderImg from "../../assets/bgHeaderImg.png";
import RoboWD from "../../assets/RoboWD.png";
import RoboPe from "../../assets/roboPe.png";

import { Container, TopHeader, BottomHeader, Avatar } from "./styles";

export const HeaderTextImage
 = ({ title, hasAvatar, enabledClose }) => {
  const [name, setName] = useState("");

  const isDesktop = window.matchMedia("(min-width: 1280px)").matches;

  useEffect(() => {
    const cookies = new Cookies();
    setName(cookies.get("raf"));
  }, []);

  return (
    <Container>
      <img src={bgHeaderImg} alt="" className="bgHeaderImg" />
      <TopHeader>
        <ButtonMenuHeader />
        {!isDesktop && <p>{title}</p>}
        {!enabledClose && !isDesktop && <ButtonCloseHeader />}
      </TopHeader>

      <BottomHeader>
        {hasAvatar && 
          <Avatar>
            {!isDesktop &&<img src={RoboWD} alt="" />}
            {isDesktop &&<img src={RoboPe} alt="" className="roboPe" />}
            <p>Maria Santos</p>
          </Avatar>
        }
        {!isDesktop && <img src={LogoFisk} className="logoFisk" alt="Logo Fisk"/>}
      </BottomHeader>
    </Container>
  )
}