import { HeaderText } from "../../components/HeaderText";
import { FooterBtnHome } from "../../components/FooterBtnHome";

import ruido2 from "../../assets/ruido2.svg";
import micro1 from "../../assets/micro1.svg";

import { Container, DivInside, Main, ButtonRec } from "./styles";

export const ReportStudioL = () => {
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isTablet = window.matchMedia("(min-width: 600px)").matches;

  return (
    <Container>
      <HeaderText title="Report Studio" />

      <Main>
        <DivInside>
          <span>1</span>
          <p>Lesson</p>
        </DivInside>

        <ButtonRec>
          <img src={micro1} alt="" />
          <img src={ruido2} className="ruido" alt="" />
        </ButtonRec>
      </Main>

      <FooterBtnHome 
        fs={isDesktop ? "32px" : isTablet ? "28px" : ""}
        wl={isDesktop ? "90%" : "80%"}
        hasLS
        w={isDesktop ? "450px" : isTablet ? "400px" : ""}
        h={isDesktop ? "52px" : isTablet ? "48px" : ""}
      />
    </Container>
  )
}