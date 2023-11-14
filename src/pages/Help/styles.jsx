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
  gap: 24px;
  padding-top: 24px;
  
  @media(max-width: 320px) {
    width: 250px;
    gap: 12px;
    padding-top: 12px;
  }

  @media(min-width: 768px) {
    width: 620px;
    padding-top: 56px;
  }

  @media(min-width: 1024px) {
    width: 1000px;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0;
  }

  @media(min-width: 1440px) {
    width: 1200px;
  }

  @media(min-width: 1920px) {
    width: 1600px;
  }
`;

export const Left = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  @media(min-width: 768px) {
    gap: 32px;
  }
  
  @media(min-width: 1024px) {
    width: 450px;
    height: 420px;
    gap: 0;
    align-items: center;
    justify-content: space-between;
  }

  @media(min-width: 1440px) {
    width: 550px;
    height: 500px;
  }

  @media(min-width: 1920px) {
    width: 750px;
  }
`;

export const Right = styled.main`
  width: 450px;
  height: 420px;
  border: 3px solid transparent;
  border-radius: 8px;
  overflow-y: scroll;

  @media(min-width: 1440px) {
    width: 550px;
    height: 500px;
  }

  @media(min-width: 1920px) {
    width: 750px;
  }
`;

export const TopRight = styled.main`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 30px;
  }

  @media(min-width: 1440px) {
    h2 {
      font-size: 24px;
    }
  }
`;

export const MainRight = styled.main``;

export const Items = styled.button`
  all: unset;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 14px;
  gap: 16px;
  justify-content: flex-start;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  border: 2px solid transparent;
  color: ${props => props.theme["gray-700"]};
  cursor: pointer;

  h2 {
    font-size: 20px;
  }

  @media(max-width: 320px) {
    width: 250px;
    padding-block: 8px;
    gap: 12px;

    h2 {
      font-size: 16px;
    }
  }

  @media(min-width: 768px) {
    width: 620px;
    padding-block: 24px;

    h2 {
      font-size: 26px;
    }
  }

  @media(min-width: 1024px) {
    width: 100%;

    h2 {
      font-size: 24px;
    }
  }

  @media(min-width: 1440px) {
    padding-block: 24px;

    h2 {
      font-size: 24px;
    }
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-inline: 14px;

  img {
    width: 24px;
  }

  @media(max-width: 320px) {
    padding-inline: 8px;

    img {
      width: 16px;
    }
  }

  @media(min-width: 768px) {
    padding-inline: 24px;

    img {
      width: 30px;
    }
  }
`;

export const Inside = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 14px;
  gap: 4px;

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
    padding-inline: 8px;
    
    p {
      font-size: 12px;
    }
  }

  @media(min-width: 768px) {
    padding-inline: 24px;

    p {
      font-size: 18px;
      
    }
  }

  @media(min-width: 1024px) {
    gap: 8px;
    padding-block: 10px;
    
    p {
      font-size: 20px;
      font-weight: normal;
    }
  }
`;

export const AreaFooter = styled.div`
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

  @media(min-width: 1024px) {
    width: 1000px;
    height: 120px;
    border-width: 4px;
  }

  @media(min-width: 1440px) {
    width: 1200px;
  }

  @media(min-width: 1920px) {
    width: 1600px;
  }
`;