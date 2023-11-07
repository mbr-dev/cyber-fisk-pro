import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  overflow: hidden;
  position: relative;

  .bgImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  
  p {
    font-size: 24px;
    font-weight: 500;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    height: 64px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 1024px) {
    height: 120px;
    padding-inline: 32px;

    p {
      font-size: 44px;
    }
  }
`;