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

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Top = styled.div`
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .bgImg {
    width: 100%;
    height: 100%;
    object-fit: fill;
    position: absolute;
    top: -12px;
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

  @media (min-width: 600px) {
    height: 150px;

    .avatarImg {
      width: 50px;
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
`;

export const Bottom = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 20px;
  gap: 6px;
  margin-top: -12px;
  background-color: ${props => props.theme["gray-200"]};

  @media (max-width: 320px) {
    height: 170px;
  }

  @media (min-width: 1024px) {
    width: 60%;
    height: 100%;
    justify-content: space-between;
    z-index: -10;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 64px;
  padding-block: 6px;

  div {
    width: 100%;
    height: 100%;
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
`;

export const Card = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${props => props.theme.white};

  img {
    width: 60%;
  }
`;

export const AvatarCard = styled.div`
  width: 100%;
  height: 170px;
  padding-block: 6px;
  
  div {
    width: 100%;
    height: 100%;
  }

  @media(min-width: 600px) {
    height: 236px;
  }
`;

export const CardReward = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  box-shadow: 0px 4px 10px 0px #00000033;

  .RoboCard {
    width: 60px;
  }
`;