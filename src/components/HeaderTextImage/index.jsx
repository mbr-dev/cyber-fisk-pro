import Cookies from 'universal-cookie';
import { useState, useEffect } from "react";

import { ButtonMenuHeader } from "../ButtonMenuHeader";
import { ButtonCloseHeader } from "../ButtonCloseHeader";

import { AvatarImage } from "../AvatarImage";
import LogoFisk from "../../assets/logoFisk2.svg";
import bgHeaderImg from "../../assets/bgHeaderImg.png";

import { Container, TopHeader, BottomHeader } from "./styles";

export const HeaderTextImage
 = ({ title, hasAvatar, enabledClose }) => {
  const [name, setName] = useState("");

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
      </TopHeader>

      <BottomHeader>
        {hasAvatar && <AvatarImage userName={name} className="avatar" />}
        <img src={LogoFisk} className="logoFisk" alt="Logo Fisk"/>
      </BottomHeader>
    </Container>
  )
}