import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100vw;
  height: 118px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px 0 16px;
  position: relative;

  .bgHeaderImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-end-end-radius: 18px;
    border-end-start-radius: 18px;
  }

  @media(max-width: 320px) {
    height: 98px;
  }
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 20;

  img {
    width: 100%;
    margin-top: -12px;
  }

  p {
    width: 174px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -20px;
    text-align: center;
    border-radius: 6px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media(max-width: 320px) {
    img {
      width: 80%;
    }

    p {
      bottom: 2px;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 64px;
  
  p {
    width: 80%;
    display: flex;
    align-items: flex-start;
    font-size: 24px;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    gap: 12px;
    margin-top: 32px;

    p {
      font-size: 16px;
    }
  }
`;