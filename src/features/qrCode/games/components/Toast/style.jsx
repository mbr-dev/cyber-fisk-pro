import styled, { keyframes } from "styled-components";
import { colors } from "../../../../../config/colors";

const fadeIn = keyframes`
  0% { bottom: -100px}
  30% {bottom: 0 }
  60% {bottom: 0 }
  100% {bottom: -100px }
`;

export const ToastContainer = styled.div`
  width: 100%;
  height: 100px;
  /* display: flex; */
  display: ${(props) => (!props.$show ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  /* background: ${colors["green-100"]}; */
  background: ${(props) =>
    !props.$error ? colors["green-100"] : colors["red-100"]};
  position: absolute;
  bottom: -100px;
  border-radius: 30px 30px 0 0;
  gap: 8%;
  animation-name: ${(props) => (!props.$show ? "none" : fadeIn)};
  animation-duration: 2.5s;
  /* animation-fill-mode: forwards; */
  animation-timing-function: ease;
  z-index: 999999;
`;
export const ToastText = styled.p`
  font-size: 40px;
  color: ${colors.white};
  font-weight: bold;
`;
export const ToastIcon = styled.img`
  width: 80px;
  height: 73px;
`;
