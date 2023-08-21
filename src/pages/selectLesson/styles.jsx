import styled from 'styled-components';

const Container = styled.div`
  /* display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%; */

  .boxBtn{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .box{
    display: grid;
    gap: 20px;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    .box{
      gap:10px;
    }
  }

  @media only screen and (max-width: 600px){
    .box{
      gap:10px;
    }
  }
`

export default Container;