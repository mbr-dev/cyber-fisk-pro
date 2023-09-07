import styled from "styled-components";

export const Game4Container = styled.div`

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

export const Game4Content = styled.div`
  width: 100%;
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  .btn{
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow:  2px 2px 6px #ccc;
    transition: all .2s ease-in-out;
  }

  .btn:hover { 
    transform: scale(1.1); 
  }

  .btn2{
    width: 9.375rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    line-height: 1.375rem;
    box-shadow:  2px 2px 6px #ccc;
    transition: all .2s ease-in-out;
  }

  .btn2:hover { 
    transform: scale(1.05); 
  }

  .desc{
    font-size: 2rem;
    color: ${props => props.theme.black};
    font-weight: bold;
  }
  
  .desc2{
    text-transform: lowercase;
    font-size: 1.25rem;
    color: ${props => props.theme.black};
    font-weight: bold;
  }

  @media (max-width: 360px) {
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .btn2{
      width: 130px;
    }

    .desc{
      font-size: 1.5rem;
    }
    
    .desc2{
      font-size: 1.25rem;
    }
  }
`