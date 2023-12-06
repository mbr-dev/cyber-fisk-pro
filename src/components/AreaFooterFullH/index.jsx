import { useNavigate } from "react-router-dom";

import { Container, ButtonHome } from "./styles";

export const AreaFooterFullH = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/Home");
  }
  return (
    <Container>
      <ButtonHome onClick={handleGoHome}>
        <p>Home</p>
      </ButtonHome>
    </Container>
  )
}