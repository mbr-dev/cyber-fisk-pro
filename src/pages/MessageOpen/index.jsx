import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";

import EmailImg from "./images/email.png";
import LixoImg from "./images/lixo.png";
import SetaImg from "./images/seta.png";
import FolderImg from "./images/folder.png";

import { Container, Main, Div, AreaButton, Button, DivImg, DivHText, DivHeader, Text, AreaButtonDiv, ButtonDiv } from "./styles";

export const MessageOpen = () => {
  const navigate = useNavigate();

  const handleMessages = () => {
    navigate("/Read");
  }

  const handleAnswer = () => {
    navigate("/MessageAnswer");
  }

  return (
    <Container>
      <HeaderText title="Message" />

      <Main>
        <Div>
          <DivHeader>
            <DivHText>
              <p>06/06/2023 - Nome do Aluno</p>
              <p>REG/ES1-TER-90:00 / 11:00-15 / 28-1</p>
            </DivHText>

            <DivImg>
              <img src={EmailImg} alt="" />
            </DivImg>
          </DivHeader>

          <Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt dolore cum quae nihil asperiores unde sit qui iusto provident? Exercitationem nobis porro quasi voluptate eligendi beatae quia, ea facilis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt dolore cum quae nihil asperiores unde sit qui iusto provident? Exercitationem nobis porro quasi voluptate eligendi beatae quia, ea facilis?</p>
          </Text>

          <AreaButtonDiv>
            <ButtonDiv onClick={handleAnswer} $variant="green">
              <img src={SetaImg} alt="" />
              <p>Answer</p>
            </ButtonDiv>
            <ButtonDiv $variant="orange">
              <img src={FolderImg} alt="" />
              <p>Archive</p>
            </ButtonDiv>
            <ButtonDiv>
              <img src={LixoImg} alt="" />
              <p>Delete</p>
            </ButtonDiv>
          </AreaButtonDiv>
        </Div>
      </Main>

      <AreaButton>
        <Button onClick={handleMessages}>
          <p>Back</p>
        </Button>
      </AreaButton>
    </Container>
  )
}