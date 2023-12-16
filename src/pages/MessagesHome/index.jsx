import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { HeaderText } from "../../components/HeaderText";
import { AreaButtonMsg } from "../../components/AreaButtonMsg";

import email1Img from "../Messages/images/email1.png";
import email2Img from "../Messages/images/email2.png";
import email3Img from "../Messages/images/email3.png";
import email4Img from "../Messages/images/folder.png";

import { Container, Main, Div, Text, DivImg } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme"

export const MessagesHome = () => {
  const navigate = useNavigate();
  // read, sent, unread, archive
  const [messageType, setMessaType] = useState("archive");

  const handleMessageOpen = () => {
    navigate("/MessageOpen");
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
            <Div key={index} onClick={handleMessageOpen}>
              <span style={{
                backgroundColor: messageType === "read" ? defaultTheme["blue-50"] : messageType === "unread" ? defaultTheme["blue-100"] : messageType === "sent" ? defaultTheme["green-900"] : defaultTheme["orange-200"],
                borderColor: messageType === "read" ? defaultTheme["blue-300"] : messageType === "unread" ? defaultTheme["blue-600"] : messageType === "sent" ? defaultTheme["green-1000"] : defaultTheme["orange-300"],
              }} className="spanDay">06/06/2023</span>
              <Text>
                <p>João Carlos Albuquerque</p>
                <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
              </Text>
              <DivImg style={{
                borderColor: messageType === "read" ? defaultTheme["blue-300"] : messageType === "unread" ? defaultTheme["blue-600"] : messageType === "sent" ? defaultTheme["green-1000"] : defaultTheme["orange-300"],
              }}>
                <img src={messageType === "read" ? email2Img : messageType === "unread" ? email1Img : messageType === "sent" ? email3Img : email4Img}  alt="" />
              </DivImg>
            </Div>
          )
        })}
      </Main>

      <AreaButtonMsg />
    </Container>
  )
}