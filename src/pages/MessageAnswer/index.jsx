import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";

import PlusImg from "./images/plusR.png";

import { Container, Main, Div, AreaButton, Button, Text } from "./styles";

export const MessageAnswer = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/MessageOpen");
  }

  return (
    <Container>
      <HeaderText title="Read" />

      <Main>
        <Div>
          <p>Answer To: Professor João</p>
        </Div>

        <Text>
          <label>
            <input type="file" />
            <img src={PlusImg} alt="" />
          </label>
          <textarea placeholder="Enter Text" />
        </Text>
      </Main>

      <AreaButton>
        <Button>
          <p>Send</p>
        </Button>

        <Button onClick={handleCancel} $variant="red">
          <p>Cancel</p>
        </Button>
      </AreaButton>
    </Container>
  )
}