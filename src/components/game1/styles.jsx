import styled from "styled-components";

export const Game1Container = styled.div`
  width: 100vw;
`;

export const Game1Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .loading {
    margin-top: 100px;
  }
`;

export const Game1Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.875rem;

  .btn{
    width: 9rem;
    height: 7.5rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 20px;
    box-shadow:  2px 2px 6px #ccc;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all .2s ease-in-out;
  }

  .btn:hover { 
    transform: scale(1.05); 
  }

  .img{
    height: 80%;
  }

  @media(max-width: 320px) {
    margin-top: 1rem;
    gap: 0.75rem;

    .btn{
      width: 6rem;
      height: 5rem;
    }
  }

  /* @media only screen and (max-width: 600px){
    flex-direction: column;

    .btn{
      width: 165px;
      height: 138px;
      margin-bottom: 20px;
      border-radius: 15px;
    }
  }

  @media only screen and (max-width: 1024px){
    flex-direction: column;

    .btn{
      width: 165px;
      height: 138px;
      margin-bottom: 20px;
      border-radius: 15px;
    }
  } */
`