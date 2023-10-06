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
const fadeScale = keyframes`
  from {scale: 0 }
  to {scale: 1 }
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
  background: ${colors["red-100"]};
  padding-top: 10px;
  padding-bottom: 30px;
  padding-inline: ${isMobile ? "16px" : "60px"};
  border-radius: 0 0 20px 20px;
  animation-name: ${fade};
  animation-duration: 1s;
  position: relative;
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
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
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
  width: 60px !important;
  aspect-ratio: 9/7;
  padding: 8px !important;
  transition: opacity 0.2s;
  opacity: ${(props) => (props?.disabled ? 0.4 : 1)};
`;
export const Space = styled.div`
  width: 60px;
`;
export const BackImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const LessonBookContainer = styled.div`
  /* margin-bottom: 20px; */
`;
export const LessonTitle = styled.p`
  font-size: 40px;
  color: ${colors.white};
`;
export const BookTitle = styled.h2`
  color: ${colors.white};
`;
export const Title = styled.h2`
  margin-top: 28px;
  margin-bottom: 8px;
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
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${colors["gray-800"]};
  animation: ${fadeBottom} 1s;
`;
export const ContainerButtons = styled.div`
  width: min(700px, 90%);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
`;
export const FooterButton = styled(Button)`
  width: min(50px, 90%);
  min-width: 40px !important;
  height: 45px !important;
  padding: 8px;
  scale: 0;
  animation: ${fadeScale} 1s 1s;
  animation-fill-mode: forwards;
`;
export const FooterButtonImg = styled.img`
  width: 100%;
  height: 100%;
`;
