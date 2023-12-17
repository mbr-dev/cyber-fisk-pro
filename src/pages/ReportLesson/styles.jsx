import styled from "styled-components";

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
  justify-content: center;
`;

export const MainInside = styled.div`
  width: 316px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  
  @media(max-width: 320px) {
    width: 250px;
    gap: 16px;
  }
  
  @media (min-width: 768px) {
    width: 500px;
    gap: 32px;
  }
  
  @media (orientation: landscape) {
    @media (min-width: 600px) {
      width: 420px;
      gap: 24px;
    }
  }

  @media (min-width: 1024px) {
    width: 700px;
    gap: 32px;
  }
  
  @media(min-width: 1280px) {
    width: 800px;
    gap: 40px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  p {
    font-size: 20px;
    font-weight: normal;
  }

  @media (max-width: 320px) {
    p {
      font-size: 18px;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 32px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      flex-direction: column;
      gap: 6px;

      p {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 1024px) {
    gap: 16px;

    p {
      font-size: 32px;
    }
  }
`;

export const DivInside = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["red-200"]};

  p {
    font-weight: bold;
    font-size: 32px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    width: 52px;
    height: 52px;

    p {
      font-size: 18px;
    }

    span {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
    border-width: 3px;
    
    p {
      font-size: 44px;
    }
    
    span {
      font-size: 22px;
    }
  }
  
  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 3.625rem;
      height: 3.625rem;
      border-width: 2px;
      
      p {
        font-size: 1.125rem;
      }
      
      span {
        font-size: 0.875rem;
      }
    }
  }
  
  @media (min-width: 1024px) {
    width: 100px;
    height: 100px;
    border-width: 3px;

    p {
      font-size: 44px;
    }

    span {
      font-size: 24px;
    }
  }

  @media(min-width: 1280px) {
    width: 120px;
    height: 120px;

    p {
      font-size: 3rem;
    }

    span {
      font-size: 1.25rem;
    }
  }
`;