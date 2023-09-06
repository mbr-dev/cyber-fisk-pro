import styled, { keyframes } from "styled-components";
import { colors } from "../../../../../../config/colors";
import { Button } from "@mui/material";
import { fonts } from "../../../../../../config/fonts";

const fadeIn = keyframes`
  from {opacity: 0 }
  to {opacity: 1 }
`;
const fadeOut = keyframes`
  from {opacity: 1 }
  to {opacity: 0 }
`;
export const OptionButton = styled(Button)`
  width: 100%;
  /* height: 65px; */
  height: 100%;
  min-height: 35px !important;
  /* max-height: 75px !important; */
  border-radius: 20px !important;
  background: ${colors.backgroundMediumGrey} !important;
  /* animation-name: ${fadeIn}; */
  animation-name: ${(props) => (props.$show ? fadeIn : fadeOut)};
  animation-duration: 1s;
  color: ${colors.backgroundWhite} !important;
  -webkit-box-shadow: 0px 5px 8px -4px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 5px 8px -4px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 5px 8px -4px rgba(0, 0, 0, 0.45);
  animation-fill-mode: forwards;
  &:hover {
    transform: scale(1.01);
    filter: brightness(0.9);
  }
`;
