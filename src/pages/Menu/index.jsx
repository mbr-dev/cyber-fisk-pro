import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FooterBtnHome } from "../../components/FooterBtnHome";
import { LineSeparator } from "../../components/LineSeparator";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import Robo from "../../assets/RoboWD.png";
import RoboPe from "../../assets/roboPe.png";
import bgHeaderImg from "../../assets/bgHeaderImg.png";

import { Container, Main, Header, Avatar, Content, HeaderButton, BtnC } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Menu = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isTablet = window.matchMedia("(min-width: 600px)").matches;

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
          {!isDesktop && 
            <Avatar>
              <img src={Robo} alt="" />
              <p>{name}</p>
            </Avatar>}
          {!isDesktop && <ButtonCloseHeader />}
        </HeaderButton>

        {isDesktop &&
          <Avatar>
            <img src={RoboPe} alt="" />
            <p>{name}</p>
          </Avatar>}
      </Header>

      <Content>
        {isDesktop &&
          <BtnC>
            <ButtonCloseHeader />
          </BtnC>
        }

        <Main>
          <p>Avatar</p>
          <LineSeparator wl="80%" bg={defaultTheme["gray-200"]}/>
          <p onClick={() => {alterPage("Profile")}}>Profile</p>
          <LineSeparator wl="80%" bg={defaultTheme["gray-200"]}/>
          <p onClick={() => {alterPage("Rewards")}}>XP Balance and Rewards</p>
          <LineSeparator wl="80%" bg={defaultTheme["gray-200"]}/>
          <p onClick={() => {alterPage("Ranking")}}>Ranking</p>
          <LineSeparator wl="80%" bg={defaultTheme["gray-200"]}/>
          <p onClick={() => {alterPage("Help")}}>Help</p>
        </Main>

        <FooterBtnHome 
          fs={isDesktop ? "32px" : isTablet ? "28px" : ""}
          wl={isDesktop ? "48%" : "80%"}
          hasLS
          w={isDesktop ? "450px" : isTablet ? "400px" : ""}
          h={isDesktop ? "52px" : isTablet ? "48px" : ""}
        />
      </Content>
    </Container>
  )
}