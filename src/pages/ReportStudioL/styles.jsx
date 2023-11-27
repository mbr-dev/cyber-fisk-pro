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

  @media (max-width: 320px) {
    gap: 32px;
  }

  @media (min-width: 480px) {
    padding-top: 10px;
    gap: 32px;
  }

  @media (min-width: 1280px) {
    padding-top: 0px;
    gap: 54px;
    justify-content: center;
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
  border: 1px solid ${props => props.theme["red-200"]};
  transition: all ease 0.3s;

  span {
    font-size: 28px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }

  @media (min-width: 480px) {
    width: 64px;
    height: 64px;

    span {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 1280px) {
    width: 110px;
    height: 110px;
    border-width: 3px;

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

  @media(min-width: 480px) {
    width: 200px;
    height: 64px;
    gap: 10px;

    img {
      width: 32px;
      height: 32px;
    }

    .ruido {
      width: 120px;
    }
  }

  @media(min-width: 1280px) {
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
  height: 36px;
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