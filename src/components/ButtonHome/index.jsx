import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export const ButtonHome = ({ title, rota }) => {
  const navigate = useNavigate();

  const handleGoHome = (rota) => {
    if (rota) {
      navigate(`/${rota}`)
    } else {
      navigate("/Home");
    }
  }

  return (
    <Container onClick={() => handleGoHome(rota)}>
      <p>{title ? title : "Home"}</p>
    </Container>
  )
}