import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media(min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;

  @media(min-width: 1024px) {
    width: 60%;
    height: 100vh;
  }
`;

export const BtnC = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
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

  @media(min-width: 1024px) {
    width: 40%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 32px 32px 100px 32px;

    .bgHeaderImg {
      border-end-end-radius: 0;
      border-end-start-radius: 0;
    }
  }
`;

export const HeaderButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
    width: 100px;
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
    font-size: 24px;
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

  @media(min-width: 1024px) {
    width: 400px;
    height: 500px;

    img {
      width: 200px;
    }

    p {
      bottom: 0;
      width: 300px;
      height: 52px;
      font-size: 32px;
    }
  }

  @media(min-width: 1920px) {
    width: 500px;
    height: 750px;

    img {
      width: 250px;
      margin-top: 90px;
    }

    p {
      width: 450px;
      height: 74px;
      font-size: 44px;
    }
  }

  @media(min-width: 2560px) {
    width: 600px;
    height: 800px;

    img {
      width: 300px;
      margin-top: 0px;
    }

    p {
      width: 500px;
      height: 82px;
      font-size: 44px;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
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
    cursor: pointer;
  }

  @media(max-width: 320px) {
    gap: 12px;
    margin-top: 32px;

    p {
      font-size: 16px;
    }
  }

  @media(min-width: 1024px) {
    margin-top: 120px;

    p {
      font-size: 32px;
    }
  }

  @media(min-width: 2560px) {
    p {
      font-size: 44px;
    }
  }
`;