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
  gap: 16px;
  padding-top: 16px;
  background-color: ${props => props.theme["gray-100"]};

  @media (max-width: 320px) {
    gap: 12px;
    padding-top: 12px;
  }

  @media (min-width: 768px) {
    gap: 36px;
    padding-top: 36px;
  }
`;

export const Div = styled.button`
  all: unset;
  width: 300px;
  height: 480px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  background-color: ${props => props.theme.white};

  @media (max-width: 360px) {
    height: 410px;
  }

  @media (max-width: 320px) {
    width: 250px;
    height: 300px;
    overflow-y: scroll;
  }

  @media (min-width: 768px) {
    width: 600px;
    height: 64px;
  }
`;

export const DivHeader = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  border: 2px solid ${props => props.theme["blue-200"]};
  background-color: ${props => props.theme["blue-50"]};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  @media (max-width: 320px) {
    height: 54px;
  }
`;

export const DivHText = styled.div`
  color: ${props => props.theme.white};

  p {
    font-size: 12px;
    margin-bottom: 5px;
  }

  @media (max-width: 320px) {
    p {
      font-size: 10px;
      margin-bottom: 4px;
    }
  }
`;

export const DivImg = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["blue-200"]};
  background-color: ${props => props.theme.white};
  border-radius: 8px;

  img {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 320px) {
    width: 28px;
    height: 28px;

    img {
      width: 16px;
      height: 16px;
    }
  }

  @media (min-width: 768px) {
    width: 52px;
    height: 52px;
    border-width: 3px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Text = styled.div`
  flex: 1;
  padding: 14px;
  overflow-y: scroll;

  p {
    font-size: 16px;
    font-weight: normal;
  }

  @media (max-width: 320px) {
    padding: 12px;

    p {
      font-size: 14px;
    }
  }
`;

export const AreaButtonDiv = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonDiv = styled.div`
  width: 90px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  background-color: ${props => props.$variant === "green" ? props.theme["green-600"] : props.$variant === "orange" ? props.theme["orange-200"] : props.theme["red-200"]};
  border: 2px solid ${props => props.$variant === "green" ? props.theme["green-700"] : props.$variant === "orange" ? props.theme["orange-300"] : props.theme["red-300"]};
  border-bottom-width: 4px;
  transition: all ease 0.3s;

  img {
    width: 16px;
    height: 16px;
  }

  p {
    font-size: 12px;
    color: ${props => props.theme.white};
  }

  &:hover {
    scale: 1.1;
  }

  @media(max-width: 320px) {
    width: 72px;
    height: 32px;
    border-radius: 6px;

    p {
      font-size: 10px;
    }

    img {
      width: 14px;
      height: 14px;
    }
  }
`;

export const AreaButton = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 320px) {
    height: 64px;
  }

  @media (min-width: 768px) {
    height: 120px;
    gap: 32px;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 250px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props =>  props.theme["red-300"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  cursor: pointer;

  p {
      font-size: 18px;
    }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 320px) {
    width: 230px;
    height: 32px;
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 56px;
    
    p {
      font-size: 28px;
    }
  }
`;

