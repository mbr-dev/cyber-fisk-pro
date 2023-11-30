import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme["gray-700"]};
  }

  @media(min-width: 600px) {
    width: 90%;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;

  @media(max-width: 320px) {
    padding-inline: 0.5rem;
  }

  @media(min-width: 600px) {
    width: 75%;
    align-items: center;
  }

  @media(min-width: 1280px) {
    width: 28rem;
    gap: 1rem;
  }
`;

export const Card = styled.button`
  all: unset;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;

  p {
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
  }

  img {
    width: 54px;
  }

  @media(max-width: 320px) {
    width: 3.5rem;
    height: 3.5rem;

    p {
      font-size: 0.5rem;
    }

    img {
      width: 36px;
    }
  }

  @media(min-width: 600px) {
    width: 3.5rem;
    height: 3.5rem;

    p {
      font-size: 0.75rem;
    }

    img {
      width: 42px;
    }
  }

  @media(min-width: 1280px) {
    width: 6rem;
    height: 6rem;

    p {
      font-size: 1.125rem;
    }

    img {
      width: 54px;
    }
  }
`;

export const Icon = styled.img`
  width: 60%;
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

  @media(min-width: 600px) {
    width: 600px;
    height: 52px;
  }

  @media(min-width: 1280px) {
    width: 1200px;
    height: 100px;
    border-width: 4px;
  }
`;

export const ButtonTask = styled.button`
  all: unset;
  width: 250px;
  height: 32px;
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

  @media (min-width: 600px) {
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
