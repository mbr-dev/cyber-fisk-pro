import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export const ButtonHome = ({ title, rota, fs, w, h }) => {
  const navigate = useNavigate();

  const handleGoHome = (rota) => {
    if (rota) {
      navigate(`/${rota}`)
    } else {
      navigate("/Home");
    }
  }

  return (
    <Container 
      onClick={() => handleGoHome(rota)}
      style={{
        width: w ? w : "256px",
        height: h ? h : "40px",
      }}
    >
      <p style={{
        fontSize: fs ? fs : "20px"
      }}>{title ? title : "Home"}</p>
    </Container>
  )
}