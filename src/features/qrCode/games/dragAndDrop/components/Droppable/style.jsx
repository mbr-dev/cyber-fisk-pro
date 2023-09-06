import styled from "styled-components";
import { colors } from "../../../../../../config/colors";

export const Container = styled.main`
  background: ${(props) =>
    props.$isOver ? "rgba(229, 227, 227, 0.6)" : colors.backgroundWhite};
  outline: ${(props) =>
    props.$isOver ? `3px dashed rgb(198, 198, 198)` : "none"};
  font-size: 24px;
  color: ${colors.black};
  margin-top: 12px;
  padding: 20px;
`;
