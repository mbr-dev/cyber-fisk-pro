import styled from 'styled-components';
import {colors} from '../../config/colors';

const Content = styled.div`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    display: flex;
    width: 100%;
    background-color: ${colors.backgroundSubTitleLesson};
    padding-top: 10px;
    padding-bottom: 10px;

    .title{
        font-size: 64px;
    }
    .btn{
        width: 182px;
        height: 182px;
        background-color: ${colors.stepLessonError};
        border-radius: 20px;
        transition: all .2s ease-in-out;
    }
    
    .btn:hover { 
        transform: scale(0.8); 
    }
    @media only screen and (max-width: 600px){
        .title{
            font-size: 28px;
        }
        .btn{
            width: 102px;
            height: 102px;
        }
        .img{
            width: 50%;
        }
        .img2{
            width: 50%;
        }
    }

    @media only screen and (max-width: 1024px){
        .title{
            font-size: 28px;
        }
        .btn{
            width: 102px;
            height: 102px;
        }
        .img{
            width: 50%;
        }
        .img2{
            width: 50%;
        }
    }
`

export default Content;