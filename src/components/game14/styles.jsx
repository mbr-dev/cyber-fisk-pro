import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 8px;
  }

  @media(min-width: 768px) {
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 8px;
    }
  }

  @media(min-width: 1024px) {
    gap: 24px;
  }
`;

export const DivMobile = styled.div`
  width: 100%;

  @media(min-width: 600px) {
    display: none;
  }
`;

export const DivDesk = styled.div`
  display: none;

  @media(min-width: 600px) {
    display: block;
    width: 100%;
  }
`;

export const Image = styled.div`
  width: 280px;
  height: 164px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  @media(max-width: 320px) {
    width: 150px;
    height: 92px;
  }
  
  @media(min-width: 768px) {
    width: 364px;
    height: 200px;
  }
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 420px;
      height: 132px;
    }
  }

  @media(min-width: 1024px) {
    width: 480px;
    height: 250px;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 8px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 600px;
      gap: 0;
      align-items: flex-start;
      flex-direction: row;
    }
  }

  @media(min-width: 1024px) {
    width: 800px;
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 6px;
  }

  @media(min-width: 768px) {
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 4px;
    }
  }

  @media(min-width: 1024px) {
    gap: 24px;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 250px;
  height: 54px;
  padding-inline: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  border: 2px solid transparent;
  border-bottom-width: 3px;
  text-align: center;
  cursor: pointer;
  transition: all ease 0.3s;

  p {
    font-size: 14px;
    color: ${props => props.theme["gray-700"]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 320px) {
    width: 200px;
    height: 40px;

    p {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) {
    width: 300px;
    height: 80px;
    
    p {
      font-size: 20px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 180px;
      height: 32px;

      p {
        font-size: 10px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 72px;
    
    p {
      font-size: 20px;
    }
  }
`;