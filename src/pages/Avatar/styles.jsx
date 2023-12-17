import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      overflow: hidden;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.white};
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
  height: 42%;
  display: flex;
  margin-top: -14px;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  position: relative;

  div {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media(max-width: 320px) {
    div {
      top: -8px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 100%;
      width: 40%;
      margin-top: 0px;

      div {
        top: -6px;
      }
    }

    @media(min-width: 1024px) {
      div {
        top: -24px;
      }
    }

    @media(min-width: 1366px) {
      div {
        top: -28px;
      }
    }

    @media(min-width: 1920px) {
      div {
        top: -32px;
      }
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
      width: 60%;
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
  padding-block: 0.625rem;
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
      padding-block: 0.625rem;
      gap: 0.5rem;
      justify-content: flex-start;

      .spDesk {
        display: flex;
        width: 100%;
      }
    }
  }

  @media (min-width: 1024px) {
    height: 100%;
    padding-top: 1.5rem;
    justify-content: center;
    padding-bottom: 1.5rem;
    gap: 1.5rem;
  }

  @media (min-width: 1920px) {
    padding-top: 3.5rem;
    gap: 3.5rem;
  }
`;

export const Separator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 0.5rem;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      justify-content: space-around;
      background-color: ${props => props.theme["gray-950"]};
      padding-block: 0.375rem;
      padding-inline: 0rem;
    }
  }

  @media(min-width: 1920px) {
    padding-block: 1rem;
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

  @media(min-width: 1024px) {
    width: 4rem;
    height: 4rem;

    img {
      width: 32px;
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

export const ItemsCard = styled.div`
  height: 11.25rem;
  display: flex;
  padding-inline: 1rem;
  justify-content: space-between;

  @media (max-width: 320px) {
    height: 6.25rem;
  }

  @media(min-width: 768px) {
    height: 15rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 8rem;
    }
  }

  @media(min-width: 1024px) {
    height: 20rem;
  }

  @media(min-width: 1366px) {
    height: 23.75rem;
  }
  
  @media (min-width: 1440px) {
    height: 25rem;

  }
`;

export const CardReward = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:  1rem;
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["gray-200"]};
  position: relative;
  cursor: pointer;

  .RoboCard {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  @media (max-width: 320px) {

    .RoboCard {
      width: 40px;
    }
  }

  @media(min-width: 768px) {
    .RoboCard {
      width: 150px;
      height: 150px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      border-radius: 12px;

      .RoboCard {
        width: 100px;
        height: 100px;
      }
    }
  }

  @media(min-width: 1024px) {
    .RoboCard {
      width: 200px;
      height: 200px;
    }
  }

  @media(min-width: 1366px) {
    .RoboCard {
      width: 250px;
      height: 250px;
    }
  }

  @media(min-width: 1920px) {
    .RoboCard {
      width: 250px;
      height: 250px;
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
  gap: 3rem;
  background-color: #ffffff82;
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
      width: 44px;
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

  @media(min-width: 1024px) {
    gap: 6rem;

    .cadeadoImg {
      width: 44px;
    }
  }

  @media(min-width: 1366px) {
    gap: 8rem;

    .cadeadoImg {
      width: 56px;
    }
  }
`;

export const DivMoney = styled.div`
  width: 5.25rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;
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
    width: 8rem;
    height: 3rem;
    margin-top: -2.5rem;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 28px;
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

  @media(min-width: 1024px) {
    width: 8rem;
    height: 3rem;
    margin-top: -5rem;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 28px;
    }
  }
`;