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
  background: ${colors["gray-800"]};
`;
export const ContentLimiter = styled.div`
  width: min(700px, 100%);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const Header = styled.header`
  width: 100%;
  min-width: calc(100% - 340px);
  display: flex;
  justify-content: center;
  position: relative;
  padding: 20px;
  animation-name: ${fade};
  animation-duration: 1s;
  padding-bottom: 60px;
`;
export const BackButton = styled(Button)`
  width: 45px;
  min-width: 0 !important;
  height: 40px;
  left: 20px;
  position: absolute !important;
  padding: 0 !important;
  transition: opacity 0.2s;
  opacity: ${(props) => (props?.disabled ? 0.4 : 1)};
`;
export const BackImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;
export const Info = styled.p`
  color: ${colors.white};
  font-size: 18px;
`;
export const ContainerCenter = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  animation-name: ${fade};
  animation-duration: 1s;
`;
export const ContainerQRBorder = styled.div`
  width: min(320px, 100%);
  display: flex;
  justify-content: center;
  padding: 5px;
  background: linear-gradient(
        to right,
        ${colors["red-100"]} 3px,
        transparent 3px
      )
      0 0,
    linear-gradient(to right, ${colors["red-100"]} 3px, transparent 3px) 0 100%,
    linear-gradient(to left, ${colors["red-100"]} 3px, transparent 3px) 100% 0,
    linear-gradient(to left, ${colors["red-100"]} 3px, transparent 3px) 100%
      100%,
    linear-gradient(to bottom, ${colors["red-100"]} 3px, transparent 3px) 0 0,
    linear-gradient(to bottom, ${colors["red-100"]} 3px, transparent 3px) 100% 0,
    linear-gradient(to top, ${colors["red-100"]} 3px, transparent 3px) 0 100%,
    linear-gradient(to top, ${colors["red-100"]} 3px, transparent 3px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 60px 60px;
`;
export const ContainerQRReader = styled.div`
  width: 250px;
  height: 300px;
  background: ${colors.black};
  display: flex;
  align-items: center;
  padding-inline: 10px;
`;
export const Permission = styled.p`
  color: ${colors.white};
  font-size: 16px;
`;
export const Footer = styled.footer`
  width: 100%;
  height: ${(props) => (props.$isFocused ? "100%" : "90px")};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.$isFocused ? "flex-start" : "space-between"};
  gap: ${(props) => (props.$isFocused ? "60px" : "12px")};
  align-items: center;
  background-color: ${colors.white};
  border-radius: 20px 20px 0 0;
  padding: 12px;
  animation-name: ${fadeBottom};
  animation-duration: 1s;
`;
export const Sticker = styled.div`
  width: 20%;
  height: 8px;
  background: ${colors["red-100"]};
  border-radius: 4px;
  margin-bottom: ${(props) => (props.$isFocused ? "60px" : 0)};
`;
export const Label = styled.h2`
  color: ${colors.black};
  font-weight: 600;
  /* font-size: 16px; */
`;
export const Form = styled.form`
  width: 70%;
`;
export const InputCode = styled(TextField)`
  width: 100%;
  height: 50px;
  background-color: ${(props) =>
    props?.disabled ? colors["gray-100"] : "transparent"};
  font-family: ${fonts.ubuntuMedium} !important;
  color: ${colors.black} !important;
  text-align: center;
  border-radius: 10px;
  & .MuiOutlinedInput-root {
    height: 100%;
    border-radius: 14px;
  }
  & fieldset {
    border-color: ${colors.black};
  }
  & input {
    text-align: center;
  }
`;
export const InputButton = styled(Button)`
  width: min(80%, 240px);
  min-width: 25px !important;
  height: 60px;
  background: ${colors["gray-800"]} !important;
  opacity: ${(props) => (props?.disabled ? 0.8 : 1)};
  border-radius: 20px !important;
  color: ${colors.white} !important;
  text-transform: none !important;
  font-weight: 600 !important;
  font &:hover {
    scale: calc(1.01);
    filter: brightness(0.9);
  }
`;
