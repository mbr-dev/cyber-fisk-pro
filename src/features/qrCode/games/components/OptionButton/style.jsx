import styled, { keyframes } from "styled-components";
import { colors } from "../../../../../config/colors";
import { BaseButton } from "../../components/BaseButton";

const fadeIn = keyframes`
  from {opacity: 0 }
  to {opacity: 1 }
`;
const fadeOut = keyframes`
  from {opacity: 1 }
  to {opacity: 0 }
`;
export const ContainerButton = styled.div`
  order: ${(props) => props.order};
  border: ${(props) => props.border};
  flex: 1;
  display: flex;
  align-items: center;
  max-height: 65px;
`;
export const StyledButton = styled(BaseButton)`
  width: 100%;
  height: 100%;
  min-height: 35px !important;
  border-radius: 20px !important;
  background: ${colors.white} !important;
  animation-name: ${(props) => (props.$show ? fadeIn : fadeOut)};
  animation-duration: 0.5s;
  color: ${colors.white} !important;
  background: ${colors["gray-300"]} !important;
  animation-fill-mode: forwards;
`;
