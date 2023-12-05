import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 4.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  overflow: hidden;
  position: relative;

  .bgImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  
  p {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    height: 4rem;

    p {
      font-size: 1.125rem;
    }
  }

  @media(min-width: 768px) {
    height: 6.25rem;
    padding-inline: 2rem;

    p {
      font-size: 2.625rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 4rem;

      p {
        font-size: 2rem;
      }
    }
  }

  @media(min-width: 1024px) {
    height: 5.375rem;
    padding-inline: 1.5rem;

    p {
      font-size: 2rem;
    }
  }

  @media(min-width: 1280px) {
    height: 6.25rem;
    padding-inline: 2rem;

    p {
      font-size: 2.625rem;
    }
  }
`;