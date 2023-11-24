import Logo from "./images/logoGif.gif";
import bgImg from "./images/Vertical.png";

import { Container } from "./styles";

export const Loading = () => {
  return (
    <Container>
      <img src={bgImg} alt="" className="bgImg" />
      <img src={Logo} alt="" />
      <p className="blinking-text">Carregando...</p>
    </Container>
  )
}