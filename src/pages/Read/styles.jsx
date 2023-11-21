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
  overflow-y: scroll;

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
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding-right: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;

  .spanDay {
    height: 100%;
    padding-inline: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    font-size: 12px;
    font-weight: 700;
    border: 2px solid ${props => props.theme["blue-300"]};
    border-top-left-radius: 8px;
    border-end-start-radius: 8px;
    background-color: ${props => props.theme["blue-50"]};
  }

  @media (max-width: 320px) {
    width: 250px;
    height: 40px;

    .spanDay {
      padding-inline: 6px;
      font-size: 10px;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    width: 600px;
    height: 64px;
    padding-right: 12px;

    .spanDay {
      padding-inline: 12px;
      font-size: 16px;
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
  width: 150px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${props => props.$variant === "red" ? props.theme["red-200"] : props.theme["yellow-300"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.$variant === "red" ? props.theme["red-300"] :  props.theme["yellow-200"]};
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
    width: 130px;
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

export const Text = styled.div`
  flex: 1;
  width: 100%;
  padding-left: 8px;

  p {
    font-size: 12px;
  }
  
  span {
    font-size: 10px;
  }

  @media (max-width: 320px) {
    padding-left: 6px;

    p {
      font-size: 10px;
    }
    
    span {
      font-size: 8px;
    }
  }

  @media (min-width: 768px) {
    padding-left: 16px;

    p {
      font-size: 18px;
    }
    
    span {
      font-size: 14px;
    }
  }
`;

export const DivImg = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["blue-50"]};
  border-radius: 8px;

  img {
    width: 18px;
    height: 18px;
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