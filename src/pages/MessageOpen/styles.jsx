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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 16px;

  @media (max-width: 320px) {
    padding-block: 12px;
  }

  @media (min-width: 768px) {
    padding-block: 32px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding-block: 4px;
    }
  }

  @media (min-width: 1024px) {
    padding-block: 36px;
  }
`;

export const Div = styled.div`
  flex: 1;
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  background-color: ${props => props.theme.white};

  @media (max-width: 320px) {
    width: 250px;
  }

  @media (min-width: 768px) {
    width: 600px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 650px;
      flex-direction: row;
      position: relative;
    }
  }

  @media (min-width: 1024px) {
    width: 800px;
  }

  @media (min-width: 1366px) {
    width: 1000px;
  }
`;

export const DivHeader = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${props => props.theme["blue-200"]};
  background-color: ${props => props.theme["blue-50"]};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-inline: 14px;

  @media (max-width: 320px) {
    height: 48px;
  }

  @media (min-width: 768px) {
    height: 72px;
    padding-inline: 16px
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 42px;
      padding-inline: 14px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  @media (min-width: 1024px) {
    height: 72px;
    padding-inline: 32px;
  }
`;

export const DivHText = styled.div`
  color: ${props => props.theme.white};

  p {
    font-size: 12px;
    line-height: 1.5;
  }

  @media (max-width: 320px) {
    p {
      font-size: 10px;
      line-height: 1.3;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 18px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      p {
        font-size: 10px;
      }
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 18px;
    }
  }
`;

export const DivImg = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["blue-200"]};
  background-color: ${props => props.theme.white};
  border-radius: 8px;

  img {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 320px) {
    width: 32px;
    height: 32px;

    img {
      width: 18px;
      height: 18px;
    }
  }

  @media (min-width: 768px) {
    width: 3.25rem;
    height: 3.25rem;
    border-width: 3px;

    img {
      width: 28px;
      height: 28px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 30px;
      height: 30px;
      border-width: 1px;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 3.25rem;
    height: 3.25rem;
    border-width: 3px;

    img {
      width: 28px;
      height: 28px;
    }
  }
`;

export const Text = styled.div`
  flex: 1;
  padding: 16px;

  p {
    font-size: 16px;
    font-weight: normal;
  }

  @media (max-width: 320px) {
    padding: 12px;

    p {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    padding: 24px;

    p {
      font-size: 22px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding: 8px;
      margin-top: 42px;

      p {
        font-size: 12px;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 18px 32px;
    margin-top: 64px;

    p {
      font-size: 20px;
    }
  }
`;

export const AreaButtonDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-block: 8px;

  @media(min-width: 768px) {
    padding-block: 10px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 120px;
      padding-block: 0;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
      margin-top: 38px;
    }
  }

  @media(min-width: 1024px) {
    width: 200px;
    gap: 24px;
    margin-top: 0;
  }

  @media(min-width: 1366px) {
    padding-block: 16px;
  }
`;

export const ButtonDiv = styled.div`
  width: 92px;
  height: 36px;
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
    font-size: 14px;
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
    width: 172px;
    height: 52px;
    border-radius: 12px;

    p {
      font-size: 20px;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 100px;
      height: 42px;
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
    height: 64px;
    border-radius: 12px;
    gap: 16px;

    p {
      font-size: 24px;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`;
