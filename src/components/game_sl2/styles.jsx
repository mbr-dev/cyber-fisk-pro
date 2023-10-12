import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  
  p {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 320px) {
   margin-top: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
`;

export const Card = styled.button`
  all: unset;
  width: 5.125rem;
  height: 5.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;

  p {
    font-size: 0.7rem;
    font-weight: bold;
    text-align: center;
  }

  img {
    width: 80%;
  }

  @media(max-width: 376px) {
    width: 4.75rem;
    height: 4.75rem;

    p {
      font-size: 0.875rem;
      font-weight: bold;
      text-align: center;
    }
  }

  @media(max-width: 360px) {
    width: 4.5rem;
    height: 4.5rem;
  }

  @media(max-width: 320px) {
    width: 4rem;
    height: 4rem;

    p {
      font-size: 0.75rem;
    }
  }
`;

export const Icon = styled.img`
  width: 60%;
`;
