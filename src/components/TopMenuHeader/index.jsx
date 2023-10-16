import { useState, useEffect } from "react";
import { ButtonMenuHeader } from "../ButtonMenuHeader";
import { ButtonCloseHeader } from "../ButtonCloseHeader";
import { AvatarImage } from "../AvatarImage";
import Cookies from 'universal-cookie';
import LogoFisk from "../../assets/logoFisk2.svg";

import { Container, TopHeader, BottomHeader } from "./styles";

export const TopMenuHeader = ({ title, hasAvatar, hasLogo, enabledClose }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    const cookies = new Cookies();
    setName(cookies.get("raf"));
  }, []);

  return (
    <Container>
      <TopHeader>
        <ButtonMenuHeader />
        <p>{title}</p>
        {enabledClose ? null :
          <ButtonCloseHeader />
        }
        
      </TopHeader>

      <BottomHeader>
        {hasAvatar &&
          <AvatarImage userName={name} className="avatar" /> 
        }
        
        {hasLogo && 
          <img src={LogoFisk} className="logoFisk" alt="Logo Fisk"/>
        }
      </BottomHeader>
    </Container>
  )
}