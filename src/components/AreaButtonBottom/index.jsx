import { AreaButtonBottomContainer, LineSeparator } from "./styles";

export function AreaButtonBottom({ children }) {
  return (
    <AreaButtonBottomContainer>
      <LineSeparator />
      {children}
    </AreaButtonBottomContainer>
  )
}