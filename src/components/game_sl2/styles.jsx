import styled from "styled-components";

export const GameSL2Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameSL2Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  
  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${props => props.theme["gray-700"]};
  }
  `;

export const GridArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
`;
