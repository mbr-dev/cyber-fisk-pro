import { ButtonRed } from "../ButtonRed";

import { Container, LineSeparator } from "./styles";

export const AreaButtonBottom = ({ title, hasIcon }) => {
  return (
    <Container>
      <LineSeparator />
      {hasIcon ?
        <ButtonRed title={title} hasIcon />
        :
        <ButtonRed title={title} />
      }
    </Container>
  )
}