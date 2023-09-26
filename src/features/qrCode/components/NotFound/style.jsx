import styled, { keyframes } from "styled-components";
import { colors } from "../../../../config/colors";
import BaseButton from "../../games/components/BaseButton";

const fade = keyframes`
  from {opacity: 0 }
  to {opacity: 1 }
`;
export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors["gray-800"]};
  z-index: 20;
`;
export const ContainerLimiter = styled.div`
  width: min(400px, 90%);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fade} 2s;
  padding: 20px;
`;
export const ContainerCenter = styled.div`
  width: 100%;
  /* height: min(450px, 90%); */
  aspect-ratio: 9/13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: ${colors.white};
  border-radius: 20px;
  padding: 20px;
`;
export const Logo = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 40px;
`;
export const Info = styled.p`
  color: ${colors["gray-800"]};
  font-size: 30px;
  margin-top: 55%;
`;
export const OkButton = styled(BaseButton)`
  width: min(90%, 150px);
  min-height: 54px;
  padding: 0 !important;
  transition: opacity 0.2s;
  background: ${colors["gray-800"]} !important;
  color: ${colors.white} !important;
  font-size: 28px !important;
`;
