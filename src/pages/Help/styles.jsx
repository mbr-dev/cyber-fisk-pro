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
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 24px;
  
  @media(max-width: 320px) {
    width: 250px;
    padding-top: 10px;
  }

  @media(min-width: 768px) {
    width: 500px;
    padding-top: 32px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 620px;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 6px;
    }
  }

  @media(min-width: 1024px) {
    width: 850px;
    align-items: flex-start;
    padding-top: 32px;
  }

  @media(min-width: 1366px) {
    width: 1000px;
    padding-top: 48px;
  }

  @media(min-width: 1920px) {
    width: 1300px;
  }
`;

export const Left = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media(max-width: 320px) {
    gap: 12px;
  }

  @media(min-width: 768px) {
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 280px;
      height: 192px;
      justify-content: space-between;
      gap: 0;
    }
  }
  
  @media(min-width: 1024px) {
    width: 380px;
    height: 372px;
  }

  @media(min-width: 1366px) {
    height: 400px;
  }

  @media(min-width: 1920px) {
    width: 550px;
    height: 500px;
  }
`;

export const Items = styled.button`
  all: unset;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  border: 2px solid transparent;
  color: ${props => props.theme["gray-700"]};
  cursor: pointer;
`;

export const Top = styled.div`
  height: 52px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 14px;

  h2 { 
    font-size: 20px;
  }

  img {
    width: 20px;
    height: 20px;
  }

  @media(max-width: 320px) {
    height: 44px;
    padding-inline: 10px;

    h2 { 
      font-size: 16px;
    }

    img {
      width: 18px;
      height: 18px;
    }
  }

  @media(min-width: 768px) {
    padding-inline: 16px;
    height: 72px;

    h2 { 
      font-size: 24px;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-inline: 10px;
      height: 40px;

      h2 { 
        font-size: 16px;
      }

      img {
        width: 16px;
        height: 16px;
      }
    }
  }

  @media(min-width: 1024px) {
    padding-inline: 16px;
    height: 64px;
    
    h2 { 
      font-size: 24px;
    }
    
    img {
      width: 24px;
      height: 24px;
    }
  }
  
  @media(min-width: 1366px) {
    height: 72px;
  }
`;

export const InsideLeft = styled.div`
  height: 228px;
  padding-inline: 12px;
  overflow-x: scroll;

  p {
    font-size:  14px;
    font-weight: normal;
  }

  li {
    display: flex;
    flex-wrap: wrap;
  }

  @media(max-width: 320px) {
    height: 110px;
    padding-inline: 6px;
    
    p {
      font-size: 12px;
    }
  }

  @media(min-width: 768px) {
    height: 300px;
    padding-inline: 14px;
    
    p {
      font-size: 18px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      display: none
    }
  }
`;

export const Right = styled.main`
  display: none;
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      display: block;
      width: 280px;
      height: 192px;
      border: 2px solid transparent;
      border-radius: 0.5rem;
    }
  }

  @media(min-width: 1024px) {
    width: 380px;
    height: 372px;
  }

  @media(min-width: 1366px) {
    width: 420px;
    height: 400px;
  }

  @media(min-width: 1920px) {
    width: 550px;
    height: 500px;
  }
`;

export const InsideRight = styled.div`
  padding-inline: 12px;

  p {
    font-size:  12px;
    font-weight: normal;
  }

  li {
    display: flex;
    flex-wrap: wrap;
  }

  @media(min-width: 1024px) {
    padding-inline: 16px;
    
    p {
      font-size: 18px;
    }
  }

  @media(min-width: 1920px) {
    padding-inline: 20px;
    
    p {
      font-size: 20px;
    }
  }
`;

export const TopRight = styled.main`
  width: 100%;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 16px;
  }

  img {
    width: 16px;
    height: 16px;
  }

  @media(min-width: 1024px) {
    padding: 14px 18px;

    h2 {
      font-size: 20px;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const MainRight = styled.main``;