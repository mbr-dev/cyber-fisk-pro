import { HeaderText } from "../../components/HeaderText";
import { AreaButtonMsg } from "../../components/AreaButtonMsg";

import EmailImg from "./images/email.png";

import { Container, Main, Div, Text, DivImg } from "./styles";

export const Unread = () => {

  return (
    <Container>
      <HeaderText title="Unread" />

      <Main>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={EmailImg} alt="" />
          </DivImg>
        </Div>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={EmailImg} alt="" />
          </DivImg>
        </Div>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={EmailImg} alt="" />
          </DivImg>
        </Div>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={EmailImg} alt="" />
          </DivImg>
        </Div>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={EmailImg} alt="" />
          </DivImg>
        </Div>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={EmailImg} alt="" />
          </DivImg>
        </Div>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={EmailImg} alt="" />
          </DivImg>
        </Div>
      </Main>

      <AreaButtonMsg />
    </Container>
  )
}