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

  @media (min-width: 480px) {
    width: 600px;
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1024px) {
    width: 750px;
  }

  @media (min-width: 1920px) {
    width: 1100px;
    height: 200px;
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

  @media (max-width: 320px) {
    p {
      font-size: 18px;
    }
  }

  @media (min-width: 480px) {
    flex-direction: column;
    gap: 6px;

    p {
      font-size: 14px;
    }
  }

  @media (min-width: 1280px) {
    p {
      font-size: 28px;
    }
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
  border: 2px solid ${props => props.theme["red-200"]};
  transition: all ease 0.3s;

  span {
    font-size: 28px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 320px) {
    width: 52px;
    height: 52px;
    border-radius: 6px;
    border-width: 2px;

    span {
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (min-width: 480px) {
    width: 64px;
    height: 64px;

    span {
      font-size: 16px;
    }

    p {
      font-size: 14px;
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