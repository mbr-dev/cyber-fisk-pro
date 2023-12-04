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
  height: 100%;
  background-color: ${props => props.theme["gray-060"]};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      flex-direction: row;
    }
  }
`;

export const DivMobile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      display: none;
    }
  }
`;

export const Top = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .bgImg {
    width: 100%;
    height: 100%;
    object-fit: fill;
    position: absolute;
    z-index: 1;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 100%;
      width: 40%;
    }
  }
`;

export const DivBottom = styled.div`
  flex: 1;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Bottom = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 0.625rem;
  background-color: ${props => props.theme["gray-060"]};
  gap: 0.625rem;

  .spDesk {
      display: none;
    }
  
  @media (max-width: 320px) {
    gap: 0.375rem;
  }

  @media (min-width: 768px) {
    padding-top: 1rem;
    gap: 1rem;
  }
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 6.25rem;
      padding-top: 0.625rem;
      gap: 1rem;

      .spDesk {
        display: flex;
        width: 100%;
      }
    }
  }

  @media (min-width: 1280px) {
    height: 100%;
    padding-top: 1.5rem;
    gap: 1.5rem;
  }

  @media (min-width: 1920px) {
    padding-top: 3.5rem;
    gap: 3.5rem;
  }
`;

export const Separator = styled.div`
  width: 21.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 360px) {
    width: 20rem;
  }

  @media(max-width: 320px) {
    width: 17.5rem;
  }

  @media(min-width: 768px) {
    width: 44rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      justify-content: space-around;
      background-color: ${props => props.theme["gray-950"]};
      padding-block: 0.375rem;
    }
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

  img {
    width: 28px;
  }

  @media(max-width: 320px) {
    width: 2rem;
    height: 2rem;

    img {
      width: 18px;
    }
  }

  @media(min-width: 768px) {
    width: 5rem;
    height: 5rem;

    img {
      width: 48px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 3.25rem;
      height: 3.25rem;

      img {
        width: 32px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 5.25rem;
    height: 5.25rem;

    img {
      width: 52px;
    }
  }

  @media(min-width: 1920px) {
    width: 6.25rem;
    height: 6.25rem;

    img {
      width: 64px;
    }
  }
`;

export const Title = styled.div`
  width: 21.875rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 2px solid ${props => props.theme["blue-600"]};
  background-color: ${props => props.theme["blue-900"]};
  color: white;

  @media (max-width: 360px) {
    width: 20rem;
    height: 1.75rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 320px) {
    width: 17.5rem;
    height: 1.75rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 768px) {
    width: 25rem;
    height: 2.5rem;

    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 1.75rem;
      border-radius: 4px;

      p {
        font-size: 1rem;
      }
    }
  }
`;

export const AvatarCard = styled.div`
  width: 21.875rem;
  height: 11.25rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 360px) {
    width: 320px;
    height: 9.375rem;
  }

  @media (max-width: 320px) {
    width: 20rem;
    height: 9.375rem;
  }

  @media(min-width: 768px) {
    width: 40rem;
    height: 13.75rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 21.875rem;
      height: 7.875rem;
    }
  }

  @media(min-width: 1280px) {
    width: 43.75rem;
    height: 23.75rem;
  }

  @media (min-width: 1920px) {
    width: 56.25rem;
    height: 28.125rem;
  }
`;

export const CardReward = styled.div`
  width: 6.875rem;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  box-shadow: 0px 4px 10px 0px #00000033;
  position: relative;

  .RoboCard {
    width: 64px;
  }

  @media (max-width: 320px) {
    width: 5.375rem;

    .RoboCard {
      width: 40px;
    }
  }

  @media(min-width: 768px) {
    width: 10rem;

    .RoboCard {
      width: 84px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 6.875rem;
      border-radius: 12px;

      .RoboCard {
        width: 42px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 12.5rem;

    .RoboCard {
      width: 150px;
    }
  }

  @media(min-width: 1920px) {
    width: 15.625rem;

    .RoboCard {
      width: 180px;
    }
  }
`;

export const DivBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: #ffffffc1;
  position: absolute;
  border-radius: 8px;

  .cadeadoImg {
    width: 32px;
  }

  @media(max-width: 320px) {
    border-radius: 12px;
    gap: 20px;

    .cadeadoImg {
      width: 23px;
    }
  }

  @media(min-width: 768px) {
    gap: 4rem;

    .cadeadoImg {
      width: 32px;
    }
  }
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      border-radius: 12px;
      gap: 1.25rem;

      .cadeadoImg {
        width: 24px;
      }
    }
  }

  @media(min-width: 1280px) {
    gap: 5.75rem;

    .cadeadoImg {
      width: 54px;
    }
  }
`;

export const DivMoney = styled.div`
  width: 5.25rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -3.125rem;
  border-radius: 6px;
  gap: 0.375rem;
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom-width: 3px;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};

  p {
    font-size: 0.875rem;
  }

  img {
    width: 20px;
  }

  @media(max-width: 320px) {
    width: 4rem;
    height: 1.5rem;
    margin-top: -0.625rem;

    p {
      font-size: 0.625rem;
    }

    img {
      width: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 7.5rem;
    height: 2rem;

    p {
      font-size: 1.125rem;
    }

    img {
      width: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      margin-top: -1.875rem;
      width: 5.25rem;
      height: 1.25rem;

      p {
        font-size: 0.75rem;
      }

      img {
        width: 14px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 7.5rem;
    height: 2rem;
    margin-top: -6.25rem;

    p {
      font-size: 1.125rem;
    }

    img {
      width: 24px;
    }
  }
`;

export const AreaFooter = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};
  background-color: ${props => props.theme.white};

  @media(max-width: 320px) {
    height: 3.25rem;
  }

  @media(min-width: 768px) {
    height: 6.25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 480px) {
      height: 3.25rem;
      border-top: 0px;
    }
  }

  @media(min-width: 1280px) {
    height: 6.25rem;
    border-width: 4px;
  }
`;

export const ButtonHome = styled.button`
  all: unset;
  width: 15.625rem;
  height: 2.25rem;
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
    font-size: 1.5rem;
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
    width: 25rem;
    height: 2.75rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 15.625rem;
      height: 2rem;
      border-radius: 6px;

      p {
        font-size: 1.125rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 25rem;
    height: 2.75rem;

    p {
      font-size: 2rem;
    }
  }
`;