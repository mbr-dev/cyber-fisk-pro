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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.5rem;
    }
  }

  @media(min-width: 1024px) {
    gap: 2rem;
  }
`;

export const DivMobile = styled.div`
  width: 100%;

  @media(min-width: 600px) {
    display: none;
  }
`;

export const DivDesk = styled.div`
  display: none;

  @media(min-width: 600px) {
    display: block;
    width: 100%;
  }
`;

export const Image = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 250px;
    height: 184px;
    object-fit: fill;
  }

  @media(max-width: 320px) {
    img {
      width: 200px;
      height: 120px;
    }
  }

  @media(min-width: 768px) {
    img {
      width: 400px;
      height: 250px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 40%;

      img {
        width: 250px;
        height: 184px;
      }
    }
  }

  @media(min-width: 1024px) {
    img {
      width: 400px;
      height: 250px;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 80%;
      gap: 0.5rem;
      align-items: flex-start;
      flex-direction: row;
    }
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.5rem;
    }
  }

  @media(min-width: 1024px) {
    gap: 2rem;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 18rem;
  height: 3.5rem;
  padding-inline: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  border: 2px solid transparent;
  border-bottom-width: 3px;
  text-align: center;
  cursor: pointer;
  transition: all ease 0.3s;

  p {
    color: ${props => props.theme["gray-700"]};
    font-size: 0.875rem;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 320px) {
    width: 9rem;
    height: 2.5rem;

    p {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 768px) {
    width: 20rem;
    height: 4rem;
    
    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 15rem;
      height: 3rem;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 18rem;
    height: 3.5rem;
  }
`;