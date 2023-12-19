import Logo from "./images/logoGif.gif";
import bgImg from "./images/bgLoad.png";

import { Container } from "./styles";

export const Loading = () => {
  return (
    <Container style={{
      backgroundImage: `url("${bgImg}")`
    }}>
      <img src={Logo} alt="" />
      <p className="blinking-text">Carregando...</p>
    </Container>
  )
}