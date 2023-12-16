import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";
import { AreaFooterFullBtn } from "../../components/AreaFooterFullBtn";

import LixoImg from "./images/lixo.png";
import SetaImg from "./images/seta.png";
import FolderImg from "./images/folder.png";

import email1Img from "../Messages/images/email1.png";
import email2Img from "../Messages/images/email2.png";
import email3Img from "../Messages/images/email3.png";
import email4Img from "../Messages/images/folder.png";

import { Container, Main, Div, DivImg, DivHText, DivHeader, Text, AreaButtonDiv, ButtonDiv } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const MessageOpen = () => {
  const navigate = useNavigate();
   // read, sent, unread, archive
   const [messageType, setMessaType] = useState("sent");

  const handleAnswer = () => {
    navigate("/MessageAnswer");
  }

  return (
    <Container>
      <HeaderText title="Message" />

      <Main>
        <Div>
          <DivHeader style={{
            backgroundColor: messageType === "read" ? defaultTheme["blue-50"] : messageType === "unread" ? defaultTheme["blue-100"] : messageType === "sent" ? defaultTheme["green-900"] : defaultTheme["orange-200"],
            borderColor: messageType === "read" ? defaultTheme["blue-300"] : messageType === "unread" ? defaultTheme["blue-600"] : messageType === "sent" ? defaultTheme["green-1000"] : defaultTheme["orange-300"],
          }}>
            <DivHText >
              <p>06/06/2023 - Nome do Aluno</p>
              <p>REG/ES1-TER-90:00 / 11:00-15 / 28-1</p>
            </DivHText>

            <DivImg style={{
              borderColor: messageType === "read" ? defaultTheme["blue-300"] : messageType === "unread" ? defaultTheme["blue-600"] : messageType === "sent" ? defaultTheme["green-1000"] : defaultTheme["orange-300"],
            }}>
              <img src={messageType === "read" ? email2Img : messageType === "unread" ? email1Img : messageType === "sent" ? email3Img : email4Img} alt="" />
            </DivImg>
          </DivHeader>

          <Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt dolore cum quae nihil asperiores unde sit qui iusto provident? Exercitationem nobis porro quasi voluptate eligendi beatae quia, ea facilis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt dolore cum quae nihil asperiores unde sit qui iusto provident? Exercitationem nobis porro quasi voluptate eligendi beatae quia, ea facilis? lor</p>
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

      <AreaFooterFullBtn title="Back" rota="/MessagesHome" />
    </Container>
  )
}