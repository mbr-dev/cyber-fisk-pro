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
  font-size: 18px;
  font-family: ${fonts.ubuntuMedium};
`;
export const ContainerCenter = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
        ${colors.backgroundRed} 3px,
        transparent 3px
      )
      0 0,
    linear-gradient(to right, ${colors.backgroundRed} 3px, transparent 3px) 0
      100%,
    linear-gradient(to left, ${colors.backgroundRed} 3px, transparent 3px) 100%
      0,
    linear-gradient(to left, ${colors.backgroundRed} 3px, transparent 3px) 100%
      100%,
    linear-gradient(to bottom, ${colors.backgroundRed} 3px, transparent 3px) 0 0,
    linear-gradient(to bottom, ${colors.backgroundRed} 3px, transparent 3px)
      100% 0,
    linear-gradient(to top, ${colors.backgroundRed} 3px, transparent 3px) 0 100%,
    linear-gradient(to top, ${colors.backgroundRed} 3px, transparent 3px) 100%
      100%;
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
  font-size: 16px;
  font-family: ${fonts.ubuntuMedium};
`;
export const Footer = styled.footer`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.backgroundWhite};
  border-radius: 20px 20px 0 0;
  padding: 8px;
  animation-name: ${fadeBottom};
  animation-duration: 1s;
`;
export const Sticker = styled.div`
  width: 20%;
  height: 8px;
  background: ${colors.backgroundRed};
  border-radius: 4px;
`;
export const Form = styled.form`
  width: 80%;
  height: 50px;
`;
export const InputCode = styled(TextField)`
  width: 100%;
  height: 50px;
  background-color: ${(props) =>
    props?.disabled ? colors.backgroundDisabled : "transparent"};
  font-family: ${fonts.ubuntuMedium} !important;
  color: ${colors.fontDarkGrey} !important;
  text-align: center;
  border-radius: 10px;
  & .MuiOutlinedInput-root {
    height: 100%;
    border-radius: 14px;
  }
  & fieldset {
    border-color: black;
  }
  & input {
    text-align: center;
  }
`;
