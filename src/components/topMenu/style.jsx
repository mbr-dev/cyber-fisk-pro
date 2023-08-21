import styled from 'styled-components';
import { colors } from '../../config/colors';
import { fonts } from '../../config/fonts';

const Content = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: auto;
  background-color: ${colors.backgroundTopLesson};
  border-radius: 0px 0px 35px 35px;

  .boxStep{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
  }

  .title{
    font-size: 64px;
    font-weight: 500;
    padding: 20px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 600px){
    .title{
      font-size: 28px;
    }
  }

  @media only screen and (max-width: 600px){
    .title{
      font-size: 28px;
    }
  }
`

export default Content;