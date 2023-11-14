import styled, { keyframes } from "styled-components";
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
export const ContainerQuestion = styled.p`
  width: 100%;
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 12px; */
  /* margin-bottom: 20px; */
  font-size: 24px;
  white-space: break-spaces;
  text-align: center;
`;
