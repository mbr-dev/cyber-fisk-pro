import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.div`
  width: 60px;
  height: 1.25rem;
  background-color: ${props => props.theme["gray-200"]};
  border: 1px solid ${props => props.theme.black};
  border-left: 0;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  @media(max-width: 320px) {
    width: 1rem;
    height: 1rem;
  }

  @media(min-width: 600px) {
    width: 180px;
    height: 24px;
  }

  @media(min-width: 1024px) {
    width: 400px;
    height: 32px;
  }

  @media(min-width: 1440px) {
    width: 500px;
    height: 36px;
  }

  @media(min-width: 1920px) {
    width: 700px;
  }

  @media(min-width: 2560px) {
    width: 1000px;
  }
`