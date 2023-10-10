import styled from "styled-components";
import { colors } from "../../../../../../config/colors";

export const Container = styled.div`
  background: ${(props) =>
    props.$isOver ? colors["gray-100"] : colors.backgroundWhite};
  outline: ${(props) =>
    props.$isOver ? `3px dashed ${colors["gray-200"]}` : "none"};
  font-size: 24px;
  color: ${colors.black};
  margin-top: 12px;
  padding: 20px;
  white-space: break-spaces;
`;
