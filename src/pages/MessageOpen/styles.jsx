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
  gap: 1rem;
  padding-top: 1rem;

  @media (max-width: 320px) {
    gap: 0.75rem;
    padding-top: 0.75rem;
  }

  @media (min-width: 768px) {
    gap: 2.25rem;
    padding-top: 2.25rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 70%;
      padding-top: 0.5rem;
      align-items: flex-start;
      flex-direction: row;
    }
  }

  @media (min-width: 1024px) {
    width: 50rem;
    padding-top: 1rem;
  }
`;

export const Div = styled.button`
  all: unset;
  width: 18.75rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  background-color: ${props => props.theme.white};

  @media (max-width: 360px) {
    height: 25.625rem;
  }

  @media (max-width: 320px) {
    width: 15.625rem;
    height: 15.625rem;
    overflow-y: scroll;
  }

  @media (min-width: 768px) {
    width: 37.5rem;
    height: 43rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 29rem;
      height: 12.75rem;
    }
  }

  @media (min-width: 1024px) {
    width: 35rem;
    height: 28rem;
  }

  @media (min-width: 1366px) {
    width: 37.5rem;
    height: 32rem;
  }
`;

export const DivHeader = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
  border: 2px solid ${props => props.theme["blue-200"]};
  background-color: ${props => props.theme["blue-50"]};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  @media (max-width: 320px) {
    height: 3.375rem;
  }

  @media (min-width: 768px) {
    height: 4.5rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 2.5rem;
      justify-content: space-between;
      padding-inline: 1rem;
    }
  }

  @media (min-width: 1024px) {
    height: 4.5rem;
  }
`;

export const DivHText = styled.div`
  color: ${props => props.theme.white};

  p {
    font-size: 0.75rem;
    margin-bottom: 5px;
  }

  @media (max-width: 320px) {
    p {
      font-size: 0.625rem;
      margin-bottom: 0.25rem;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.125rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      p {
        font-size: 0.625rem;
      }
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 1.125rem;
    }
  }
`;

export const DivImg = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["blue-200"]};
  background-color: ${props => props.theme.white};
  border-radius: 8px;

  img {
    width: 22px;
    height: 22px;
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

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 2rem;
      height: 2rem;
      border-width: 1px;

      img {
        width: 12px;
        height: 12px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 3.25rem;
    height: 3.25rem;
    border-width: 3px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Text = styled.div`
  flex: 1;
  padding: 0.875rem;
  overflow-y: scroll;

  p {
    font-size: 1rem;
    font-weight: normal;
  }

  @media (max-width: 320px) {
    padding: 0.75rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 768px) {
    padding: 1.5rem;

    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding: 0.5rem;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 1rem;

    p {
      font-size: 1.25rem;
    }
  }
`;

export const AreaButtonDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 0.5rem;

  @media(min-width: 768px) {
    padding-bottom: 1rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: none;
    }
  }
`;

export const AreaButtonDiv2 = styled.div`
  display: none;

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export const ButtonDiv = styled.div`
  width: 5.625rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  background-color: ${props => props.$variant === "green" ? props.theme["green-600"] : props.$variant === "orange" ? props.theme["orange-200"] : props.theme["red-200"]};
  border: 2px solid ${props => props.$variant === "green" ? props.theme["green-700"] : props.$variant === "orange" ? props.theme["orange-300"] : props.theme["red-300"]};
  border-bottom-width: 4px;
  transition: all ease 0.3s;

  img {
    width: 16px;
    height: 16px;
  }

  p {
    font-size: 0.75rem;
    color: ${props => props.theme.white};
  }

  &:hover {
    scale: 1.05;
  }

  @media(max-width: 320px) {
    width: 4.5rem;
    height: 2rem;
    border-radius: 6px;

    p {
      font-size: 0.625rem;
    }

    img {
      width: 14px;
      height: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 10rem;
    height: 3rem;
    border-radius: 6px;

    p {
      font-size: 1.125rem;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 8rem;
      height: 2.5rem;
      border-radius: 6px;

      p {
        font-size: 1rem;
      }

      img {
        width: 18px;
        height: 18px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 10rem;
    height: 3rem;
    border-radius: 6px;

    p {
      font-size: 1.125rem;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
`;
