import styled, { keyframes } from "styled-components";
import { colors } from "../../../../config/colors";

const fade = keyframes`
  from {opacity: 0 }
  to {opacity: 1 }
`;
const infiniteFade = keyframes`
  0% {opacity: 0 }
  33% {opacity: 1 }
  66% {opacity: 1 }
  100% {opacity: 0 }
`;
export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors["red-100"]};
`;
export const ContainerCenter = styled.div`
  width: min(700px, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  animation: ${fade} 2s;
`;
export const Logo = styled.img`
  width: 400px;
  height: 330px;
`;
export const Info = styled.p`
  color: ${colors.white};
  font-size: 60px;
  font-weight: bold;
  animation: ${infiniteFade} 3s infinite;
`;
