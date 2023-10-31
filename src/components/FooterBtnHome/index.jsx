import { ButtonHome } from "../ButtonHome";
import { LineSeparator } from "../LineSeparator";

import { Container } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const FooterBtnHome = ({ hasLS, title, mt }) => {
  const isDesktop = window.matchMedia("(min-width: 1280px)").matches;

  return (
    <Container
      style={{
        justifyContent: !hasLS && "center",
        paddingBottom: !hasLS && "0",
        marginTop: mt,
      }}
    >
      {hasLS && <LineSeparator w={isDesktop ? "60%" : "80%"} bg={defaultTheme["gray-200"]} />}
      <ButtonHome title={title} />
    </Container>
  )
}