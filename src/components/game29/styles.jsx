import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.5rem;
  gap: 10px;
  background-color: ${props => props.theme["gray-300"]};
  margin-bottom: 16px;

  @media(min-width: 600px) {
    padding-block: 16px;
    gap: 0px;
  }

  @media(min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Left = styled.div`
  @media(min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
  }

  @media(min-width: 1024px) {
    height: 360px;
    justify-content: space-between;
  }
`;

export const AreaWord = styled.div`
  width: 23rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 10px;
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

  @media(min-width: 600px) {
    width: 600px;
    gap: 10px;
    margin-bottom: 16px;
    align-items: center;
    justify-content: center;
  }

  @media(min-width: 1024px) {
  }
`;

export const Words = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.8125rem;
  text-align: center;

  @media(max-width: 360px) {
    font-size: 0.75rem;
    padding: 0.375rem;
  }

  @media(min-width: 600px) {
    font-size: 18px;
    padding: 10px 16px;
  }
`;

export const AreaAnswers = styled.div`
  width: 23rem;
  height: 8rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
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

  @media(min-width: 600px) {
    width: 500px;
    height: 200px;
  }
`;

export const WordsDrop = styled.span`
  display: flex;
  height: 2rem;
  padding-inline: 0.375rem;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.8125rem;
  text-align: center;

  @media(max-width: 360px) {
    font-size: 0.75rem;
    padding: 0.375rem;
  }

  @media(min-width: 600px) {
    font-size: 18px;
    padding: 10px 16px;
  }
`;

export const Right = styled.div`
  @media(min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media(min-width: 1024px) {
    height: 360px;
    justify-content: space-between;
    border-left: 2px solid ${props => props.theme["gray-200"]};
  }
`;

export const AreaButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;