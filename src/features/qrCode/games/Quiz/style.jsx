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
export const ContainerQuestion = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 24px;
`;
