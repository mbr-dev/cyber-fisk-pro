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
  justify-content: center;
`;

export const AreaButtons = styled.div`
  width: 230px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media(max-width: 320px) {
    width: 160px;
    gap: 8px;
  }

  @media (min-width: 768px) {
    width: 400px;
    gap: 32px;
    justify-content: center;
  }

  @media (orientation: landscape) {
    @media (min-width: 600px) {
      width: 420px;
      gap: 24px;
    }
  }

  @media (min-width: 1024px) {
    width: 700px;
    gap: 32px;
  }
  
  @media(min-width: 1280px) {
    width: 800px;
    gap: 40px;
  }
`;

export const DivInside = styled.button`
  all: unset;
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all ease 0.3s;

  p {
    font-weight: bold;
    font-size: 32px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border: 2px solid ${props => props.theme.black};
  }

  &:disabled{
    background-color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 320px) {
    width: 52px;
    height: 52px;

    p {
      font-size: 18px;
    }

    span {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) {
    width: 110px;
    height: 110px;

    p {
      font-size: 44px;
    }

    span {
      font-size: 22px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 3.625rem;
      height: 3.625rem;

      p {
        font-size: 1.125rem;
      }

      span {
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 100px;
    height: 100px;

    p {
      font-size: 44px;
    }

    span {
      font-size: 24px;
    }
  }

  @media(min-width: 1280px) {
    width: 120px;
    height: 120px;

    p {
      font-size: 3rem;
    }

    span {
      font-size: 1.25rem;
    }
  }
`;