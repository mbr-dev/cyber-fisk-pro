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
`;