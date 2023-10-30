import { ButtonMenuHeader } from "../ButtonMenuHeader";
import { ButtonCloseHeader } from "../ButtonCloseHeader";

import bgHeaderText from "../../assets/bgHeaderText.png";

import { Container } from "./styles";

export const HeaderText = ({ title }) => {

  return (
    <Container>
      <img src={bgHeaderText} alt="" className="bgImg" />
      <ButtonMenuHeader />
      <p>{title}</p>
      <ButtonCloseHeader />
    </Container>
  )
}