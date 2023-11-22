import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 54px;
  margin-top: 2rem;
  overflow: hidden;

  @media(max-width: 320px) {
    gap: 3rem;
    margin-top: 1.5rem;
  }

  @media(min-width: 600px) {
    gap: 72px;
    margin-top: 42px;
    margin-bottom: 54px;
  }

  @media(min-width: 1440px) {
    margin-top: 54px;
    margin-bottom: 84px;
  }
`;

export const AreaAnswers = styled.div`
  width: 20rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-bottom: 2px solid ${props => props.theme.black};
  padding-bottom: 3px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  p {
    font-size: 1rem;
    font-weight: bold;
  }

  
  
  @media(max-width: 320px) {
    width: 15rem;
  }

  @media(min-width: 600px) {
    width: 550px;

    p {
      font-size: 28px;
    }
  }
`;

export const AreaWord = styled.div`
  width: 17rem;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Words = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;

  @media(min-width: 600px) {
    padding: 12px 18px;
    font-size: 24px;
  }
`;

export const AreaButton = styled.div`
  width: 100%;
  display: flex;
  margin-top: 32px;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const Button = styled.button`
  all: unset;
  width: 150px;
  height: 36px;
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
`;