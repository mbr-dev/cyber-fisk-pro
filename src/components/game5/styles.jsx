import styled from "styled-components";

export const Game5Container = styled.div`

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

export const Game5Content = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  
  .btn {
    width: 15rem;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow:  2px 2px 6px #ccc;
    transition: all .2s ease-in-out;
    text-transform: none;
  }

  .btn:hover { 
    transform: scale(1.05); 
  }

  p {
    line-height: 1.75rem;
    font-size: 1.75rem;
    color: ${props => props.theme.black};
  }

  @media(max-width: 360px) {
    margin-top: 1rem;
    gap: 1rem;

    p {
      font-size: 1.25rem;
    }

    .btn{ 
      width: 13rem;
      height: 4rem;
    }
  }
`