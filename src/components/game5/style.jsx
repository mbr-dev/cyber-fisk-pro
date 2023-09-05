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
        width: 518px;
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
    .desc{
        font-size: 48px;
        color: black;
    }
    .boxBtn{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    @media only screen and (max-width: 600px){
        flex-direction: column;
        .btn{
            width: 250px;
            height: 50px;
            margin-bottom: 20px;
            margin-right: 20px;
            border-radius: 10px;
        }
        .desc{
            font-size: 22px; 
        }
    }

    @media only screen and (max-width: 1024px){
        flex-direction: column;
        .btn{
            width: 250px;
            height: 50px;
            margin-bottom: 20px;
            margin-right: 20px;
            border-radius: 10px;
        }
        .desc{
            font-size: 22px; 
        }
    }
`

export default Content;