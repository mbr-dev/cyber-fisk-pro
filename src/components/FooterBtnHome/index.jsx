import { ButtonHome } from "../ButtonHome";
import { LineSeparator } from "../LineSeparator";

import { Container } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const FooterBtnHome = ({ hasLS }) => {
  return (
    <Container
      style={{
        justifyContent: !hasLS && "center",
        paddingBottom: !hasLS && "0",
      }}
    >
      {hasLS && <LineSeparator w="80%" bg={defaultTheme["gray-200"]} />}
      <ButtonHome />
    </Container>
  )
}