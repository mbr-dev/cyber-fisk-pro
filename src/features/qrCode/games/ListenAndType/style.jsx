import styled, { keyframes } from "styled-components";
import { colors } from "../../../../config/colors";
import { TextField } from "@mui/material";
import { BaseButton } from "../components/BaseButton";

const fadeIn = keyframes`
  from {opacity: 0 }
  to {opacity: 1 }
`;
export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 44px;
`;
export const Image = styled.img`
  max-height: 200px;
  animation-name: ${fadeIn};
  animation-duration: 1s;
`;
export const ContainerAudioButton = styled.div`
  margin-block: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export const AudioButton = styled(BaseButton)`
  width: 100px;
  height: 100px;
  padding: 0 !important;
  margin-top: 12px;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  color: ${colors.black} !important;
`;
export const AudioImage = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1.17);
`;
export const Input = styled(TextField)`
  & fieldset {
    border-radius: 20px !important;
    border-color: ${colors.black} !important;
  }
  & input {
    &::selection {
      background: ${colors["gray-200"]};
    }
  }
`;
export const ContainerCheckButton = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 40px;
`;
export const CheckButton = styled(BaseButton)`
  width: 90%;
  height: 60px;
  padding: 0 !important;
  /* margin-top: 12px; */
  animation-name: ${fadeIn};
  animation-duration: 1s;
  color: ${colors.white} !important;
  background: ${colors["green-100"]} !important;
  animation-fill-mode: forwards;
`;
