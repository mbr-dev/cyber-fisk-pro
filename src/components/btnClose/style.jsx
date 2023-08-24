import styled from 'styled-components';
import { colors } from '../../config/colors';

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* width: 100%; */
  padding: 30px;

  .btn{
    border-radius: 50px;
    background-color: ${colors.btnCloseMenu};
    padding: 10px;
    height: 60px;
    width: 60px;
    box-shadow: 2px 2px 6px #ccc;
  }

  label{
    cursor: pointer;
    position: relative;
    display: block;
    height: 22px;
    width: 30px;
  }

  label span{
    position: absolute;
    display: block;
    height: 5px;
    width: 100%;
    border-radius: 30px;
    background: white;
  }

  label span:nth-child(1){
    top: 8px;
    transform: rotate(-45deg);
  }

  label span:nth-child(2){
    top: 8px;
    transform: rotate(45deg);
  }

  @media only screen and (max-width:600px){
    padding: 10px;
  }
`

export default Content;