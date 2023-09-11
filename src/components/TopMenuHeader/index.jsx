import { ButtonMenuHeader } from "../ButtonMenuHeader";
import { ButtonCloseHeader } from "../ButtonCloseHeader";
import { AvatarImage } from "../AvatarImage";

import LogoFisk from "../../assets/logoFisk.png";

import { TopMenuHeaderContainer, TopHeader, BottomHeader } from "./styles"

export const TopMenuHeader = ({ title, hasAvatar, hasLogo }) => {

  return (
    <TopMenuHeaderContainer>
      <TopHeader>
        <ButtonMenuHeader />
        <p>{title}</p>
        <ButtonCloseHeader />
      </TopHeader>

      <BottomHeader>
        {hasAvatar &&
          <AvatarImage userName="Camila Eduarda" className="avatar" /> 
        }
        
        {hasLogo && 
          <img src={LogoFisk} className="logoFisk" alt="Logo Fisk"/>
        }
      </BottomHeader>
    </TopMenuHeaderContainer>
  )
}