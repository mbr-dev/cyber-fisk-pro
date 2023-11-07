import { useContext } from "react";

import { CyberContext } from "../../context/cyber";
import { translateFooter } from "../../utils/Translate";

import Instagram from "./images/iconInstagram.svg";
import logoFisk from "./images/logoFiskFooter.png";
import Facebook from "./images/iconFacebook.svg";
import Youtube from "./images/iconYoutube.svg";

import { Container, Main } from "./styles";

export function Footer() {
  const { selectLanguage } = useContext(CyberContext);

  const isDesktop = window.matchMedia("(min-width: 1280px)").matches;

  return (
    <Container>
      {!isDesktop && 
        <>
          {selectLanguage === 0 ? <p>{translateFooter[0]}</p> : selectLanguage === 1 ? <p>{translateFooter[1]}</p> : <p>{translateFooter[2]}</p>}
        </>
      }
      

      <Main>
        <img src={logoFisk} alt="Logo Fisk" />

        {isDesktop && 
          <>
            {selectLanguage === 0 ? <p>{translateFooter[0]}:</p> : selectLanguage === 1 ? <p>{translateFooter[1]}:</p> : <p>{translateFooter[2]}:</p>}
          </>
        }

        <a href="https://www.youtube.com/@fiskoficial" target="_blank"><img src={Youtube} alt="icon youtube" className="iconFooter" /></a>
        <a href="https://www.instagram.com/fiskoficial/" target="_blank"><img src={Instagram} alt="icon instagram" className="iconFooter" /></a>
        <a href="https://www.facebook.com/fiskcentrodeensino/" target="_blank"><img src={Facebook} alt="icon facebook" className="iconFooter" /></a>
      </Main>
    </Container>
  )
}