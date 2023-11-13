import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  margin-top: 24px;
  
  @media(max-width: 320px) {
    gap: 12px;
    margin-top: 12px;
  }

  @media(min-width: 1024px) {
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 64px;
    margin-top: 0;
  }

  @media(min-width: 1440px) {
    gap: 72px;
  }
`;

export const Left = styled.main`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  
  @media(min-width: 1024px) {
    width: 45%;
    height: 450px;
    align-items: center;
    justify-content: space-between;
  }

  @media(min-width: 1440px) {
    height: 500px;
  }
`;

export const Right = styled.main`
  width: 45%;
  height: 450px;
  border: 3px solid transparent;
  border-radius: 8px;
  margin-right: -20px;

  @media(min-width: 1440px) {
    height: 500px;
  }
`;

export const TopRight = styled.main`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainRight = styled.main`
  padding-inline: 24px;
`;

export const Items = styled.button`
  all: unset;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  padding: 8px 16px;
  border: 2px solid transparent;
  color: ${props => props.theme["gray-700"]};
  cursor: pointer;

  h2 {
    font-size: 20px;
  }

  @media(max-width: 320px) {
    width: 70%;

    h2 {
      font-size: 16px;
    }
  }

  @media(min-width: 600px) {
    width: 100%;
    padding: 18px 18px;

    h2 {
      font-size: 24px;
    }
  }

  @media(min-width: 1024px) {
    width: 100%;
    padding: 20px 20px;

    h2 {
      font-size: 24px;
    }
  }

  @media(min-width: 1440px) {
    padding: 28px;

    h2 {
      font-size: 24px;
    }
  }
`;

export const Inside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-block: 16px;

  p {
    font-size: 14px;
    font-weight: 500;
  }

  li {
    display: flex;
    flex-wrap: wrap;
  }

  @media(max-width: 320px) {
    gap: 2px;
    padding-block: 10px;
    
    p {
      font-size: 12px;
    }
  }

  @media(min-width: 1024px) {
    gap: 12px;
    padding-block: 10px;
    
    p {
      font-size: 18px;
      font-weight: normal;
    }
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between
`;