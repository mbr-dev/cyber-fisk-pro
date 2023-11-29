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

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

export const DivMobile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(min-width: 480px) {
    display: none;
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

  .avatarImg {
    z-index: 100;
    width: 80px;
    margin-top: 24px;
  }

  @media (max-width: 320px) {
    .avatarImg {
      width: 50px;
    }
  }

  @media (min-width: 480px) {
    height: 100%;
    width: 40%;

    .avatarImg {
      width: 110px;
      margin-top: 44px;
    }
  }

  @media (min-width: 1280px) {

    .avatarImg {
      margin-top: 100px;
      width: 200px;
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

  @media (min-width: 480px) {
    width: 100%;
    height: 100%;
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
  padding-top: 10px;
  background-color: ${props => props.theme["gray-060"]};
  gap: 10px;

  .spDesk {
      display: none;
    }
  
  @media (max-width: 320px) {
    gap: 6px;
  }
  
  @media (min-width: 480px) {
    height: 100px;
    gap: 16px;

    .spDesk {
      display: flex;
      width: 100%;
    }
  }

  @media (min-width: 1280px) {
    height: 100%;
    padding-top: 24px;
    gap: 24px;
  }

  @media (min-width: 1920px) {
    padding-top: 56px;
    gap: 56px;
  }
`;

export const Separator = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 360px) {
    width: 320px;
  }

  @media(max-width: 320px) {
    width: 280px;
  }

  @media(min-width: 480px) {
    justify-content: space-around;
    background-color: ${props => props.theme["gray-950"]};
    padding-block: 6px;
  }
`;

export const Card = styled.div`
  width: 42px;
  height: 42px;
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
    width: 32px;
    height: 32px;

    img {
      width: 18px;
    }
  }

  @media(min-width: 480px) {
    width: 52px;
    height: 52px;

    img {
      width: 32px;
    }
  }

  @media(min-width: 1280px) {
    width: 84px;
    height: 84px;

    img {
      width: 52px;
    }
  }

  @media(min-width: 1920px) {
    width: 100px;
    height: 100px;

    img {
      width: 64px;
    }
  }
`;

export const Title = styled.div`
  width: 350px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 2px solid ${props => props.theme["blue-600"]};
  background-color: ${props => props.theme["blue-900"]};
  color: white;

  @media (max-width: 360px) {
    width: 320px;
    height: 28px;

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 320px) {
    width: 280px;
    height: 28px;

    p {
      font-size: 14px;
    }
  }

  @media (min-width: 480px) {
    height: 28px;
    border-radius: 4px;

    p {
      font-size: 16px;
    }
  }
`;

export const AvatarCard = styled.div`
  width: 350px;
  height: 180px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 360px) {
    width: 320px;
    height: 150px;
  }

  @media (max-width: 320px) {
    width: 280px;
    height: 150px;
  }

  @media(min-width: 480px) {
    height: 126px;
  }

  @media(min-width: 1280px) {
    width: 700px;
    height: 380px;
  }

  @media (min-width: 1920px) {
    width: 900px;
    height: 450px;
  }
`;

export const CardReward = styled.div`
  width: 110px;
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
    width: 86px;

    .RoboCard {
      width: 40px;
    }
  }

  @media(min-width: 480px) {
    width: 110px;
    border-radius: 12px;

    .RoboCard {
      width: 42px;
    }
  }

  @media(min-width: 1280px) {
    width: 200px;

    .RoboCard {
      width: 150px;
    }
  }

  @media(min-width: 1920px) {
    width: 250px;

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
  gap: 32px;
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
  
  @media(min-width: 480px) {
    border-radius: 12px;
    gap: 20px;

    .cadeadoImg {
      width: 24px;
    }
  }

  @media(min-width: 1280px) {
    gap: 92px;

    .cadeadoImg {
      width: 54px;
    }
  }
`;

export const DivMoney = styled.div`
  width: 84px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
  border-radius: 6px;
  gap: 6px;
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom-width: 3px;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};

  p {
    font-size: 14px;
  }

  img {
    width: 20px;
  }

  @media(max-width: 320px) {
    width: 64px;
    height: 24px;
    margin-top: -10px;

    p {
      font-size: 10px;
    }

    img {
      width: 14px;
    }
  }

  @media(min-width: 480px) {
    margin-top: -30px;
    width: 84px;
    height: 20px;

    p {
      font-size: 12px;
    }

    img {
      width: 14px;
    }
  }

  @media(min-width: 1280px) {
    width: 120px;
    height: 36px;
    margin-top: -100px;

    p {
      font-size: 18px;
    }

    img {
      width: 24px;
    }
  }
`;

export const AreaFooter = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};
  background-color: ${props => props.theme.white};

  @media(max-width: 320px) {
    height: 52px;
  }

  @media(min-width: 480px) {
    height: 52px;
    border-top: 0px;
  }

  @media(min-width: 1280px) {
    height: 100px;
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
    height: 44px;

    p {
      font-size: 32px;
    }
  }
`;