import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

import { ButtonBg } from "../../components/ButtonBg";
import { LineSeparator } from "../../components/LineSeparator";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import imgAvatar from "../../components/AvatarImage/Images/OBJECTS.png";

import { Container, Main, Header, Avatar, Top, Bottom } from "./styles";

export const Menu = () => {
  const [name, setName] = useState('');
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
        <ButtonMenuHeader />
        <Avatar>
          <img src={imgAvatar} alt="" />
          <p>{name}</p>
        </Avatar>
        <ButtonCloseHeader />
      </Header>
      <Main>
        <Top>
          <p>Avatar</p>
          <LineSeparator w="18rem" bg="#E6E6E6"/>
          <p onClick={() => {alterPage('Profile')}}>Profile</p>
          <LineSeparator w="18rem" bg="#E6E6E6"/>
          <p>XP Balance and Rewards</p>
          <LineSeparator w="18rem" bg="#E6E6E6"/>
          <p onClick={() => {alterPage('Ranking')}}>Ranking</p>
        </Top>
        <Bottom>
          <LineSeparator w="18rem" bg="#E6E6E6"/>
          <ButtonBg
            title="Logout"
            w="14rem"
            h="2rem"
            mt="10px"
            onPress={logout}
          />
        </Bottom>
      </Main>
    </Container>
  )
}