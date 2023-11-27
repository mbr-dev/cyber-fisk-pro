import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";

import ruido2 from "../../assets/ruido2.svg";
import micro1 from "../../assets/micro1.svg";

import { Container, DivInside, Main, ButtonRec, AreaFooter, ButtonHome } from "./styles";

export const ReportStudioL = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/Home");
  }
  return (
    <Container>
      <HeaderText title="Report Studio" />

      <Main>
        <DivInside>
          <span>1</span>
          <p>Lesson</p>
        </DivInside>

        <ButtonRec>
          <img src={micro1} alt="" />
          <img src={ruido2} className="ruido" alt="" />
        </ButtonRec>
      </Main>

      <AreaFooter>
        <ButtonHome onClick={handleGoHome}>
          <p>Home</p>
        </ButtonHome>
      </AreaFooter>
    </Container>
  )
}