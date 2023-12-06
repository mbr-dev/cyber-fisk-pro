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
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  padding-top: 1.5rem;
  
  @media(max-width: 320px) {
    width: 250px;
    gap: 0.75rem;
    padding-top: 0.75rem;
  }

  @media(min-width: 768px) {
    width: 28rem;
    gap: 2rem;
    padding-top: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 37.5rem;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 0;
      gap: 0px;
    }
  }

  @media(min-width: 1280px) {
    width: 62.5rem;
  }

  @media(min-width: 1920px) {
    width: 75rem;
  }
`;

export const Left = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  @media(min-width: 768px) {
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 17.5rem;
      height: 12.5rem;
      gap: 0px;
      justify-content: space-between;
    }
  }
  
  @media(min-width: 1280px) {
    width: 30rem;
    height: 25rem;
    gap: 0;
    align-items: center;
    justify-content: space-between;
  }

  @media(min-width: 1920px) {
    width: 34.375rem;
    height: 32.25rem;
  }
`;

export const Right = styled.main`
  display: none;
  width: 28.125rem;
  height: 26.25rem;
  border: 2px solid transparent;
  border-radius: 0.5rem;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      display: block;
      width: 17.5rem;
      height: 12.5rem;
      overflow-y: scroll;
    }
  }

  @media(min-width: 1280px) {
    width: 30rem;
    height: 25rem;
  }

  @media(min-width: 1920px) {
    width: 34.375rem;
    height: 31.25rem;
  }
`;

export const TopRight = styled.main`
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 32px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding: 0.625rem;

      h2 {
        font-size: 1rem;
      }

      img {
        width: 15px;
      }
    }
}

  @media(min-width: 1280px) {
    padding: 1rem;

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const MainRight = styled.main``;

export const Items = styled.button`
  all: unset;
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 0.875rem;
  gap: 1rem;
  justify-content: flex-start;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  border: 2px solid transparent;
  color: ${props => props.theme["gray-700"]};
  cursor: pointer;

  @media(max-width: 320px) {
    width: 15.625rem;
    padding-block: 0.5rem;
    gap: 0.75rem;
  }

  @media(min-width: 768px) {
    width: 100%;
    padding-block: 1rem;

    h2 {
      font-size: 1.5rem;
    }
  }

  @media(min-width: 768px) {
    width: 100%;
    padding-block: 1rem;

    h2 {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 100%;
      padding-block: 0.625rem;

      h2 {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 100%;
    padding-block: 1rem;

    h2 {
      font-size: 1.5rem;
    }
  }

  @media(min-width: 1440px) {
    padding-block: 1.5rem;

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-inline: 0.875rem;

  img {
    width: 24px;
  }

  @media(max-width: 320px) {
    padding-inline: 0.5rem;

    img {
      width: 16px;
    }
  }

  @media(min-width: 768px) {
    padding-inline: 1rem;

    img {
      width: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-inline: 1.5rem;

      img {
        width: 15px;
      }
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
  padding-inline: 0.875rem;
  gap: 4px;

  p {
    font-size:  0.875rem;
    font-weight: 500;
  }

  li {
    display: flex;
    flex-wrap: wrap;
  }

  @media(max-width: 320px) {
    gap: 2px;
    padding-inline: 0.5rem;
    
    p {
      font-size: 0.75rem
    }
  }

  @media(min-width: 768px) {
    gap: 0.5rem;
    padding-block: 0.625rem;
    
    p {
      font-size: 1.25rem;
      font-weight: normal;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-inline: 1.5rem;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1280px) {
    gap: 0.5rem;
    padding-block: 0.625rem;
    
    p {
      font-size: 1.25rem;
    }
  }
`;