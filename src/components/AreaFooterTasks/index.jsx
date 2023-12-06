import { useNavigate } from "react-router-dom";

import { Container, ButtonTask } from "./styles";

export const AreaFooterTasks = () => {
  const navigate = useNavigate();

  const handleGoTasks = () => {
    navigate("/lessonSelected");
  }

  return (
    <Container>
      <ButtonTask onClick={handleGoTasks}>
        <p>Task</p>
      </ButtonTask>
    </Container>
  )
}