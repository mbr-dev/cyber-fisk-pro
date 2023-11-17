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
  gap: 24px;
  padding-top: 24px;
  background-color: ${props => props.theme["gray-100"]};

  @media (max-width: 320px) {
    gap: 20px;
    padding-top: 20px;
  }

  @media (min-width: 768px) {
    gap: 36px;
    padding-top: 36px;
  }
`;

export const DivButtons = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;


export const DivInside = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;


export const ButtonNews = styled.button`
  all: unset;
  width: 160px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  transition: all ease 0.3s;

  &:hover {
    background-color: ${props => props.theme["red-200"]};
    color: ${props => props.theme.white};
  }
`;


export const ButtonCreate = styled.button`
  all: unset;
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  transition: all ease 0.3s;

  &:hover {
    background-color: ${props => props.theme["red-200"]};
    color: ${props => props.theme.white};
  }
`;

export const Div = styled.button`
  all: unset;
  width: 300px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 12px;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;

  p {
    font-size: 18px;
    font-weight: 700;
  }

  img {
    width: 18px;
  }

  @media (max-width: 320px) {
    width: 250px;
    height: 40px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    width: 600px;
    height: 64px;
    padding-inline: 16px;

    p {
      font-size: 24px;
    }

    img {
      width: 24px;
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