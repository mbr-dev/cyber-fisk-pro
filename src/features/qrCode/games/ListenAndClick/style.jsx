import styled, { keyframes } from "styled-components";
import { colors } from "../../../../config/colors";
import BaseButton from "../components/BaseButton";

const fadeIn = keyframes`
  from {opacity: 0 }
  to {opacity: 1 }
`;

export const ContainerOptions = styled.div`
  flex: 1;
  display: grid;
  margin-block: 20px;
  gap: 8px;
`;
export const ContainerAudioButton = styled.div`
  margin-top: 20px;
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
