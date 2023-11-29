import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  @media(max-width: 360px) {
    gap: 24px;
  }
  
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
  gap: 10px;
  
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

export const ButtonAnswer = styled.button`
  all: unset;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;

  p {
    font-size: 18px;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }  

  @media(max-width: 320px) {
    width: 74px;
    height: 96px;
  }

  @media(min-width: 768px) {
    width: 120px;
    height: 150px;
  }
`;

export const AreaButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Button = styled.button`
  all: unset;
  width: 120px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${props => props.$variant === "red" ? props.theme["red-200"] : props.theme["green-600"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.$variant === "red" ? props.theme["red-300"] :  props.theme["green-700"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (min-width: 1280px) {
    width: 250px;
    height: 48px;
    font-size: 24px;
  }
`;

export const DivAnswer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding-inline: 16px;
`;

export const DivRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  p {
    font-size: 16px;
    color: ${props => props.theme["red-200"]};
  }
`;

export const Div = styled.div`
  width: 24px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.black};
  border-radius: 5px;
  text-transform: uppercase;
`;

export const AreaFooter = styled.div`
  width: 300px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 250px;
    height: 52px;
  }

  @media(min-width: 480px) {
    width: 600px;
    height: 52px;
  }

  @media(min-width: 1280px) {
    width: 1200px;
    height: 100px;
    border-width: 4px;
  }
`;

export const ButtonHome = styled.button`
  all: unset;
  width: 250px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom-width: 3px;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 24px;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 200px;
    height: 32px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 480px) {
    height: 32px;
    border-radius: 6px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 1280px) {
    width: 400px;
    height: 44px;

    p {
      font-size: 32px;
    }
  }
`;