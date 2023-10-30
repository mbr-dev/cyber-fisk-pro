import { ButtonHome } from "../ButtonHome";
import { LineSeparator } from "../LineSeparator";

import { Container } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const FooterBtnHome = ({ hasLS }) => {
  const isDesktop = window.matchMedia("(min-width: 1280px)").matches;

  return (
    <Container
      style={{
        justifyContent: !hasLS && "center",
        paddingBottom: !hasLS && "0",
      }}
    >
      {hasLS && <LineSeparator w={isDesktop ? "60%" : "80%"} bg={defaultTheme["gray-200"]} />}
      <ButtonHome />
    </Container>
  )
}