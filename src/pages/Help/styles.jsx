import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  margin-top: 24px;
  
  @media(max-width: 320px) {
    gap: 12px;
    margin-top: 12px;
  }
`;

export const Items = styled.button`
  all: unset;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  padding: 8px 16px;
  border: 2px solid transparent;
  color: ${props => props.theme["gray-700"]};
  cursor: pointer;

  h2 {
    font-size: 20px;
  }

  @media(max-width: 320px) {
    width: 70%;

    h2 {
      font-size: 16px;
    }
  }
`;

export const Inside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-block: 16px;

  p {
    font-size: 14px;
    font-weight: 500;
  }

  li {
    display: flex;
    flex-wrap: wrap;
  }

  @media(max-width: 320px) {
    gap: 2px;
    padding-block: 10px;
    
    p {
      font-size: 12px;
    }
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between
`;