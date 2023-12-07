import { useNavigate } from "react-router-dom";

import { Container, ButtonHome } from "./styles";

export const AreaFooterFullBtn = ({ rota, title }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    if (rota) {
      navigate(`${rota}`);
    } else {
      navigate("/Home");
    }
  }
  return (
    <Container>
      <ButtonHome onClick={handleGoHome}>
        <p>{title ? title : "Home"}</p>
      </ButtonHome>
    </Container>
  )
}