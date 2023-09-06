import styled, { keyframes } from "styled-components";
import { colors } from "../../../../config/colors";
import { Button, TextField } from "@mui/material";
import { fonts } from "../../../../config/fonts";
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
  0% {
    background-position: right;
  }
  100% {
    background-position: left;
    
    }
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
  background: ${colors.backgroundLightGrey};
`;
export const BackgroundHeader = styled.header`
  width: 100%;
  background: ${colors.backgroundLightGrey};
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  background: ${colors.backgroundMediumGrey};
  padding: 20px;
  border-radius: 0 0 20px 20px;
  animation-name: ${fade};
  animation-duration: 1s;
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
  background: ${colors.backgroundWhite};
`;
export const ContainerGame = styled.div`
  width: min(700px, 90%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const ContainerBar = styled.div`
  width: 80%;
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
  border-right: 1px solid black;
  background: ${(props) => {
    console.log("st1", props.$status);
    return props.$status
      ? "green"
      : props.$status === false
      ? "red"
      : "lightgrey";
  }};
  background: linear-gradient(
      to left,
      lightgrey 50%,
      ${(props) => {
          console.log("st2", props.$status);
          return props.$status
            ? "green"
            : props.$status === false
            ? "red"
            : "lightgrey";
        }}
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
  /* font-size: 18px; */
  font-family: ${fonts.ubuntuMedium};
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
export const Sticker = styled.div`
  width: 20%;
  height: 8px;
  background: ${colors.backgroundRed};
  border-radius: 4px;
`;
