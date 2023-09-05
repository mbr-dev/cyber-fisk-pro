import { FooterContainer, FooterBottom, FooterDiv } from "./styles";

import logoFisk from "./images/logofiskFooter.png";
import Facebook from "./images/iconFacebook.svg";
import Youtube from "./images/iconYoutube.svg";
import Instagram from "./images/iconInstagram.svg";

export function Footer() {
  return (
    <FooterContainer>
      <FooterDiv>
        <p>Para dicas e informações</p>

        <FooterBottom>
          <img src={logoFisk} alt="logo fisk" />

          <img src={Youtube} alt="icon youtube" className="iconFooter" />
          <img src={Instagram} alt="icon instagram" className="iconFooter" />
          <img src={Facebook} alt="icon facebook" className="iconFooter" />
        </FooterBottom>
      </FooterDiv>
    </FooterContainer>
  )
}