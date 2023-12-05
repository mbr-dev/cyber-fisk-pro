import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";

import SinoImg from "./images/sino.png";

import { Container, Main, Div, AreaFooter, ButtonHome } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Billboard = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/Home");
  }

  const handleNews = () => {
    navigate("/News");
  }

  const handleMessages = () => {
    navigate("/Messages");
  }

  return (
    <Container>
      <HeaderText title="Billboard" />

      <Main>
        <Div onClick={handleNews}>
          <p>News</p>
          <img src={SinoImg} alt="" />
        </Div>

        <Div onClick={handleMessages} style={{ borderColor: defaultTheme["red-200"]}}>
          <p>Messages</p>
          <img src={SinoImg} alt="" />
        </Div>
      </Main>

      <AreaFooter>
        <ButtonHome onClick={handleGoHome}>
          <p>Home</p>
        </ButtonHome>
      </AreaFooter>
    </Container>
  )
}