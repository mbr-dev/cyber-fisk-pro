import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export const ButtonHome = ({ title, w, h }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/Home");
  }

  return (
    <Container
      onClick={handleGoHome}
      style={{
        width: w ? h : "254px",
        height: h ? h : "40px",
      }}
      >
      <p>{title ? title : "Home"}</p>
    </Container>
  )
}