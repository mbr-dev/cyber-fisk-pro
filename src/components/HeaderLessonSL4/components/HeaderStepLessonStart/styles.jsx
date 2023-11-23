import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.div`
  width: 44px;
  height: 20px;
  background-color: ${props => props.theme["gray-200"]};
  border: 1px solid ${props => props.theme.black};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  @media(max-width: 360px) {
    width: 38px;
  }

  @media(max-width: 360px) {
    width: 32px;
  }

  @media(min-width: 480px) {
    width: 100px;
    height: 28px;
  }

  @media(min-width: 1024px) {
    width: 190px;
  }

  @media(min-width: 1440px) {
    width: 220px;
    height: 36px;
  }

  @media(min-width: 1920px) {
    width: 300px;
  }

  @media(min-width: 2560px) {
    width: 350px;
  }
`;