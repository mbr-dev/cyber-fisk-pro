import Confetti from "react-confetti";

import { ButtonBg } from "../../components/ButtonBg";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import DollarImg from "../../assets/Dollar.svg";
import CoinsImg from "../../assets/Coins.svg";
import ConfetesImg from "../../assets/Confetes.png";
import MulherSvg from "./images/Mulher.svg";

import { Container, Header, Main, AreaAvatar, AreaInfo, AreaXp, LineSeparator, Avatar, AreaXpInfo, AvatarImg, AreaInfoBottom } from "./styles";

export const WellDone = () => {

  return (
    <Container>
      <Header>
        <ButtonCloseHeader />
      </Header>

      <Main>
        <Confetti 
          numberOfPieces={130}
          gravity={0.03}
        />

        <AreaAvatar>
          <img src={ConfetesImg} alt="" />
          <Avatar>
            <AvatarImg>
              <img src={MulherSvg} alt="" />
            </AvatarImg>
            <p>Camila Eduarda</p>
          </Avatar>
          <h2>WELL DONE!</h2>
        </AreaAvatar>

        <AreaXp>
          <AreaXpInfo>
            <img src={DollarImg} alt="Dollar" />
            <span>10</span>
            <p>Fisk Dollar</p>
          </AreaXpInfo>

          <LineSeparator />

          <AreaXpInfo>
            <img src={CoinsImg} alt="Coins" />
            <span>10</span>
            <p>Fisk Dollar</p>
          </AreaXpInfo>
        </AreaXp>

        <AreaInfo>
          <p>Activities done in</p>
          <span>01:00:00</span>

          <AreaInfoBottom>
            <p>You were better then 30</p>
            <p>people in your level.</p>
          </AreaInfoBottom>
        </AreaInfo>
        <ButtonBg title="Home" w="15.875rem" h="2.5rem" />
      </Main>
    </Container>
  )
}