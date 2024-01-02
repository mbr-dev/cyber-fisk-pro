import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  overflow: hidden;

  @media(max-width: 320px) {
    gap: 8px;
  }

  @media(min-width: 768px) {
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 8px;
    }
  }

  @media(min-width: 1024px) {
    gap: 16px;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 250px;
  height: 54px;
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
    font-size: 14px;
    color: ${props => props.theme["gray-700"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 200px;
    height: 40px;

    p {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) {
    width: 320px;
    height: 72px;

    p {
      font-size: 20px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 200px;
      height: 40px;

      p {
        font-size: 12px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 60px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 1366px) {
    width: 320px;
    height: 72px;

    p {
      font-size: 20px;
    }
  }
`;

export const ButtonCheck = styled.button`
 all: unset;
  width: 200px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["green-600"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme["green-700"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  cursor: pointer;

  p {
    font-size: 24px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 200px;
    height: 32px;

    p {
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    width: 300px;
    height: 54px;

    p {
      font-size: 32px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 200px;
      height: 32px;

      p {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 44px;

    p {
      font-size: 32px;
    }
  }

  @media (min-width: 1920px) {
    height: 52px;
  }
`;