import styled from 'styled-components';
import { colors } from '../../config/colors';
import { fonts } from '../../config/fonts';

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;

  .btn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    box-shadow: 2px 2px 6px #ccc;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 180px;
    height: 180px;
    transition: all .2s ease-in-out;
  }
  .btn:hover{
    transform: scale(1.1);
  }
  .text{
    color: black;
    font-size: 32px;
    font-weight: bold;
  }
  .textNum{
    color: black;
    font-size: 70px;
    font-weight: bold;
  }
  .boxBtn{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    padding: 15px;
    .text{
      font-size: 24px;
    }
    .textNum{
      font-size: 40px;
    }
    .btn{
      border-radius: 30px;
      width: 140px;
      height: 140px;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 15px;
    .text{
      font-size: 24px;
    }
    .textNum{
      font-size: 40px;
    }
    .btn{
      border-radius: 30px;
      width: 140px;
      height: 140px;
    }
  }
`
export default Content;