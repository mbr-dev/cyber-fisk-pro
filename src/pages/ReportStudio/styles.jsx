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
  display: grid;
  align-items: center;
  justify-content: center;
  padding-inline: 12px;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 1024px) {
    width: 80%;
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  p {
    font-size: 24px;
    font-weight: normal;
  }

  @media (min-width: 768px) {
    p {
      font-size: 28px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

export const DivInside = styled.div`
  width: 68px;
  height: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 3px solid ${props => props.theme["red-200"]};
  transition: all ease 0.3s;

  &:hover {
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme["gray-700"]};
    color: ${props => props.theme.white};
  }

  span {
    font-size: 28px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    width: 96px;
    height: 96px;

    span {
      font-size: 28px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    width: 110px;
    height: 110px;

    span {
      font-size: 32px;
    }

    p {
      font-size: 22px;
    }
  }
`;