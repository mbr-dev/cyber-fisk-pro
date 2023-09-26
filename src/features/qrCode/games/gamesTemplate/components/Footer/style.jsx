import styled, { keyframes } from "styled-components";
import { colors } from "../../../../../../config/colors";
import { Button } from "@mui/material";
const fadeBottom = keyframes`
  from {transform: translateY(200px)}
  to {transform: translate(0)}
`;
const fadeScale = keyframes`
  from {scale: 0 }
  to {scale: 1 }
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
  animation: ${fadeScale} 0.5s 1s;
  animation-fill-mode: forwards;
`;
export const FooterButtonImg = styled.img`
  width: 100%;
  height: 100%;
`;
