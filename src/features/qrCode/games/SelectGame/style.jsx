import styled, { keyframes } from "styled-components";
import { colors } from "../../../../config/colors";
import { BaseButton } from "../components/BaseButton";

const fadeIn = keyframes`
  0% {opacity: 0; height: 0; border-radius: 24px;}
  80% {opacity: 0; height: 0; border-radius: 24px;}
  100% {opacity: 1; height: 100%; border-radius: 0 0 24px 24px; }
`;
const fadeOut = keyframes`
  0% {opacity: 1; height: 100%; border-radius: 0 0 24px 24px; }
  80% {opacity: 1; height: 100%; border-radius: 0 0 24px 24px; }
  100% {opacity: 0; height: 0; border-radius: 24px; }
`;
export const ContainerQuestion = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;
export const ContainerSelect = styled.div`
  flex: 1;
  max-height: 320px;
  display: flex;
  flex-direction: column;
`;
export const ContainerOptions = styled.div`
  flex: 1;
  width: min(600px, 100%);
  margin-inline: auto;
  height: 0;
  opacity: 0;
  display: grid;
  background: ${colors["gray-300"]};
  border-radius: 0 0 24px 24px;
  animation-name: ${(props) =>
    props.$show === null ? "none" : props.$show ? fadeIn : fadeOut};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  padding: 8px 24px;
`;
export const ContainerCheckButton = styled.div`
  margin-block: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CheckButton = styled(BaseButton)`
  width: min(600px, 100%);
  height: 60px;
  padding: 0 !important;
  margin-top: 12px;
  animation-name: fadeIn;
  animation-duration: 1s;
  color: ${colors.white} !important;
  background: ${colors["green-100"]} !important;
`;
