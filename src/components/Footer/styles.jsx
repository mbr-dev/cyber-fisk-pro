import styled from "styled-components"

export const Container = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  padding-block: 0.75rem;
  background-color: ${props => props.theme["red-200"]};
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;

  p {
    font-weight: normal;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    padding-block: 0.5rem;
    gap: 0.25rem;

    p {
      font-size: 0.865rem;
    }
  }

  @media(min-width: 480px) {
    gap: 4;
    padding-block: 6px;

    p {
      font-size: 14px;
      padding-inline: 16px;
    }
  }

  @media(min-width: 1280px) {
    p {
      font-size: 20px;
      padding-inline: 44px;
    }
  }
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    width: 64px;
  }

  .iconFooter {
    width: 2.5rem;
  }

  @media(max-width: 320px) {
    img {
      width: 48px;
    }

    .iconFooter {
      width: 1.75rem;
    }
  }

  @media(min-width: 480px) {
    gap: 12px;

    img {
      width: 32px;
    }

    .iconFooter {
      width: 28px;
    }
  }

  @media(min-width: 1280px) {
    img {
      width: 86px;
    }

    .iconFooter {
      width: 64px;
    }
  }
`;