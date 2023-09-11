import styled from 'styled-components';

export const Game6Container = styled.div``;

export const Game6Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;

  .btn {
    width: 170px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    box-shadow:  2px 2px 6px #ccc;
    transition: all .2s ease-in-out;
    text-transform: none;
  }

  .btn:hover { 
    transform: scale(1.05); 
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme.black};
    line-height: 1.125rem;
  }

  @media(max-width: 378px) {
    gap: 1rem;

    .btn {
      width: 150px;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media(max-width: 320px) {
    margin-top: 1rem;

    .btn {
      width: 130px;
    }

    p {
      line-height: 1.3;
      font-size: 0.75rem;
    }
  }

  @media(min-width: 600px) {
    gap: 1.75rem;
    
    .btn {
      width: 15rem;
      height: 6rem;

      p {
        font-size: 1.5rem;
        line-height: 1.5;
      }
    }
  }
`