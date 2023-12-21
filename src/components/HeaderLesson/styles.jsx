import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const Main = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  border-end-end-radius: 16px;
  border-end-start-radius: 16px;
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width: 320px) {
    height: 64px;
  }

  @media(min-width: 768px) {
    height: 120px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 64px;
    }
  }

  @media(min-width: 1024px) {
    height: 120px;
  }
`;

export const BarStep = styled.div`
  display: flex;
  padding: 8px 10px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};
  border-radius: 6px;
  box-shadow: 0px 4px 4px 0px #00000040;

  @media(max-width: 360px) {
    padding: 8px 10px;
  }

  @media(max-width: 320px) {
    padding: 6px 8px;
  }

  @media(min-width: 768px) {
    padding: 12px 16px;
    border-radius: 8px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding: 8px 12px;
      border-radius: 6px;
    }
  }

  @media(min-width: 1024px) {
    padding: 14px 16px;
    border-radius: 6px;
  }
`;

export const Icons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  p {
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.white};
  }

  img {
    width: 32px;
  }

  @media(max-width: 360px) {    
    p {
      font-size: 13px;
    }
  }

  @media(max-width: 320px) {
    gap: 4px;
    
    p {
      font-size: 12px;
    }

    img {
      width: 28px;
    }
  }

  @media(min-width: 768px) {

    img {
      width: 44px;
    }

    p {
      font-size: 1.125rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      img {
        width: 28px;
      }

      p {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {

    img {
      width: 44px;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;