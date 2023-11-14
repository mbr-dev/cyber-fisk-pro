import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Top = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .bgImg {
    width: 100%;
    height: 100%;
    object-fit: fill;
    position: absolute;
    z-index: -100;
  }

  .avatarImg {
    z-index: 3;
    width: 80px;
    margin-top: 24px;
  }

  @media (max-width: 320px) {
    height: 150px;

    .avatarImg {
      width: 50px;
    }
  }

  @media (min-width: 768px) {
    height: 350px;

    .avatarImg {
      width: 110px;
      margin-top: 44px;
    }
  }

  @media (min-width: 1024px) {
    height: 100%;
    width: 40%;

    .avatarImg {
      margin-top: 100px;
      width: 200px;
    }
  }

  @media (min-width: 1440px) {
    .avatarImg {
      margin-top: 170px;
      width: 220px;
    }
  }

  @media (min-width: 1920px) {
    .avatarImg {
      margin-top: 220px;
      width: 230px;
    }
  }
`;

export const DivBottom = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 380px;
  }

  @media (min-width: 1024px) {
    width: 60%;
    height: 100%;
    align-items: center;
  }

  @media (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 20px;
  gap: 8px;
  background-color: ${props => props.theme["gray-200"]};

  @media (max-width: 320px) {
    height: 170px;
  }

  @media (min-width: 768px) {
    height: 100%;
    padding-inline: 54px;
    gap: 16px;
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 90%;
    justify-content: space-between;
    padding-block: 24px;
  }

  
  @media(min-width: 1440px) {
    height: 90%;
  }
`;

export const Separator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  
  @media(min-width: 768px) {
    padding-top: 16px;
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

  @media(min-width: 768px) {
    width: 64px;
    height: 64px;

    img {
      width: 36px;
    }
  }

  @media(min-width: 1024px) {
    width: 84px;
    height: 84px;

    img {
      width: 52px;
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 2px solid ${props => props.theme["blue-600"]};
  background-color: ${props => props.theme["blue-900"]};
  color: white;

  @media (min-width: 768px) {
    height: 54px;

    p {
      font-size: 32px;
    }
  }
`;

export const AvatarCard = styled.div`
  width: 100%;
  height: 180px;
  padding-block: 6px;
  display: flex;
  justify-content: space-between;

  @media(min-width: 600px) {
    height: 220px;
    padding-block: 0;
    padding-bottom: 16px;
  }

  @media(min-width: 1024px) {
    height: 300px;
  }

  @media(min-width: 1440px) {
    height: 360px;
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

  @media(min-width: 768px) {
    width: 180px;
    border-radius: 12px;

    .RoboCard {
      width: 80px;
    }
  }

  @media(min-width: 1024px) {
    width: 200px;

    .RoboCard {
      width: 100px;
    }
  }

  @media(min-width: 1440px) {
    width: 220px;

    .RoboCard {
      width: 110px;
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
  
  @media(min-width: 768px) {
    border-radius: 12px;
    gap: 42px;

    .cadeadoImg {
      width: 44px;
    }
  }

  @media(min-width: 1024px) {
    gap: 92px;
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

  @media(min-width: 768px) {
    margin-top: -30px;
    width: 110px;
    height: 44px;

    p {
      font-size: 20px;
    }

    img {
      width: 24px;
    }
  }

  @media(min-width: 1024px) {
    margin-top: -72px;
  }

  @media (min-width: 1440px) {
    margin-top: -120px;
  }
`;