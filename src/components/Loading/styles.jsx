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
  padding-top: 10rem;
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

  @media(min-width: 768px) {
    padding-top: 7rem;

    img {
      width: 400px;
    }

    p {
      font-size: 3.25rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-top: 3rem;

      img {
        width: 150px;
      }

      p {
        font-size: 1.25rem;
      }
    }
  }

  @media(min-width: 1280px) {
    padding-top: 5rem;

    img {
      width: 400px;
    }

    p {
      font-size: 3.25rem;
    }
  }
`;