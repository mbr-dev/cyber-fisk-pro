import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BottomArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const DefaultItem = styled.button`
  all: unset;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  color: ${props => props.theme["gray-700"]};
  cursor: pointer;

  h2 {
    font-size: 1.25rem
  }
`;

export const Inside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-block: 1rem;

  p {
    font-size: 0.875rem;
    font-weight: 500;
  }

  li {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Ranking = styled(DefaultItem)``;

export const Dollars = styled(DefaultItem)``;

export const Game = styled(DefaultItem)``;

export const Wheel = styled(DefaultItem)``;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between
`;