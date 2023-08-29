import styled from 'styled-components';

const Content = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    background-color: #E6E6E6;
    padding-top: 10px;
    padding-bottom: 10px;

    .title{
        font-size: 64px;
    }

    @media only screen and (max-width: 600px){
        .title{
            font-size: 24px;
        }
    }

    @media only screen and (max-width: 1024px){
        .title{
            font-size: 24px;
        }
    }
`

export default Content;