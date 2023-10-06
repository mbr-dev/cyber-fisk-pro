import styled from "styled-components";

export const Container = styled.div`

  @media(max-width: 360px) {
    .buttonOfAudio {
      width: 100%;

    button {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  @media(max-width: 360px) {
    gap: 1rem;
    margin-top: 1rem;
  }  
`;

export const Button = styled.div`
  width: 15rem;
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
    font-size: 1.125rem;
    font-weight: bold;
    color: ${props => props.theme.black};
  }

  &:hover { 
    transform: scale(1.05); 
  }

  @media(max-width: 360px) {
    p {
      font-size: 1rem;
    }
  }  
`;