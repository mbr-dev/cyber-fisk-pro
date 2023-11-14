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
  gap: 120px;
  padding-top: 100px;

  @media (min-width: 1024px) {
    width: 80%;
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

export const ButtonRec = styled.button`
  all: unset;
  width: 13rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;

  img {
    height: 24px;
  }

  .ruido {
    width: 70%;
  }

  &:hover {
    scale: 1.05;
  }

  @media(max-width: 320px) {
    width: 13rem;
    height: 3rem;

    img {
      width: 18px;
    }
  }

  @media(min-width: 600px) {
    width: 300px;
    height: 72px;
    gap: 16px;

    img {
      width: 54px;
      height: 42px;
    }

    .ruido {
      width: 160px;
    }
  }

  @media(min-width: 1024px) {
    width: 420px;
    height: 72px;
    gap: 16px;

    img {
      width: 54px;
      height: 42px;
    }

    .ruido {
      width: 220px;
    }
  }
`;