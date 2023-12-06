import { HeaderText } from "../../components/HeaderText";
import { AreaFooterFullH } from "../../components/AreaFooterFullH";

import ruido2 from "../../assets/ruido2.svg";
import micro1 from "../../assets/micro1.svg";

import { Container, DivInside, Main, ButtonRec } from "./styles";

export const ReportStudioL = () => {
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

      <AreaFooterFullH />
    </Container>
  )
}