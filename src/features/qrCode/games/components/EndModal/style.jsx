import styled, { keyframes } from "styled-components";
import { colors } from "../../../../../config/colors";
import trofeuBomImg from "./../../../assets/images/Trofeu_bom.png";
import { Button } from "@mui/material";

const fadeIn = keyframes`
  from {opacity: 0 }
  to {opacity: 1 }
`;

export const Header = styled.header`
  background: ${(props) =>
    props.grade > 79 ? colors["green-100"] : colors["red-100"]};
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`;
export const HeaderText = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: ${colors.white};
`;
export const HeaderImg = styled.img`
  width: 70px;
`;
export const MainContainer = styled.div`
  flex: 10;
  display: flex;
  justify-content: center;
  min-height: 450px;
`;
export const GradeContainer = styled.div`
  width: min(90%, 400px);
  background: ${colors["gray-100"]};
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 2px 14px -6px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 2px 14px -6px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 2px 14px -6px rgba(0, 0, 0, 0.7);
  animation-fill-mode: forwards;
  gap: 16px;
`;
export const ThrofyContainer = styled.div`
  width: 100%;
  flex: 8;
  display: flex;
  justify-content: center;
  /* background-image: ${`url(${trofeuBomImg})`}; */
`;
export const ThrofyImage = styled.img`
  width: 80%;
`;
export const Grade = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;
export const PointsContainer = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 8px;
`;
export const Points = styled.div`
  width: 100%;
  height: 100%;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.$green ? colors["green-100"] : colors["red-100"])};
  &:last-child {
    border-left: 1px solid ${colors["gray-300"]};
  }
`;
export const QuestionsContainer = styled.div`
  width: 100%;
  flex: 10;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 20px;
  gap: 8px;
`;
export const Question = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.black};
  padding: 10px;
  border-radius: 20px;
  min-height: 60px;
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 16px;
`;
export const ButtonFooter = styled(Button)`
  width: min(90%, 150px);
  min-height: 54px;
  /* max-height: 54px; */
  padding: 0 !important;
  transition: opacity 0.2s;
  opacity: ${(props) => (props?.disabled ? 0.4 : 1)};
  background: ${colors.black} !important;
  color: ${colors.white} !important;
  border-radius: 16px !important;
  -webkit-box-shadow: 0px 2px 14px -6px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 2px 14px -6px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 2px 14px -6px rgba(0, 0, 0, 0.7);
  animation-fill-mode: forwards;
  &:hover {
    transform: scale(1.01);
    filter: brightness(0.95);
  }
  && .MuiTouchRipple-child {
    background-color: ${colors["gray-300"]};
  }
`;
export const ContainerAudioButton = styled.div`
  margin-top: 20px;
`;
export const AudioButton = styled(Button)`
  width: 100px;
  height: 100px;
  border-radius: 20px !important;
  padding: 0 !important;
  overflow: hidden;
  margin-top: 12px;
  animation-name: fadeIn;
  animation-duration: 1s;
  color: ${colors.black} !important;
  background-size: cover; */
  -webkit-box-shadow: 0px 2px 14px -6px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 2px 14px -6px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 2px 14px -6px rgba(0, 0, 0, 0.7);
  animation-fill-mode: forwards;
  &:hover {
    transform: scale(1.01);
    filter: brightness(0.95);
  }
  && .MuiTouchRipple-child {
    background-color: ${colors["gray-300"]};
  }
`;
export const AudioImage = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1.17);
`;
