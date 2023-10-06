import styled, { keyframes } from "styled-components";
import { colors } from "../../../../config/colors";
import { Button, TextField } from "@mui/material";
import { isMobile } from "react-device-detect";

const fade = keyframes`
  from {opacity: 0 }
  to {opacity: 1 }
`;
const fadeBottom = keyframes`
  from {transform: translateY(200px);}
  to {transform: translate(0);}
`;
export const Container = styled.main`
  position: ${isMobile ? "fixed" : "static"};
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 650px;
`;
export const RedBox = styled.div`
  display: flex;
  flex: 10;
  flex-direction: column;
  align-items: center;
  padding-inline: 30px;
  background-color: ${colors["red-100"]};
`;
export const ContentLimiter = styled.div`
  width: min(500px, 100%);
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
  animation-name: ${fade};
  animation-duration: 1s;
`;
export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;
export const Back = styled(Button)`
  width: 44px !important;
  min-width: 0 !important;
  height: 44px;
  border-radius: 25px !important;
  padding: 4px !important;
`;
export const BackIcon = styled.img`
  width: 100%;
`;
export const QRContainer = styled(Button)`
  width: min(350px, 90%);
  min-height: 0;
  background-color: transparent !important;
  position: absolute;
  bottom: calc(-10% - 30px);
  border-radius: 15px !important;
  padding: 0 !important;
  animation-name: ${fade};
  animation-duration: 1s;
`;
export const ImageQRInfo = styled.img`
  width: 100%;
  scale: 1.01;
`;
export const WhiteBox = styled.div`
  display: flex;
  flex: 7;
  justify-content: center;
  background-color: ${colors.white};
`;
export const ContainerInput = styled.div`
  width: min(350px, 90%);
  height: 50px;
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: ${colors["gray-300"]};
  border-radius: 10px;
  padding-inline: 10px;
  margin-top: 170px;
  margin-bottom: 16px;
  animation-name: ${fadeBottom};
  animation-duration: 1s;
  transition: opacity 0.2s;
  opacity: ${(props) => (props?.disabled ? 0.6 : 1)};
`;
export const InputCode = styled(TextField)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  & .MuiOutlinedInput-root {
    height: 100%;
  }
  & fieldset {
    border: none;
  }
`;
export const InputButton = styled(Button)`
  width: 50px;
  min-width: 25px !important;
  height: 100%;
  opacity: ${(props) => (props?.disabled ? 0.8 : 1)};
`;
export const ImageInputButton = styled.img`
  width: 100%;
`;
