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

  @media(min-width: 480px) {
    width: 600px;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0;
    gap: 0px;
  }

  @media(min-width: 1280px) {
    width: 1000px;
  }
`;

export const Left = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  @media(min-width: 480px) {
    width: 280px;
    height: 200px;
    gap: 0px;
    justify-content: space-between;
  }
  
  @media(min-width: 1280px) {
    width: 480px;
    height: 400px;
    gap: 0;
    align-items: center;
    justify-content: space-between;
  }

  @media(min-width: 1440px) {
    width: 550px;
    height: 500px;
  }
`;

export const Right = styled.main`
  display: none;
  width: 450px;
  height: 420px;
  border: 2px solid transparent;
  border-radius: 8px;
  overflow-y: scroll;

  @media(min-width: 480px) {
    display: block;
    width: 280px;
    height: 200px;
  }

  @media(min-width: 1280px) {
    width: 480px;
    height: 400px;
  }

  @media(min-width: 1920px) {
    width: 750px;
    border-width: 3px;
  }
`;

export const TopRight = styled.main`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 32px;
  }

  @media(min-width: 480px) {
    padding: 10px;

    h2 {
      font-size: 16px;
    }

    img {
      width: 15px;
    }
  }

  @media(min-width: 1280px) {
    padding: 16px;

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

  @media(min-width: 480px) {
    width: 100%;
    padding-block: 10px;

    h2 {
      font-size: 14px;
    }
  }

  @media(min-width: 1280px) {
    width: 100%;
    padding-block: 16px;

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

  @media(min-width: 480px) {
    padding-inline: 24px;

    img {
      width: 15px;
    }
  }

  @media(min-width: 1280px) {
    img {
      width: 24px;
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

  @media(min-width: 480px) {
    padding-inline: 24px;

    p {
      font-size: 14px;
      font-weight: normal;
    }
  }

  @media(min-width: 1280px) {
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

  @media(min-width: 480px) {
    width: 600px;
    height: 52px;
  }

  @media(min-width: 1280px) {
    width: 1000px;
    height: 120px;
    border-width: 4px;
  }
`;

export const ButtonHome = styled.button`
  all: unset;
  width: 250px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom-width: 3px;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 24px;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 200px;
    height: 32px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 480px) {
    height: 32px;
    border-radius: 6px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 1280px) {
    width: 400px;
    height: 56px;

    p {
      font-size: 32px;
    }
  }
`;