import styled, { keyframes } from "styled-components";
import { colors } from "../../../../config/colors";
import BaseButton from "../components/BaseButton";
import mapImg from "./../../assets/images/Ess1_L7_map.jpg";
import { isMobile } from "react-device-detect";

const fadeIn = keyframes`
  from {opacity: 0 }
  to {opacity: 1 }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const ContainerMap = styled.div`
  display: flex;
  justify-content: center;
  padding-block: 20px;
`;
export const Map = styled.div`
  background-image: url(${mapImg});
  background-size: cover;
  width: ${isMobile ? "320px" : "500px"};
  height: ${isMobile ? "190px" : "298px"};
`;
export const GridMap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin-left: auto;
  margin-right: 4%;
  width: 62%;
  height: 100%;
  gap: 6%;
`;
export const Place = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  & span {
    opacity: ${(props) => (props.$show ? 1 : 0)};
    visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  }
`;
export const TextPlace = styled.span`
  font-size: ${isMobile ? "12px" : "16px"};
  padding: 4px;
  color: ${colors.black};
  text-shadow: 1px 1px 3px #ff7700;
  background-color: rgba(255, 255, 255, 0.743);
  transition: opacity 1s;
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
