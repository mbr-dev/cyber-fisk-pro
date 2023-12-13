import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";
import { AreaFooterFullBtn } from "../../components/AreaFooterFullBtn";

import Email1Img from "./images/email1.png";
import Email2Img from "./images/email2.png";
import Email3Img from "./images/email3.png";
import FolderImg from "./images/folder.png";
import PlusImg from "./images/plus.png";

import { Container, Main, Div, DivImg } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Messages = () => {
  const navigate = useNavigate();

  const handleUnread = () => {
    navigate("/Unread");
  }

  const handleRead = () => {
    navigate("/Read");
  }

  const handleSend = () => {
    navigate("/Sent");
  }

  const handleArchive = () => {
    navigate("/Archive");
  }

  const handleCompose = () => {
    navigate("/Compose");
  }

  return (
    <Container>
      <HeaderText title="Messages" />

      <Main>
        <Div onClick={handleUnread}>
          <p>Unread</p>
          <DivImg style={{ borderColor: defaultTheme["blue-600"] }}>
            <img src={Email1Img} alt="" />
          </DivImg>
        </Div>
        <Div onClick={handleRead}>
          <p>Read</p>
          <DivImg style={{ borderColor: defaultTheme["blue-300"] }}>
            <img src={Email2Img} alt="" />
          </DivImg>
        </Div>
        <Div onClick={handleSend}>
          <p>Sent</p>
          <DivImg style={{ borderColor: defaultTheme["green-600"] }}>
            <img src={Email3Img} alt="" />
          </DivImg>
        </Div>
        <Div onClick={handleArchive}>
          <p>Archive</p>
          <DivImg style={{ borderColor: defaultTheme["yellow-200"] }}>
            <img src={FolderImg} alt="" />
          </DivImg>
        </Div>
        <Div onClick={handleCompose} className="composeBtn">
          <p>Compose</p>
          <DivImg style={{ borderColor: defaultTheme["red-200"] }}>
            <img src={PlusImg} alt="" />
          </DivImg>
        </Div>
      </Main>

      <AreaFooterFullBtn title="Billboard" rota="/Billboard" />
    </Container>
  )
}