import Confetti from "react-confetti";

import { ButtonBg } from "../../components/ButtonBg";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { LineSeparator } from "../../components/LineSeparator";

import DollarImg from "../../assets/Dollar.svg";
import ConfetesImg from "../../assets/Confetes.png";
import MulherSvg from "./images/Mulher.svg";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Header, Main, AreaAvatar, AreaInfo, AreaXp, Avatar, AreaXpInfo, AvatarImg, AreaInfoBottom, Top, AreaButton } from "./styles";

export const WellDone = () => {

  return (
    <Container>
      <Confetti 
        numberOfPieces={130}
        gravity={0.03}
      />
      <Header>
        <Top>
          <ButtonMenuHeader />
          <ButtonCloseHeader />
        </Top>
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
            <span>0</span>
            <p>Fisk Dollar</p>
          </AreaXpInfo>
        </AreaXp>
      </Header>

      <Main>
        <AreaInfo>
          <ButtonBg title="Boost your avatar" w="15.875rem" h="2.5rem" />
          <p>Activities done in</p>
          <span>01:00:00</span>
          <AreaInfoBottom>
            <p>You were better then 30</p>
            <p>people in your level.</p>
          </AreaInfoBottom>
        </AreaInfo>
        <AreaButton>
          <LineSeparator w="18rem" bg={defaultTheme["gray-200"]} />
          <ButtonBg title="Home" w="15rem" h="2rem" />
        </AreaButton>
      </Main>
    </Container>
  )
}