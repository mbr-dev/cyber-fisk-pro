import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 250px;
    height: 52px;
  }

  @media(min-width: 768px) {
    width: 620px;
    height: 104px;
  }

  @media(min-width: 1280px) {
    width: 680px;
    height: 100px;
    border-width: 4px;
  }

  @media(min-width: 1440px) {
    width: 750px;
  }

  @media(min-width: 1920px) {
    width: 1000px;
  }
`;