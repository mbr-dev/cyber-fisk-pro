import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LessonContext } from "../../context/lesson";

import { Container, ButtonHome } from "./styles";

export const AreaFooterFullBtn = ({ rota, title }) => {
  const { playAudio } = useContext(LessonContext);
  const navigate = useNavigate();

  const handleGoHome = () => {
    if (playAudio) return;

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