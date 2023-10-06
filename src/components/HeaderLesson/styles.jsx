import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  height: 4.5rem;
  align-items: center;
  background-color: ${props => props.theme["gray-200"]};
  border-end-end-radius: 24px;
  border-end-start-radius: 24px;
`

export const BarStep = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #00000040;

  @media(max-width: 320px) {
    padding: 0.5rem;
  }

  @media(min-width: 600px) {
    padding: 0.75rem 1rem;
  }
`;

export const Icons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  p {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${props => props.theme["gray-700"]};
  }

  img {
    width: 32px;
  }

  @media(max-width: 320px) {
    img {
      width: 28px;
    }
  }

  @media(min-width: 600px) {
    p {
      font-size: 1rem;
    }
  }
`;