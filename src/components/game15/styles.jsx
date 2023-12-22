import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
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
  margin-top: 16px;
  gap: 16px;
  overflow: hidden;
  
  @media(max-width: 320px) {
    margin-top: 8px;
    gap: 8px;
  }

  @media(min-width: 768px) {
    margin-top: 32px;
    gap: 32px;
  }
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      margin-top: 8px;
      gap: 8px;
    }
  }

  @media(min-width: 1024px) {
    margin-top: 32px;
    gap: 32px;
  }
`;

export const AreaAnswers = styled.div`
  width: 300px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-bottom: 2px solid ${props => props.theme.black};

  p {
    font-size: 16px;
    font-weight: bold;
  }

  
  @media(max-width: 320px) {
    width: 250px;

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 600px;

    p {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 500px;

      p {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 800px;

    p {
      font-size: 24px;
    }
  }
`;

export const AreaWord = styled.div`
  width: 320px;
  height: 180px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 320px) {
    width: 280px;
    height: 120px;
    gap: 8px;
  }

  @media (min-width: 768px) {
    width: 600px;
    height: 200px;
    gap: 16px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 500px;
      height: 100px;
      gap: 12px;
    }
  }

  @media (min-width: 1024px) {
    width: 800px;
    height: 200px;
    gap: 16px
  }
`;

export const Words = styled.span`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  font-size: 16px;

  @media (max-width: 320px) {
    padding: 6px 14px;
    font-size: 14px
  }

  @media(min-width: 768px) {
    padding: 10px 18px;
    font-size: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding: 6px 14px;
      font-size: 12px;
    }
  }

  @media(min-width: 1024px) {
    padding: 8px 20px;
    font-size: 24px;
  }
`;

export const AreaButton = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 8px;
  }

  @media(min-width: 768px) {
    margin-top: 32px;
    gap: 32px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 32px;
      margin-top: 8px;
    }
  }

  @media(min-width: 1024px) {
    margin-top: 24px;
    gap: 32px;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 150px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$variant === "red" ? props.theme["red-200"] : props.theme["green-600"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.$variant === "red" ? props.theme["red-300"] :  props.theme["green-700"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 120px;
    height: 32px;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    width: 220px;
    height: 48px;
    font-size: 24px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 150px;
      height: 32px;
      font-size: 14px;
    }
  }

  @media (min-width: 1024px) {
    width: 220px;
    height: 48px;
    font-size: 24px;
  }
`;