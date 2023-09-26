import styled, { keyframes } from "styled-components";
import { colors } from "../../../../config/colors";
import BaseButton from "../../games/components/BaseButton";
import { Button } from "@mui/material";
import { isMobile } from "react-device-detect";

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
  flex-direction: column;
  background: ${colors["gray-800"]};
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding-top: 10px;
  padding-bottom: 30px;
  padding-inline: ${isMobile ? "16px" : "60px"};
  border-radius: 0 0 20px 20px;
  animation-name: ${fade};
  animation-duration: 1s;
  position: relative;
`;
export const BackButton = styled(Button)`
  width: 60px !important;
  aspect-ratio: 9/7;
  padding: 8px !important;
  transition: opacity 0.2s;
  opacity: ${(props) => (props?.disabled ? 0.4 : 1)};
`;
export const Space = styled.div`
  width: 60px;
`;
export const BackImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const LessonBookContainer = styled.div`
  /* margin-bottom: 20px; */
`;
export const ScoreText = styled.p`
  font-size: 40px;
  color: ${colors.white};
  font-weight: bold;
`;
export const MyScoreText = styled.h2`
  color: ${colors["red-100"]};
  font-weight: bold;
`;
export const Title = styled.h2`
  margin-top: 28px;
  margin-bottom: 8px;
`;
export const ContainerLimiter = styled.div`
  width: min(400px, 95%);
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
export const BookTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors["gray-300"]};
  /* height: min(450px, 90%); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 8px;
  color: ${colors["gray-800"]};
  font-size: 20px;
  font-weight: bold;
`;
export const ContainerScoreLesson = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-block: 8px;
  gap: 8px;
`;
export const ContainerRowScoreLesson = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 8px;
  gap: 8px;
`;
export const LessonName = styled.div`
  color: ${colors["gray-300"]};
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  max-width: 100px;
  text-align: start;
`;
export const ContainerScoreBar = styled.div`
  flex: 1;
  max-height: 25px;
  border: 2px solid ${colors["green-100"]};
  border-radius: 15px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ScoreBarBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: ${colors["gray-300"]};
  overflow: hidden;
`;
export const ScoreBar = styled.div`
  width: 50%;
  height: 100%;
  font-size: 10px;
  background: ${colors["green-100"]};
  color: ${colors.white};
  text-align: start;
  padding-left: 4px;
  font-weight: bold;
`;
export const ScorePoints = styled.p`
  color: ${colors["green-100"]};
  font-size: 10px;
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
