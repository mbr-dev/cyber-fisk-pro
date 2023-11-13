import Cookies from "universal-cookie";
import { useState, useEffect } from "react";

import { ButtonMenuHeader } from "../ButtonMenuHeader";
import { ButtonCloseHeader } from "../ButtonCloseHeader";

import LogoFisk from "../../assets/logoFisk2.svg";
import bgHeaderImg from "../../assets/bgHeaderImg.png";
import RoboWD from "../../assets/RoboWD.png";

import { Container, TopHeader, BottomHeader, Avatar } from "./styles";

export const HeaderTextImage = ({ hasAvatar, enabledClose, title }) => {
  const [name, setName] = useState("");

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  useEffect(() => {
    const cookies = new Cookies();
    setName(cookies.get("raf"));
  }, []);

  return (
    <Container>
      <img src={bgHeaderImg} alt="" className="bgHeaderImg" />
      <TopHeader>
        <ButtonMenuHeader />
        <p>{title}</p>
        {!enabledClose && <ButtonCloseHeader />}
        {isDesktop && <img src={LogoFisk} className="logoFiskD" alt="Logo Fisk"/>}
      </TopHeader>

      {!isDesktop &&
        <BottomHeader>
          {hasAvatar &&
            <Avatar>
              <img src={RoboWD} alt="" />
              <p>{name}</p>
            </Avatar>
          }
          <img src={LogoFisk} className="logoFisk" alt="Logo Fisk"/>
        </BottomHeader>
      }
    </Container>
  )
}