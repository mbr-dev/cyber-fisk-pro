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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  gap: 1rem;

  @media(max-width: 320px) {
    padding-top: 10px;
    justify-content: space-around;
    gap: 0px;
  }

  @media(min-width: 768px) {
    padding-top: 1rem;
    gap: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
      align-items: flex-start;
      padding-top: 0.5rem;
      gap: 0;
    }
  }

  @media(min-width: 1280px) {
    justify-content: center;
    padding-top: 1rem;
  }

  @media(min-width: 1920px) {
    padding-top: 6.25rem;
  }
`;

export const Left = styled.div`
  width: 100%;
  display: flex;

  @media(min-width: 768px) {
    width: 31.25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 18.75rem;
      height: 12.5rem;
      justify-content: flex-start;
    }
  }
  
  @media(min-width: 1280px) {
    width: 31.25rem;
    height: 31.25rem;
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.375rem;
  }

  @media(min-width: 768px) {
    gap: 3rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 3.125rem;
    }
  }

  @media(min-width: 1280px) {
    gap: 7.5rem;
  }
`;

export const Button = styled.div`
  width: 12.375rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: normal;
  background-color: ${props => props.theme["gray-700"]};
  color: ${props => props.theme.white};
  
  @media(max-width: 320px) {
    width: 7.5rem;
    height: 1.75rem;
    font-size: 0.875rem;
  }

  @media(min-width: 768px) {
    width: 18.75;
    height: 3.25rem;
    font-size: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 9.375rem;
      height: 2rem;
      font-size: 1rem;
    }
  }

  @media(min-width: 1280px) {
    width: 18.75;
    height: 3.25rem;
    font-size: 2rem;
  }
`;

export const Money = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 54px;
  }

  span {
    width: 2.625rem;
    height: 2.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    border-radius: 6px;
    background-color: ${props => props.theme["gray-200"]};
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    img {
      width: 32px;
    }

    span {
      width: 1.75rem;
      height: 1.75rem;
      font-size: 0.875rem;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    width: 100%;

    img {
      width: 72px;
    }

    span {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 1.5rem;
    }

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 90%;

      img {
        width: 42px;
      }

      span {
        width: 2.375rem;
        height: 2.375rem;
        font-size: 1.125rem;
      }

      p {
        font-size: 1.375rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 100%;

    img {
      width: 96px;
    }

    span {
      width: 4rem;
      height: 4rem;
      font-size: 1.75rem;
    }

    p {
      font-size: 2.625rem;
    }
  }
`;

export const Right = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(min-width: 768px) {
    gap: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 18.75rem;
      height: 12.5rem;
      gap: 0.25rem;
      border-left: 1px solid ${props => props.theme["gray-200"]};
    }
  }

  @media(min-width: 1280px) {
    width: 43.75rem;
    height: 31.25rem;
    border-left-width: 3px;
    gap: 0;
    justify-content: space-between;
  }
`;

export const DivMobile = styled.div`
  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: none;
    }
  }
`;

export const DivDesk = styled.div`
  display: none;

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: block;
    }
  }
`;

export const Separator = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme["gray-200"]};
  padding: 0.625rem;

  @media(max-width: 320px) {
    padding: 0.5rem;
  }

  @media(min-width: 768px) {
    padding: 1rem 2.5rem;
  }
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 100%;
      padding: 0.375rem;
    }
  }

  @media(min-width: 1280px) {
    padding: 1rem;
  }
`;

export const Card = styled.div`
  width: 2.625rem;
  height: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 2px solid transparent;
  background-color: ${props => props.theme.white};
  cursor: pointer;
  transition: all ease 0.3s;

  img {
    width: 28px;
  }

  &:hover {
    border-color: ${props => props.theme["gray-700"]};
    background-color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    width: 2.375rem;
    height: 2.375rem;

    img {
      width: 24px;
    }
  }

  @media(min-width: 768px) {
    width: 4.5rem;
    height: 4rem;

    img {
      width: 40px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 2rem;
      height: 2rem;

      img {
        width: 18px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 4.5rem;
    height: 4.5rem;

    img {
      width: 44px;
    }
  }
`;

export const Title = styled.div`
  width: 90%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 2px solid ${props => props.theme["blue-600"]};
  background-color: ${props => props.theme["blue-900"]};
  color: ${props => props.theme.white};

  @media (max-width: 320px) {
    height: 1.75rem;

    p {
      font-size: 1rem
    }
  }

  @media (min-width: 768px) {
    height: 3.5rem;

    p {
      font-size: 1.5rem;
    }
  }

  
  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 2rem;
      border-radius: 3px;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 1280px) {
    height: 4rem;
    border-radius: 6px;

    p {
      font-size: 2rem;
    }
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 10rem;
  padding: 0.5rem 0.325rem;

  @media(max-width: 320px) {
    height: 7.5rem;
  }

  @media(min-width: 768px) {
    height: 15.625rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 6.25rem;
    }
}

  @media(min-width: 1280px) {
    height: 13.75rem;
    padding: 0.875rem;
  }
`;

export const CardReward = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["gray-200"]};

  .RoboCard {
    width: 100%;
    height: 100%;
  }

  @media(max-width: 320px) {
    border-radius: 6px;
  }
`;

export const Footer = styled.div`
  width: 18.75rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 15.625rem;
    height: 3.25rem;
  }

  @media(min-width: 768px) {
    width: 37.5rem;
    height: 5.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 37.5rem;
      height: 3.25rem;
    }
  }

  @media(min-width: 1280px) {
    width: 75rem;
    height: 6.25rem;
    border-width: 4px;
  }
`;

export const BottomFooter = styled.button`
  all: unset;
  width: 8.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$green === "green" ? props.theme["green-600"] : props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.$green === "green" ? props.theme["green-700"] : props.theme["red-300"]};
  border-bottom-width: 3px;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 1.125rem;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 12.5rem;
    height: 2rem;

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    width: 17rem;
    height: 3rem;

    p {
      font-size: 1.75rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 480px) {
      width: 12.5rem;
      height: 2rem;
      border-radius: 6px;

      p {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 25rem;
    height: 3.5rem;

    p {
      font-size: 2rem;
    }
  }
`;