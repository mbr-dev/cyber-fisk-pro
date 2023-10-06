import Instagram from "./images/iconInstagram.svg";
import logoFisk from "./images/logofiskFooter.png";
import Facebook from "./images/iconFacebook.svg";
import Youtube from "./images/iconYoutube.svg";

import { Container, Main } from "./styles";

export function Footer() {
  return (
    <Container>
      <p>Para dicas e informações</p>

      <Main>
        <img src={logoFisk} alt="Logo Fisk" />
        <img src={Youtube} alt="icon youtube" className="iconFooter" />
        <img src={Instagram} alt="icon instagram" className="iconFooter" />
        <img src={Facebook} alt="icon facebook" className="iconFooter" />
      </Main>
    </Container>
  )
}