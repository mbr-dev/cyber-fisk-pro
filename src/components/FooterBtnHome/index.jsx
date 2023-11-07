import { ButtonHome } from "../ButtonHome";
import { LineSeparator } from "../LineSeparator";

import { Container } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const FooterBtnHome = ({ hasLS, title, mt, rota, wl, fs, w, h }) => {

  return (
    <Container
      style={{
        justifyContent: !hasLS && "center",
        paddingBottom: !hasLS && "0",
        marginTop: mt,
      }}
    >
      {hasLS && <LineSeparator wl={wl ? wl : "80%"} bg={defaultTheme["gray-200"]} />}
      <ButtonHome w={w} h={h} fs={fs} title={title} rota={rota} />
    </Container>
  )
}