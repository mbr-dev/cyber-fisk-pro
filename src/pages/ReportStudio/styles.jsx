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
  width: 20rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 320px) {
    width: 15.625rem;
  }

  @media (min-width: 768px) {
    width: 27rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 25rem;
      gap: 1rem;
    }
  }

  @media (min-width: 1280px) {
    width: 46.875rem;
    gap: 2rem;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  p {
    font-size: 1.5rem;
    font-weight: normal;
  }

  @media (max-width: 320px) {
    p {
      font-size: 1.125rem;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.75rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      flex-direction: column;
      gap: 6px;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 1280px) {
    p {
      font-size: 1.75rem;
    }
  }
`;

export const DivInside = styled.div`
  width: 4.25rem;
  height: 4.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;

  &:hover {
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme["gray-700"]};
    color: ${props => props.theme.white};
  }

  span {
    font-size: 1.75rem;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 320px) {
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 6px;
    border-width: 2px;

    span {
      font-size: 1.125rem;
    }

    p {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 768px) {
    width: 6.875rem;
    height: 6.875rem;
    border-width: 3px;

    span {
      font-size: 2rem;
    }

    p {
      font-size: 1.375rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 4rem;
      height: 4rem;

      span {
        font-size: 1rem;
      }

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 1280px) {
    width: 6.875rem;
    height: 6.875rem;
    border-width: 3px;

    span {
      font-size: 2rem;
    }

    p {
      font-size: 1.375rem;
    }
  }
`;