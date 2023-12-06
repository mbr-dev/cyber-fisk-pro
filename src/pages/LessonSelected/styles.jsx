import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100vw;
  height: 9.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  overflow: hidden;
  position: relative;

  .bgHeaderImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @media(max-width: 320px) {
    height: 7.5rem;
    gap: 0.375rem;
  }

  @media(min-width: 768px) {
    height: 12rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 4rem;
      justify-content: center;
      gap: 0px;
    }
  }

  @media(min-width: 1024px) {
    height: 5.375rem;
  }

  @media(min-width: 1280px) {
    height: 6.25rem;
  }
`;

export const HeaderTop = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  padding-top: 1rem;

  .logoFiskD {
    display: none;
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    font-size: 1.5rem;
    padding-inline: 0.75rem;
    padding-top: 0.75rem;
  }

  @media(min-width: 768px) {
    .logoFiskD {
      width: 100px;
    }

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-top: 0px;

      .logoFiskD {
        display: block;
        width: 80px;
        margin-left: -250px;
      }

      p {
        font-size: 1.75rem;
        margin-left: -100px;
      }
    }
  }

  @media(min-width: 1024px) {
    .logoFiskD {
      width: 100px;
      margin-left: -21.875rem;
    }

    p {
      font-size: 1.75rem;
      margin-left: -6.25rem;
    }
  }

  @media(min-width: 1280px) {
    .logoFiskD {
      width: 100px;
      margin-left: -30rem;
    }

    p {
      font-size: 2rem;
      margin-left: -6.25rem;
    }
  }

  @media(min-width: 1920px) {
    .logoFiskD {
      width: 100px;
      margin-left: -50rem;
    }
  }
`;

export const HeaderBottom = styled.header`
  display: flex;
  align-items: center;
  
  .logoFisk {
    width: 164px;
  }

  @media (min-width: 768px) {
    .logoFisk {
      width: 220px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      .logoFisk {
        display: none;
      }
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media(max-width: 360px) {
    gap: 0.875rem;
  }

  @media(max-width: 320px) {
    gap: 0.5rem;
    padding-block: 0.625rem;
  }

  @media(min-width: 768px) {
    width: 31.25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 36.25rem;
      gap: 0;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media(min-width: 1280px) {
    width: 62.5rem;
  }
`;

export const ButtonAreaTop = styled.div`
  width: 100%;
  height: 13rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media(max-width: 360px) {
    height: 12.25rem;
  }

  @media(max-width: 320px) {
    width: 15.625rem;
    height: 8rem;
  }

  @media(min-width: 768px) {
    width: 27rem;
    height: 20rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 15.625rem;
      height: 12.5rem;
    }
  }

  @media(min-width: 1280px) {
    width: 28.125rem;
    height: 21.875rem;
  }
`;

export const DivRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ButtonTask = styled.button`
  all: unset;
  width: 6.875rem;
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;
  cursor: pointer;

  img {
    width: 42px;
  }

  p {
    font-size: 1.125rem;
    font-weight: 500;
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme.black};
  }

  @media(max-width: 360px) {
    height: 5.375rem;

    img {
      width: 36px;
    }

    p {
      font-size: 1rem;
    }
  }

  @media(max-width: 320px) {
    width: 6rem;
    height: 3.5rem;

    img {
      width: 24px;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    width: 11.25rem;
    height: 8.5rem;
    border-radius: 8px;
    border-width: 3px;
    gap: 0.625rem;

    img {
      width: 54px;
    }

    p {
      font-size: 1.25rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 5.375rem;
      height: 5.75rem;
      gap: 0.25rem;

      img {
        width: 32px;
      }

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 11.25rem;
    height: 9.375rem;
    border-radius: 16px;
    border-width: 3px;
    gap: 0.625rem;

    img {
      width: 54px;
    }

    p {
      font-size: 1.25rem;
    }
  }
`;

export const ButtonSuperTask = styled.button`
  all: unset;
  width: 9.375rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;
  cursor: pointer;

  p {
    font-size: 1.25rem;
    font-weight: 500;
  }

  img {
    width: 68px;
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme.black};
  }

  @media(max-width: 320px) {
    width: 6.75rem;
    gap: 6px;

    p {
      font-size: 0.875rem;
    }

    img {
      width: 44px;
    }
  }

  @media(min-width: 768px) {
    width: 12.5rem;
    border-radius: 8px;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 84px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 7.5rem;

      p {
        font-size: 1rem;
      }

      img {
        width: 52px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 13.75rem;
    border-radius: 16px;
    border-width: 3px;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 84px;
    }
  }
`;

export const ButtonAreaBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 320px) {
    width: 15.625rem;
  }

  @media(min-width: 768px) {
    width: 27rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 18.75rem;
      height: 12.5rem;
    }
  }

  @media(min-width: 1280px) {
    width: 28.75rem;
    height: 21.875rem;
    gap: 0;
  }
`;

export const BottomRight = styled.div`
  width: 9.375rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media(max-width: 320px) {
    width: 6.75rem;
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    width: 12.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 9.375rem;
      height: 100%;
      justify-content: space-between;
    }
  }

  @media(min-width: 1280px) {
    width: 14.375rem;
    height: 100%;
    justify-content: space-between;
  }
`;

export const BottomLeft = styled.div`
  width: 6.875rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media(max-width: 320px) {
    width: 6rem;
    gap: 0.5rem
  }

  @media(min-width: 768px) {
    width: 11.25rem;
  }
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 8.125rem;
      height: 100%;
      justify-content: space-between;
    }
  }

  @media(min-width: 1280px) {
    width: 12.5rem;
    height: 100%;
    justify-content: space-between;
  }
`;

export const ButtonBottom = styled.button`
  all: unset;
  width: 100%;
  height: 4.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;
  cursor: pointer;

  p {
    font-size: 0.875rem;
    font-weight: 500;
  }

  img {
    width: 42px;
  }
  
  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme.black};
  }

  @media(max-width: 360px) {
    height: 62px;

    img {
      width: 32px;
    }
  }

  @media(max-width: 320px) {
    height: 3rem;
    gap: 0.5rem;

    p { 
      font-size: 0.75rem;
    }

    img {
      width: 18px;
    }
  }

  @media(min-width: 768px) {
    height: 7rem;
    gap: 0.75rem;

    img {
      width: 52px;
    }

    p {
      font-size: 1.25rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 5.875rem;
      gap: 0.375rem;

      p {
        font-size: 1rem;
      }

      img {
        width: 42px;
      }
    }
  }

  @media(min-width: 1280px) {
    height: 9.375rem;
    border-radius: 1rem;
    border-width: 3px;
    justify-content: center;
    gap: 0.75rem;

    img {
      width: 52px;
    }

    p {
      font-size: 1.25rem;
    }
  }
`;