import { useContext } from "react";
import { AlignJustify, X } from "lucide-react";

import { CyberContext } from "../../context/cyber";

import { AvatarImage } from "../AvatarImage";

import LogoFisk from "../../assets/logoFisk.png";

import { BottomMenuHeader, TopMenuButton, TopMenuHeader, TopMenuProfileContainer, TopCloseButton } from "./styles";

export function TopMenuProfile() {
  const { selectLanguage } = useContext(CyberContext);

  return (
    <TopMenuProfileContainer>
      <TopMenuHeader>
        <TopMenuButton>
          <AlignJustify />
        </TopMenuButton>

        {selectLanguage === 0 && <p>Perfil</p>}
        {selectLanguage === 1 && <p>Profile</p>}
        {selectLanguage === 2 && <p>Perfil</p>}

        <TopCloseButton>
          <X />
        </TopCloseButton>
      </TopMenuHeader>

      <BottomMenuHeader>
        <AvatarImage userName="Camila Eduarda" />          
        <img src={LogoFisk} className="logoFisk" alt="Logo Fisk"/>
      </BottomMenuHeader>
    </TopMenuProfileContainer>
  )
}