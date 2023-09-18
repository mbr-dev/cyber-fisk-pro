import styled from "styled-components";

export const Game2Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Game2Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  .btn{
    width: 14.5rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow:  2px 2px 6px #ccc;
    transition: all .2s ease-in-out;
  }

  .btn:hover { 
    transform: scale(1.05); 
  }

  p {
    font-size: 1.375rem;
    color: ${props => props.theme.black};
    font-weight: bold;
    text-transform: capitalize;
  }

  @media(max-width: 320px) {
    gap: 1.5rem;

    .btn{
      width: 12rem;
      height: 3.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 600px) {
    gap: 3rem;
    justify-content: flex-start;
    margin-top: 2rem;

    .btn{
      width: 16rem;
      height: 6rem;
    }

    p {
      font-size: 1.75rem;
    }
  }
`