import { ButtonBg } from "../../components/ButtonBg";
import { LineSeparator } from "../../components/LineSeparator";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import imgAvatar from "../../components/AvatarImage/Images/OBJECTS.png";

import { Container, Main, Header, Avatar, Top, Bottom } from "./styles";

export const Menu = () => {
  return (
    <Container>
      <Header>
        <ButtonMenuHeader />
        <Avatar>
          <img src={imgAvatar} alt="" />
          <p>Camila Eduarda</p>
        </Avatar>
        <ButtonCloseHeader />
      </Header>
      <Main>
        <Top>
          <p>Avatar</p>
          <LineSeparator w="18rem" />
          <p>Profile</p>
          <LineSeparator w="18rem" />
          <p>XP Balance and Rewards</p>
          <LineSeparator w="18rem" />
          <p>Ranking</p>
        </Top>
        <Bottom>
          <LineSeparator w="18rem" />
          <ButtonBg
            title="Logout"
            w="14rem"
            h="2rem"
          />
        </Bottom>
      </Main>
    </Container>
  )
}