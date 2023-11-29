import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

import { AvatarCustom } from "../../components/AvatarCustom";
import { LineSeparator } from "../../components/LineSeparator";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";
import { AvatarCustomMetade } from "../../components/AvatarCustomMetade";

import bgHeaderImg from "../../assets/bgHeaderImg.png";

import { Container, Main, Header, Content, HeaderButton, BtnC, AreaFooter, ButtonLogout, AvatarPe, DivBtnCH } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Menu = () => {
  const navigate = useNavigate();

  const alterPage = (page) => {
    navigate(`/${page}`);
  }

  const back = () => {
    navigate(-1);
  }

  const logout = () => {
    const cookies = new Cookies();
    cookies.remove("raf");
    cookies.remove("token");
    navigate(`/Login`);
  }

  return (
    <Container>
      <Header>
        <img src={bgHeaderImg} alt="" className="bgHeaderImg" />

        <HeaderButton>
          <ButtonMenuHeader />
          <DivBtnCH>
            <AvatarCustomMetade hasName />
            <ButtonCloseHeader />
          </DivBtnCH>
        </HeaderButton>

        <AvatarPe>
          <AvatarCustom hasName />
        </AvatarPe>
      </Header>

      <Content>
        <BtnC>
          <ButtonCloseHeader />
        </BtnC>

        <Main>
          <p onClick={() => {alterPage("Avatar")}}>Avatar</p>
          <LineSeparator wl="100%" bg={defaultTheme["gray-200"]}/>
          <p onClick={() => {alterPage("Profile")}}>Profile</p>
          <LineSeparator wl="100%" bg={defaultTheme["gray-200"]}/>
          <p onClick={() => {alterPage("Rewards")}}>XP Balance and Rewards</p>
          <LineSeparator wl="100%" bg={defaultTheme["gray-200"]}/>
          <p onClick={() => {alterPage("Ranking")}}>Ranking</p>
          <LineSeparator wl="100%" bg={defaultTheme["gray-200"]}/>
          <p onClick={() => {alterPage("Help")}}>Help</p>
        </Main>

        <AreaFooter>
          <ButtonLogout onClick={logout}>
            <p>Logout</p>
          </ButtonLogout>
        </AreaFooter>
      </Content>
    </Container>
  )
}