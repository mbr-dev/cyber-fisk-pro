import styled from 'styled-components';
import {colors} from '../../config/colors';

const Content = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    background-color: ${colors.backgroundSubTitleLesson};
    padding-top: 10px;
    padding-bottom: 10px;
    
    .box{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
    }
    .boxLetter{
        display: flex;
        width: 55px;
        height: 75px;
        border-style: solid;
        border-width: 1px;
        border-radius: 10px;
        background-color: ${colors.white};
        flex-direction: row;
        justify-content: center;
        align-items: center;
       
        margin-right: 10px;
    }
    .desc{
        font-size: 60px;
        color: ${colors.black};
    }
    @media only screen and (max-width: 600px){
        .desc{
            font-size: 20px; 
        }
        .boxLetter{
            width: 25px;
            height: 40px;
            border-radius: 5px;
            margin-right: 10px;
        }
    }

    @media only screen and (max-width: 1024px) and (min-width: 600px){
        .desc{
            font-size: 20px; 
        }
        .boxLetter{
            width: 25px;
            height: 40px;
            border-radius: 5px;
            margin-right: 10px;
        }
    }
`

export default Content;