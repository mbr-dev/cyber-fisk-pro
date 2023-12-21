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
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  gap: 24px;

  @media(max-width: 320px) {
    margin-top: 10px;
    gap: 16px;
  }

  @media(min-width: 768px) {
    margin-top: 24px;
    gap: 32px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      gap: 18px;
    }
  }

  @media(min-width: 1024px) {
    margin-top: 2rem;
    gap: 2rem;
  }
`;

export const Button = styled.button`
  all: unset;
  width: ${props => props.$variant === "pequeno" ? "64px" : "150px"};
  height: ${props => props.$variant === "pequeno" ? "64px" : "64px"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all ease 0.3s;
  text-align: center;

  p {
    font-size: 18px;
    font-weight: bold;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media(max-width: 320px) {
    width: ${props => props.$variant === "pequeno" ? "52px" : "120px"};
    height: ${props => props.$variant === "pequeno" ? "52px" : "48px"};

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    width: ${props => props.$variant === "pequeno" ? "100px" : "250px"};
    height: ${props => props.$variant === "pequeno" ? "100px" : "84px"};

    p {
      font-size: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: ${props => props.$variant === "pequeno" ? "52px" : "120px"};
      height: ${props => props.$variant === "pequeno" ? "52px" : "48px"};

      p {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: ${props => props.$variant === "pequeno" ? "100px" : "250px"};
    height: ${props => props.$variant === "pequeno" ? "100px" : "84px"};
    border-width: 3px;

    p {
      font-size: 32px;
    }
  }
`;