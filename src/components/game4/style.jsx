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
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 189px;
        height: 189px;
        border-radius: 20px;
        box-shadow:  2px 2px 6px #ccc;
        padding-top: 10px;
        padding-bottom: 10px;
        transition: all .2s ease-in-out;
        margin-bottom: 40px;
        margin-right: 40px; 
    }
    .btn:hover { 
        transform: scale(1.1); 
    }
    .btn2{
        flex-direction: row;
        justify-content: center;
        align-items: center;
        display: flex;
        width: 400px;
        height: 95px;
        border-radius: 20px;
        box-shadow:  2px 2px 6px #ccc;
        padding-top: 10px;
        padding-bottom: 10px;
        transition: all .2s ease-in-out;
        margin-bottom: 40px;
        margin-right: 40px; 
    }
    .btn2:hover { 
        transform: scale(1.1); 
    }
    .desc{
        font-size: 128px;
        color: black;
    }
    .desc2{
        font-size: 48px;
        color: black;
        text-transform: lowercase !important;
    }
    .boxBtn{
        display: grid;
        grid-template-columns: auto auto;        
        justify-content: center;
        align-items: center;
    }
    @media only screen and (max-width: 600px){
        flex-direction: column;
        .btn{
            width: 79px;
            height: 79px;
            margin-bottom: 20px;
            border-radius: 10px;
        }
        .desc{
            font-size: 24px; 
        }
        .btn2{
            width: 160px;
            height: 50px;
            margin-bottom: 20px;
            margin-right: 20px;
            border-radius: 10px;
        }
        .desc2{
            font-size: 22px; 
        }
        
    }

    @media only screen and (max-width: 1024px){
        flex-direction: column;
        .btn{
            width: 79px;
            height: 79px;
            margin-bottom: 20px;
            border-radius: 10px;
        }
        .desc{
            font-size: 24px; 
        }
        .btn2{
            width: 160px;
            height: 50px;
            margin-bottom: 20px;
            margin-right: 20px;
            border-radius: 10px;
        }
        .desc2{
            font-size: 22px; 
        }
    }
`

export default Content;