import styled from "styled-components";
import { colors } from "../../../../../config/colors";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  border-radius: 20px !important;
  overflow: hidden;
  text-transform: capitalize !important;
  -webkit-box-shadow: 0px 2px 14px -6px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 2px 14px -6px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 2px 14px -6px rgba(0, 0, 0, 0.7);
  animation-fill-mode: forwards;
  font-weight: bold !important;
  font-size: 20px !important;
  &:hover {
    transform: scale(1.01);
    filter: brightness(0.95);
  }
  && .MuiTouchRipple-child {
    background-color: ${colors["gray-300"]};
  }
  &:disabled {
    filter: opacity(0.5);
  }
`;
