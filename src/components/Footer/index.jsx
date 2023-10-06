import { useContext } from "react";

import { CyberContext } from "../../context/cyber";
import { translateFooter } from "../../utils/Translate";

import Instagram from "./images/iconInstagram.svg";
import logoFisk from "./images/logofiskFooter.png";
import Facebook from "./images/iconFacebook.svg";
import Youtube from "./images/iconYoutube.svg";

import { Container, Main } from "./styles";

export function Footer() {
  const { selectLanguage } = useContext(CyberContext);

  return (
    <Container>
      {selectLanguage === 0 ? <p>{translateFooter[0]}</p> : selectLanguage === 1 ? <p>{translateFooter[1]}</p> : <p>{translateFooter[2]}</p>}
      

      <Main>
        <img src={logoFisk} alt="Logo Fisk" />
        <img src={Youtube} alt="icon youtube" className="iconFooter" />
        <img src={Instagram} alt="icon instagram" className="iconFooter" />
        <img src={Facebook} alt="icon facebook" className="iconFooter" />
      </Main>
    </Container>
  )
}