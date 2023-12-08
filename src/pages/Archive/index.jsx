import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";
import { AreaButtonMsg } from "../../components/AreaButtonMsg";

import FolderImg from "./images/folder.png";

import { Container, Main, Div, Text, DivImg } from "./styles";

export const Archive = () => {
  const navigate = useNavigate();

  const handleMessages = () => {
    navigate("/Messages");
  }

  const messages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
  ]

  return (
    <Container>
      <HeaderText title="Archive" />

      <Main>
        {messages.map((_, index) => {
          return (
            <Div key={index} onClick={handleMessages}>
              <span className="spanDay">06/06/2023</span>
              <Text>
                <p>João Carlos Albuquerque</p>
                <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
              </Text>
              <DivImg>
                <img src={FolderImg} alt="" />
              </DivImg>
            </Div>
          )
        })}
      </Main>

      <AreaButtonMsg />
    </Container>
  )
}