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
    transform: scale(1.1); 
  }

  p {
    font-size: 1.375rem;
    color: ${props => props.theme.black};
    font-weight: bold;
  }

  @media(max-width: 320px) {
    gap: 1rem;

    .btn{
      width: 14rem;
      height: 3rem;
    }

    p {
      font-size: 1rem;
    }
  }

  /* @media only screen and (max-width: 600px){
    flex-direction: column;

    .btn{
      width: 265px;
      height: 65px;
      margin-bottom: 20px;
      border-radius: 15px;
    }

    .desc{
      font-size: 22px;
      text-transform: none;
      color: black;
    }
  }

  @media only screen and (max-width: 1024px){
    flex-direction: column;

    .btn{
      width: 265px;
      height: 65px;
      margin-bottom: 20px;
      border-radius: 15px;
    }

    .desc{
      font-size: 22px;
      text-transform: none;
      color: black;
    }
  } */
`