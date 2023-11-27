import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AvatarCustom } from "../../components/AvatarCustom";
import { LineSeparator } from "../../components/LineSeparator";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import Robo from "../../assets/RoboWD.png";
import bgHeaderImg from "../../assets/bgHeaderImg.png";

import { Container, Main, Header, Avatar, Content, HeaderButton, BtnC, AreaFooter, ButtonLogout, AvatarPe, DivBtnCH } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Menu = () => {
  const [name, setName] = useState("");
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

  useEffect(()=>{
    const cookies = new Cookies();
    const raf = cookies.get("raf");
    if(raf){
      setName(raf);
    }
  },[])

  return (
    <Container>
      <Header>
        <img src={bgHeaderImg} alt="" className="bgHeaderImg" />

        <HeaderButton>
          <ButtonMenuHeader />
          <Avatar>
            <img src={Robo} alt="" />
            <p>{name}</p>
          </Avatar>
          <DivBtnCH>
            <ButtonCloseHeader />
          </DivBtnCH>
        </HeaderButton>

        <AvatarPe>
          <AvatarCustom />
          <p>{name}</p>
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