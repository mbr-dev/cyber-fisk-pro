import styled from "styled-components";
import { colors } from "../../../../../../config/colors";
import { Button } from "@mui/material";

export const ContainerSelectButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  max-height: 65px;
  background: ${(props) => (props.$show ? colors["gray-400"] : "transparent")};
  border-radius: 20px 20px 0 0;
`;
export const StyledSelectButton = styled(Button)`
  width: 100%;
  height: 100%;
  min-height: 35px !important;
  border-radius: 20px !important;
  color: ${colors.white} !important;
  justify-content: space-between !important;
  padding: 12px 24px !important;
  background: ${colors["gray-400"]} !important;
  text-transform: capitalize !important;

  &:hover {
    /* transform: scale(1.01); */
    filter: brightness(0.95);
  }
  && .MuiTouchRipple-child {
    background-color: ${colors["gray-300"]};
  }
`;
