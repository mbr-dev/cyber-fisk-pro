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
  background-repeat: no-repeat;
  background-size: cover;

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
    img {
      width: 400px;
    }

    p {
      font-size: 3.25rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      img {
        width: 150px;
      }

      p {
        font-size: 32px
      }
    }
  }

  @media(min-width: 1024px) {
    img {
      width: 300px;
    }

    p {
      font-size: 64px;
    }
  }
`;