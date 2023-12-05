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
  gap: 1.5rem;
  padding-top: 1.5rem;

  @media (max-width: 320px) {
    gap: 0.75rem;
    padding-top: 0.75rem;
  }

  @media (min-width: 768px) {
    gap: 2.25rem;
    padding-top: 2.25rem;
  }
`;

export const Div = styled.button`
  all: unset;
  width: 18.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 0.75rem;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;

  p {
    font-size: 1.125rem;
    font-weight: 700;
  }

  @media (max-width: 320px) {
    width: 15.625rem;
    height: 2.5rem;

    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    width: 37.5rem;
    height: 4rem;
    padding-inline: 1rem;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const DivImg = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 8px;

  img {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 320px) {
    width: 1.75rem;
    height: 1.75rem;

    img {
      width: 16px;
      height: 16px;
    }
  }

  @media (min-width: 768px) {
    width: 3.25rem;
    height: 3.25rem;
    border-width: 3px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const AreaFooter = styled.div`
  width: 18.75rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 15.625rem;
    height: 3.25rem;
  }

  @media(min-width: 768px) {
    width: 37.5rem;
    height: 5.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 37.5rem;
      height: 3.25rem;
    }
  }

  @media(min-width: 1280px) {
    width: 75rem;
    height: 6.25rem;
    border-width: 4px;
  }
`;

export const ButtonHome = styled.button`
  all: unset;
  width: 15.625rem;
  height: 2.25rem;
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
    width: 12.5rem;
    height: 2rem;

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    width: 25rem;
    height: 2.75rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 782px) {
      width: 15.625rem;
      height: 2rem;
      border-radius: 6px;

      p {
        font-size: 1.125rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 25rem;
    height: 2.75rem;

    p {
      font-size: 2rem;
    }
  }
`;