import { ButtonMenuHeader } from "../../../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../../../components/ButtonCloseHeader";

import LogoFisk from "../../../../assets/logoFisk2.svg";
import bgHeaderImg from "../../../../assets/bgHeaderImg.png";

import { Container, TopHeader, BottomHeader } from "./styles";

export const HeaderTextImage = ({ enabledClose, title }) => {

  return (
    <Container>
      <img src={bgHeaderImg} alt="" className="bgHeaderImg" />
      <TopHeader>
        <ButtonMenuHeader />
        <p>{title}</p>
        {!enabledClose && <ButtonCloseHeader />}
      </TopHeader>

      <BottomHeader>
        <img src={LogoFisk} className="logoFisk" alt="Logo Fisk"/>
      </BottomHeader>
    </Container>
  )
}