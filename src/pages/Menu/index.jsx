import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FooterBtnHome } from "../../components/FooterBtnHome";
import { LineSeparator } from "../../components/LineSeparator";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import Robo from "../../assets/RoboWD.png";
import bgHeaderImg from "../../assets/bgHeaderImg.png";

import { Container, Main, Header, Avatar } from "./styles";
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
        <ButtonMenuHeader />
        <Avatar>
          <img src={Robo} alt="" />
          <p>{name}</p>
        </Avatar>
        <ButtonCloseHeader />
      </Header>

      <Main>
        <p>Avatar</p>
        <LineSeparator w="80%" bg={defaultTheme["gray-200"]}/>
        <p onClick={() => {alterPage("Profile")}}>Profile</p>
        <LineSeparator w="80%" bg={defaultTheme["gray-200"]}/>
        <p onClick={() => {alterPage("BalanceAndReward")}}>XP Balance and Rewards</p>
        <LineSeparator w="80%" bg={defaultTheme["gray-200"]}/>
        <p onClick={() => {alterPage("Ranking")}}>Ranking</p>
        <LineSeparator w="80%" bg={defaultTheme["gray-200"]}/>
        <p onClick={() => {alterPage("Help")}}>Help</p>
      </Main>

      <FooterBtnHome hasLS />
    </Container>
  )
}