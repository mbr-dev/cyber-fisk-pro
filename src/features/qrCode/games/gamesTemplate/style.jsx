import styled, { keyframes } from "styled-components";
import { colors } from "../../../../config/colors";
import { Button } from "@mui/material";
import { isMobile } from "react-device-detect";

const fade = keyframes`
  from {opacity: 0 }
  to {opacity: 1 }
`;
const fadeBottom = keyframes`
  from {transform: translateY(200px)}
  to {transform: translate(0)}
`;
const fill = keyframes`
  0% {background-position: right}
  100% {background-position: left}
`;
export const Container = styled.main`
  position: ${isMobile ? "fixed" : "static"};
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 650px;
  background: ${colors["gray-100"]};
  position: relative;
  overflow-y: hidden;
`;
export const BackgroundHeader = styled.header`
  width: 100%;
  background: ${colors["gray-100"]};
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background: ${colors["gray-300"]};
  padding: 20px;
  padding-inline: ${isMobile ? "16px" : "60px"};
  border-radius: 0 0 20px 20px;
  animation-name: ${fade};
  animation-duration: 1s;
`;
export const ContainerBar = styled.div`
  width: 80%;
  max-width: 750px;
  height: 40px;
  background: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  -webkit-box-shadow: 0px 5px 8px -4px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 5px 8px -4px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 5px 8px -4px rgba(0, 0, 0, 0.45);
`;
export const ContentBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid black;
  border-collapse: collapse;
`;
export const MarkerBar = styled.div`
  flex: 1;
  border-right: 1px solid ${colors.black};
  background: ${(props) =>
    props.$status
      ? colors["green-100"]
      : props.$status === false
      ? colors["red-100"]
      : colors["gray-200"]};
  background: linear-gradient(
      to left,
      ${colors["gray-200"]} 50%,
      ${(props) =>
          props.$status
            ? colors["green-100"]
            : props.$status === false
            ? colors["red-100"]
            : colors["gray-200"]}
        50%
    )
    right;
  background-size: 200%;
  animation: ${(props) => (props.$status === null ? "none" : fill)};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  &:last-child {
    border: none;
  }
`;
export const BackButton = styled(Button)`
  width: 40px;
  padding: 0 !important;
  transition: opacity 0.2s;
  opacity: ${(props) => (props?.disabled ? 0.4 : 1)};
`;
export const BackImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const Title = styled.h2`
  margin-block: 8px;
`;
export const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  place-items: center;
`;
export const BackgroundGame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
`;
export const ContainerGame = styled.div`
  width: min(700px, 90%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const Footer = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.backgroundWhite};
  padding: 8px;
  animation: ${fadeBottom} 1s;
`;
