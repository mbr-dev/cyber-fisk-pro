import styled from "styled-components";
import { colors } from "../../../../../../config/colors";
import { Button } from "@mui/material";

export const ContainerButton = styled.div`
  order: ${(props) => props.order};
  border: ${(props) => props.border};
  flex: 1;
  display: flex;
  align-items: center;
  max-height: 75px;
  border-bottom: ${(props) =>
    props.$border ? `1px solid ${colors["gray-500"]}` : 0};
`;
export const StyledButton = styled(Button)`
  width: 100%;
  height: 100%;
  min-height: 35px !important;
  border-radius: 20px !important;
  color: ${colors.white} !important;
  background: ${colors["gray-300"]} !important;
  justify-content: flex-start !important;
  &:hover {
    filter: brightness(0.95);
  }
  && .MuiTouchRipple-child {
    background-color: ${colors["gray-200"]};
  }
`;
