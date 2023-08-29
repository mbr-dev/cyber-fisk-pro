import styled from 'styled-components';

const Content = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;

    .title{
        font-size: 48px;
    }
    @media only screen and (max-width: 600px){
        .title{
            font-size: 22px;
        }
    }

    @media only screen and (max-width: 1024px){
        .title{
            font-size: 22px;
        }
    }
`

export default Content;