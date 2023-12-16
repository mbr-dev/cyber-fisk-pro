import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";
import { AreaFooterFullBtn } from "../../components/AreaFooterFullBtn";

import SinoImg from "./images/sino.png";

import { Container, Main, Div } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Billboard = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(["news"])

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
        <Div onClick={handleNews} style={{ 
          borderColor: (notifications[0] === "news" || notifications[1] === "news") && defaultTheme["red-200"]
        }}>
          <p>News</p>
          <img src={SinoImg} alt="" />
        </Div>

        <Div onClick={handleMessages} style={{ 
          borderColor: (notifications[0] === "messages" || notifications[1] === "messages") && defaultTheme["red-200"]
        }}>
          <p>Messages</p>
          <img src={SinoImg} alt="" />
        </Div>
      </Main>

      <AreaFooterFullBtn />
    </Container>
  )
}