import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.div`
  width: 52px;
  height: 20px;
  background-color: ${props => props.theme["gray-200"]};
  border: 1px solid ${props => props.theme.black};
  border-left: 0;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  @media(min-width: 600px) {
    width: 150px;
    height: 32px;
  }

  @media(min-width: 1024px) {
    width: 250px;
  }

  @media(min-width: 1440px) {
    width: 350px;
    height: 36px;
  }

  @media(min-width: 1920px) {
    width: 500px;
  }

  @media(min-width: 2560px) {
    width: 700px;
  }
`