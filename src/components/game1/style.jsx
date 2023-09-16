import styled from 'styled-components';

const Content = styled.div`
    flex-direction: row;
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
        width: 307px;
        height: 207px;
        border-radius: 50px;
        box-shadow:  2px 2px 6px #ccc;
        padding-top: 10px;
        padding-bottom: 10px;
        transition: all .2s ease-in-out;
    }
    .btn:hover { 
        transform: scale(1.1); 
    }
    .img{
        height: 80%;
    }
    @media only screen and (max-width: 600px){
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
    }
`

export default Content;