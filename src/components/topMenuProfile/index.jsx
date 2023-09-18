import { useContext } from "react";

import { CyberContext } from "../../context/cyber";

import { ButtonMenuHeader } from "../ButtonMenuHeader";
import { ButtonCloseHeader } from "../ButtonCloseHeader";

import { AvatarImage } from "../AvatarImage";
import LogoFisk from "../../assets/logoFisk.png";

import { BottomHeader, TopHeader, TopMenuProfileContainer } from "./styles";

export const TopMenuProfile = ({ title }) => {
  const { selectLanguage } = useContext(CyberContext);

  return (
    <TopMenuProfileContainer>
      <TopHeader>
        <ButtonMenuHeader />

        {selectLanguage === 0 && <p>Perfil</p>}
        {selectLanguage === 1 && <p>Profile</p>}
        {selectLanguage === 2 && <p>Perfil</p>}

        <ButtonCloseHeader />
      </TopHeader>

      <BottomHeader>
        <AvatarImage userName="Camila Eduarda" />          
        <img src={LogoFisk} className="logoFisk" alt="Logo Fisk"/>
      </BottomHeader>
    </TopMenuProfileContainer>
  )
}
