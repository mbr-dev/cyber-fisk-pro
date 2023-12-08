import { useNavigate } from "react-router-dom";

import { AreaButtonMsg } from "../../components/AreaButtonMsg";
import { HeaderText } from "../../components/HeaderText";

import EmailImg from "./images/email.png";

import { Container, Main, Div, Text, DivImg } from "./styles";

export const Read = () => {
  const navigate = useNavigate();

  const handleMessageOpen = () => {
    navigate("/MessageOpen");
  }

  const messages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
  ]

  return (
    <Container>
      <HeaderText title="Read" />

      <Main>
        {messages.map((_, index) => {
          return (
            <Div key={index} onClick={handleMessageOpen}>
              <span className="spanDay">06/06/2023</span>
              <Text>
                <p>João Carlos Albuquerque</p>
                <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
              </Text>
              <DivImg>
                <img src={EmailImg} alt="" />
              </DivImg>
            </Div>
          )
        })}
      </Main>

      <AreaButtonMsg />
    </Container>
  )
}