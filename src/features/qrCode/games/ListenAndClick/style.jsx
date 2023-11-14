import styled, { keyframes } from "styled-components";
import { colors } from "../../../../config/colors";
import { BaseButton } from "../components/BaseButton";

const fadeIn = keyframes`
  from {opacity: 0 }
  to {opacity: 1 }
`;

export const ContainerOptions = styled.div`
  flex: 1;
  display: grid;
  margin-block: 40px;
  grid-auto-rows: auto;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 8px;
`;
export const ContainerAudioButton = styled.div`
  display: flex;
  justify-content: center;
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
