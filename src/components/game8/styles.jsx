import styled from "styled-components";

export const Game8Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Game8Main = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const Button = styled.div`
  width: 14.5rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid transparent;
  box-shadow:  2px 2px 6px #ccc;
  transition: all .2s ease-in-out;
  cursor: pointer;
`;