import { useNavigate } from "react-router-dom";

import { Container, ButtonHome } from "./styles";

export const AreaFooterMiddleBtn = () => {
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