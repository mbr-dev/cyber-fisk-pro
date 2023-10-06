import { ButtonMenuHeader } from "../ButtonMenuHeader";
import { ButtonCloseHeader } from "../ButtonCloseHeader";
import { AvatarImage } from "../AvatarImage";

import LogoFisk from "../../assets/logoFisk.png";

import { Container, TopHeader, BottomHeader } from "./styles";

export const TopMenuHeader = ({ title, hasAvatar, hasLogo }) => {

  return (
    <Container>
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
    </Container>
  )
}