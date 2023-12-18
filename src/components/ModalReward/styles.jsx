import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  width: 21rem;
  height: 390px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);

  .bgModal {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @media(max-width: 360px) {
    width: 20rem;
    height: 23rem;
  }

  @media(max-width: 320px) {
    width: 18rem;
    height: 21rem;
  }

  @media(min-width: 768px) {
    width: 31.25rem;
    height: 40.625rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 21rem;
      height: 18.75rem;
    }
  }

  @media(min-width: 1024px) {
    width: 520px;
    height: 500px;
  }

  @media(min-width: 1366px) {
    width: 800px;
    height: 600px
  }
`;

export const Close = styled(Dialog.Close)`
  all: unset;
  position: absolute;
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -0.9375rem;
  right: -0.625rem;
  background-color: ${props => props.theme["red-200"]};
  border-radius: 9999px;

  img {
    width: 16px;
  }

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
    top: -1.875rem;
    right: -1.875rem;
    
    img {
      width: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 2rem;
      height: 2rem;
      top: -1.125rem;
      right: -0.625rem;

      img {
        width: 16px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 4rem;
    height: 4rem;
    top: -1.875rem;
    right: -1.875rem;
    
    img {
      width: 32px;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .bgMoney {
    width: 280px;
    position: absolute;
    z-index: 1;
    top: 0;
  }

  @media (min-width: 1024px) {
    top: -100px;
    
    .bgMoney {
      top: 100px;
      width: 500px;
    }
  }

  @media (min-width: 1366px) {
    .bgMoney {
      width: 650px;
    }
  }
`;

export const Position = styled.div`
  width: 10rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${props => props.theme["blue-800"]};
  margin-top: -9.125rem;
  z-index: 100;

  p {
    font-size: 1.25rem;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    margin-top: -1.3125rem;
  }

  @media(min-width: 768px) {
    width: 15.625rem;
    height: 3rem;
    margin-top: -18.5rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 10rem;
      height: 2.5rem;
      margin-top: -7.5rem;

      p {
        font-size: 1.25rem;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 15.625rem;
    height: 72px;
    margin-top: -370px;

    p {
      font-size: 2rem;
    }
  }

  @media(min-width: 1366px) {
    margin-top: -400px;
  }
`;

export const Reward = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      gap: 0.625rem;
    }
  }

  @media (min-width: 1280px) {
    gap: 1rem;
  }
`;

export const Receive = styled.div`
  width: 13rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  position: relative;

  img {
    width: 30%;
    position: absolute;
    left: -40px;
  }

  p {
    font-size: 1.25rem;
    padding-right: 0.5rem;
    color: ${props => props.theme["gray-700"]};
  }

  span {
    font-size: 1.25rem;
    color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    width: 12rem;
    height: 2rem;

    img {
      width: 25%;
      left: -15px;
    }

    p {
      font-size: 1rem;
      padding-right: 0.75rem;
    }

    span {
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    width: 18.75rem;
    height: 3.25rem;

    img {
      width: 25%;
      left: -4px;
    }

    p {
      font-size: 1.5rem;
      padding-right: 1.25rem;
    }

    span {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 12rem;
      height: 2rem;

      img {
        width: 25%;
        left: -15px;
      }

      p {
        font-size: 1rem;
      }

      span {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 18.75rem;
    height: 3.25rem;

    img {
      width: 25%;
      left: -4px;
    }

    p {
      font-size: 1.5rem;
    }

    span {
      font-size: 1.5rem;
    }
  }
`;

export const Boost = styled.div`
  width: 15.625rem;
  height: 4rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom: 5px solid ${props => props.theme["red-300"]};
  background-color: ${props => props.theme["red-200"]};
  cursor: pointer;
  z-index: 1000;

  p {
    font-size: 1.25rem;
    padding-right: 0.5rem;
    color: ${props => props.theme.white};
  }

  &:hover {
    background-color: ${props => props.theme["red-300"]};
  }

  @media(max-width: 320px) {
    width: 14rem;
    height: 3.5rem;
    justify-content: center;
    border-bottom: 4px solid ${props => props.theme["red-300"]};

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    width: 20rem;
    height: 5.75rem;
    gap: 1rem;
    border-radius: 0.75rem;
    justify-content: center;
    
    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 14rem;
      height: 3.625rem;
      justify-content: center;

      p {
        font-size: 1rem;
      }

      span {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 20rem;
    height: 5.75rem;
    gap: 1rem;
    border-radius: 0.75rem;
    justify-content: center;
    
    p {
      font-size: 1.5rem;
    }
  }

  @media(min-width: 1440px) {
    width: 26.25rem;
    gap: 2rem;
    height: 8.25rem;
  }
`;

export const MiniAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  background-color: ${props => props.theme.white};
  overflow: hidden;

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 768px) {
      width: 3rem;
      height: 3rem;
    }
  }

  @media (min-width: 1366px) {
    width: 4.5rem;
    padding-top: 48px;
    height: 4.5rem;
  }
`;