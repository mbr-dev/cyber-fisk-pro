import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";
import { AreaFooterFullBtn } from "../../components/AreaFooterFullBtn";

import PlusImg from "./images/plus.png";
import Email1Img from "./images/email1.png";
import Email2Img from "./images/email2.png";
import Email3Img from "./images/email3.png";
import FolderImg from "./images/folder.png";

import { Container, Main, Div, DivImg } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Messages = () => {
  const navigate = useNavigate();

  const [userRule, setUserRule] = useState("Professor");

  const handleMessages = () => {
    navigate("/MessagesHome");
  }

  const handleCompose = () => {
    navigate("/Compose");
  }

  return (
    <Container>
      <HeaderText title="Messages" />

      <Main>
        <Div onClick={handleMessages}>
          <p>Unread</p>
          <DivImg style={{ borderColor: defaultTheme["blue-600"] }}>
            <img src={Email1Img} alt="" />
          </DivImg>
        </Div>
        <Div onClick={handleMessages}>
          <p>Read</p>
          <DivImg style={{ borderColor: defaultTheme["blue-300"] }}>
            <img src={Email2Img} alt="" />
          </DivImg>
        </Div>
        <Div onClick={handleMessages}>
          <p>Sent</p>
          <DivImg style={{ borderColor: defaultTheme["green-1000"] }}>
            <img src={Email3Img} alt="" />
          </DivImg>
        </Div>
        <Div onClick={handleMessages}>
          <p>Archive</p>
          <DivImg style={{ borderColor: defaultTheme["yellow-200"] }}>
            <img src={FolderImg} alt="" />
          </DivImg>
        </Div>
        {(userRule === "Professor" || userRule === "Admin") &&
          <Div onClick={handleCompose} className="composeBtn">
            <p>Compose</p>
            <DivImg style={{ borderColor: defaultTheme["red-200"] }}>
              <img src={PlusImg} alt="" />
            </DivImg>
          </Div>
        }
      </Main>

      <AreaFooterFullBtn title="Billboard" rota="/Billboard" />
    </Container>
  )
}