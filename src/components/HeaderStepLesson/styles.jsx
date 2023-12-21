import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
  
export const Main = styled.div`
  width: 22px;
  height: 22px;
  background-color: ${props => props.theme["gray-200"]};
  border: 1px solid ${props => props.theme.black};
  border-left: transparent;

  @media(max-width: 360px) {
    width: 20px;
    height: 20px;
  }

  @media(max-width: 320px) {
    width: 16px;
    height: 16px;
  }

  @media(min-width: 768px) {
    width: 3.25rem;
    height: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 56px;
      height: 24px;
    }
  }

  @media(min-width: 1024px) {
    width: 72px;
    height: 2rem;
  }

  @media(min-width: 1366px) {
    width: 120px;
  }
`;