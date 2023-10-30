import Logo from "./images/logoGif.gif";

import { Container } from "./styles";

export const Loading = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
      <p className="blinking-text">Carregando...</p>
    </Container>
  )
}