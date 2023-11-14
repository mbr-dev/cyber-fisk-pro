import styled, { keyframes } from "styled-components";
import { colors } from "../../../../../../config/colors";
import { Button } from "@mui/material";

const fadeIn = keyframes`
  0% {background: transparent}
  50% {background: transparent}
  100% {background: ${colors["gray-300"]} }
`;
const fadeOut = keyframes`
  0% {background: ${colors["gray-300"]}}
  10% {background: ${colors["gray-300"]}}
  100% {background: transparent }
`;

export const ContainerSelectButton = styled.div`
  flex: 1;
  width: min(600px, 100%);
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 65px;
  border-radius: 20px 20px 0 0;
  animation-name: ${(props) =>
    props.$show === null ? "none" : props.$show ? fadeIn : fadeOut};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  animation-timing-function: step-end;
`;
export const StyledSelectButton = styled(Button)`
  width: 100%;
  height: 100%;
  min-height: 35px !important;
  border-radius: 20px !important;
  color: ${colors.white} !important;
  font-size: 18px !important;
  font-weight: 400 !important;
  justify-content: space-between !important;
  padding: 12px 24px !important;
  background: ${colors["gray-300"]} !important;
  text-transform: capitalize !important;

  &:hover {
    /* transform: scale(1.01); */
    filter: brightness(0.95);
  }
  && .MuiTouchRipple-child {
    background-color: ${colors["gray-200"]};
  }
`;
