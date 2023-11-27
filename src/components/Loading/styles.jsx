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
  position: relative;
  z-index: 200;

  .bgImg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: -1px;
  }

  img {
    width: 60%;
    z-index: 200;
  }

  p { 
    z-index: 200;
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

  @media(min-width: 480px) {
    img {
      width: 200px;
    }

    p {
      font-size: 36px;
    }
  }

  @media(min-width: 1280px) {
    img {
      width: 400px;
    }

    p {
      font-size: 52px;
    }
  }
`;