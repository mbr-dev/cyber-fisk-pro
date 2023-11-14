import { ButtonHome } from "../ButtonHome";

import { Container } from "./styles";

export const FooterBtnHome = ({ title, rota }) => {
  return (
    <Container>
      <ButtonHome title={title} rota={rota} />
    </Container>
  )
}