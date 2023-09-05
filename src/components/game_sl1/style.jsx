import {colors} from '../../config/colors';
import styled from 'styled-components';

const Content = styled.div`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    display: flex;
    width: 100%;
    margin-top: 30px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;

    .btn{
        flex-direction: row;
        justify-content: center;
        align-items: center;
        display: flex;
        width: 80px;
        height: 95px;
        border-radius: 20px;
        box-shadow:  2px 2px 6px #ccc;
        padding-top: 10px;
        padding-bottom: 10px;
        transition: all .2s ease-in-out;
        margin-bottom: 40px;
        margin-right: 40px;
        text-transform: none !important;
    }
    .btn:hover { 
        transform: scale(1.1); 
    }
    .btnClear{
        flex-direction: row;
        justify-content: center;
        align-items: center;
        display: flex;
        width: 215px;
        height: 99px;
        border-radius: 20px;
        box-shadow:  2px 2px 6px #ccc;
        padding-top: 10px;
        padding-bottom: 10px;
        transition: all .2s ease-in-out;
        margin-bottom: 40px;
        margin-right: 40px;
        text-transform: none !important;
        background-color: ${colors.lessonError}
    }
    .btnClear:hover { 
        transform: scale(1.1);
        background-color: ${colors.stepLessonError} 
    }
    .desc{
        font-size: 48px;
        color: ${colors.black};
    }
    .descClear{
        font-size: 48px;
        color: ${colors.white};
    }
    .boxBtn{
        display: grid;
        grid-template-columns: auto auto auto auto;
        justify-content: center;
        align-items: center;
    }
    .boxBtnClear{
        flex-direction: row;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .boxTimer{
        display: flex;
        flex-direction: row;
        font-size: 20px;
        padding-bottom: 20px;
        font-weight: bold; 
    }
    .base-timer {
    position: relative;
    width: 300px;
    height: 300px;
  }
  
  .base-timer__svg {
    transform: scaleX(-1);
  }
  
  .base-timer__circle {
    fill: none;
    stroke: none;
  }
  
  .base-timer__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }
  
  .base-timer__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: red;
  }

  .base-timer__label {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
  }

    @media only screen and (max-width: 600px){
        .btn{
            width: 55px;
            height: 65px;
            margin-bottom: 20px;
            margin-right: 20px;
            border-radius: 10px;
        }
        .btnClear{
            width: 190px;
            height: 60px;
            margin-bottom: 20px;
            margin-right: 20px;
            border-radius: 10px;
        }
        .descClear{
            font-size: 24px;
        }
        .desc{
            font-size: 22px; 
        }
    }

    @media only screen and (max-width: 1024px) and (min-width: 600px){
        .btn{
            width: 55px;
            height: 65px;
            margin-bottom: 20px;
            margin-right: 20px;
            border-radius: 10px;
        }
        
        .desc{
            font-size: 22px; 
        }
        .btnClear{
            width: 190px;
            height: 60px;
            margin-bottom: 20px;
            margin-right: 20px;
            border-radius: 10px;
        }
    }
`

export default Content;