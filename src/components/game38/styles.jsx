import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.5rem;
  gap: 1rem;
  background-color: ${props => props.theme["gray-300"]};
`;

export const AreaAnswers = styled.div`
  width: 23rem;
  height: 8rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 3px solid ${props => props.theme["gray-700"]};
  border-radius: 8px;

  @media(max-width: 375px) {
    width: 22rem;
    height: 9rem;
  }

  @media(max-width: 360px) {
    width: 21rem;
    height: 8rem;
  }
  
  @media(max-width: 320px) {
    width: 19rem;
    height: 8rem;
  }
`;

export const AreaWord = styled.div`
  width: 23rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  @media(max-width: 375px) {
    width: 22rem;
  }

  @media(max-width: 360px) {
    width: 21rem;
  }

  @media(max-width: 320px) {
    width: 19rem;
  }
`;

export const Words = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.8125rem;
  text-align: center;

  @media(max-width: 360px) {
    font-size: 0.75rem;
    padding: 0.375rem;
  }
`;

export const WordsDrop = styled.span`
  display: flex;
  height: 2rem;
  padding-inline: 0.375rem;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.8125rem;
  text-align: center;

  @media(max-width: 360px) {
    font-size: 0.75rem;
    padding: 0.375rem;
  }
`;