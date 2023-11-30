import { useContext } from "react";

import { CyberContext } from "../../context/cyber";

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
        <p>{selectLanguage === 0 ? "Para dicas e informações" : selectLanguage === 1 ? "For advice and information" : "Para consejos e información"}</p>
      }
      

      <Main>
        <img src={logoFisk} alt="Logo Fisk" />

        {isDesktop && 
          <p>{selectLanguage === 0 ? "Para dicas e informações" : selectLanguage === 1 ? "For advice and information" : "Para consejos e información"}</p>
        }

        <a href="https://www.youtube.com/@fiskoficial" target="_blank"><img src={Youtube} alt="icon youtube" className="iconFooter" /></a>
        <a href="https://www.instagram.com/fiskoficial/" target="_blank"><img src={Instagram} alt="icon instagram" className="iconFooter" /></a>
        <a href="https://www.facebook.com/fiskcentrodeensino/" target="_blank"><img src={Facebook} alt="icon facebook" className="iconFooter" /></a>
      </Main>
    </Container>
  )
}