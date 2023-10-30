import { styled } from "styled-components";

export const Container = styled.div`
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(78.01% 55.16% at 50% 46.55%, #2648B1 0%, #001453 100%);
  position: absolute;
  z-index: 200;

  img {
    width: 60%;
  }

  p {
    position: absolute;
    bottom: 4rem;
    color: ${props => props.theme.white};
    font-size: 1.75rem;
  }

  .blinking-text {
    animation: blink 0.8s infinite;
  }

  @media(max-width: 320px) {
    img {
      width: 50%;
    }

    p {
      font-size: 1.5rem;
      bottom: 2rem;
    }
  }
`;