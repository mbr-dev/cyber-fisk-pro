import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;

  @media(max-width: 320px) {
    margin-top: 1rem;
    gap: 1rem;
  }
`;

export const Button = styled.div`
  width: 18.75rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 0.5rem;
  border-radius: 10px;
  border: 2px solid transparent;
  box-shadow:  2px 2px 6px #ccc;
  transition: all .2s ease-in-out;
  cursor: pointer;

  p {
    text-align: center;
    font-weight: bold;
    color: ${props => props.theme.black};
  }

  @media(max-width: 320px) {
    width: 15rem;
    height: 3.25rem;

    p {
      font-size: 0.75rem;
    }
  }
`;