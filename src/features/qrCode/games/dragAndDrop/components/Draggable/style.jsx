import styled, { keyframes } from "styled-components";
import { colors } from "../../../../../../config/colors";
import { BaseButton } from "./../../../components/BaseButton";
import { fonts } from "../../../../../../config/fonts";

const fadeIn = keyframes`
  from {opacity: 0 }
  to {opacity: 1 }
`;
const fadeOut = keyframes`
  from {opacity: 1 }
  to {opacity: 0 }
`;
export const OptionButton = styled(BaseButton)`
  width: 100%;
  height: 100%;
  min-height: 35px !important;
  background: ${colors["gray-300"]} !important;
  animation-name: ${(props) => (props.$show ? fadeIn : fadeOut)};
  animation-duration: 1s;
  color: ${colors.white} !important;
  animation-fill-mode: forwards;
`;
