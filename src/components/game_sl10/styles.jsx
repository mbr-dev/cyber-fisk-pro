import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  
  @media(max-width: 320px) {
    gap: 8px;
  }
`;

export const LettersArea = styled.div`
  width: 100%;
  padding-block: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  background-color: ${props=> props.theme["gray-200"]};

  @media(min-width: 1024px) {
    padding-block: 12px;
    gap: 12px;
  }

  @media(min-width: 600px) {
   gap: 14px;
  }

  @media(min-width: 1440px) {
    padding-block: 16px;
  }

  @media(min-width: 1920px) {
    gap: 20px;
  }
`;

export const Letter = styled.div`
  width: 1.75rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.black};
  border-radius: 5px;

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 2rem;
  }

  @media(min-width: 600px) {
    width: 46px;
    height: 58px;
    font-size: 28px;
  }

  @media(min-width: 1024px) {
    width: 54px;
    height: 64px;
    font-size: 32px;
  }

  @media(min-width: 1920px) {
    width: 72px;
    height: 84px;
    font-size: 40px;
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 1024px) {
    gap: 10px;
  }

  @media(min-width: 1440px) {
    gap: 20px;
  }
`;

export const AreaButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;