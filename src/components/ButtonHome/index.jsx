import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export const ButtonHome = ({ title }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/Home");
  }

  return (
    <Container onClick={handleGoHome}>
      <p>{title ? title : "Home"}</p>
    </Container>
  )
}