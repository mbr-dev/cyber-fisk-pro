import styled from "styled-components"

export const Container = styled.footer`
  width: 100vw;
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 6px;
  background-color: ${props => props.theme["red-200"]};
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;

  p {
    font-size: 16px;
    font-weight: normal;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    height: 64px;
    padding-top: 4px;

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    height: 100px;
    padding-top: 10px;

    p {
      font-size: 20px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.25rem;
      padding-block: 6px;

      p {
        font-size: 0.875rem;
        padding-inline: 1rem;
      }
    }
  }

  @media(min-width: 1024px) {
    p {
      font-size: 1.25rem;
      padding-inline: 2.75rem;
    }
  }
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  img {
    width: 64px;
  }

  .iconFooter {
    width: 2.5rem;
  }

  @media(max-width: 320px) {
    gap: 12px;

    img {
      width: 48px;
    }

    .iconFooter {
      width: 24px;
    }
  }

  @media(min-width: 768px) {
    img {
      width: 84px;
    }

    .iconFooter {
      width: 44px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.75rem;

      img {
        width: 32px;
      }

      .iconFooter {
        width: 28px;
      }
    }
  }

  @media(min-width: 1024px) {
    img {
      width: 72px;
    }

    .iconFooter {
      width: 54px;
    }
  }

  @media(min-width: 1366px) {
    img {
      width: 86px;
    }

    .iconFooter {
      width: 64px;
    }
  }
`;