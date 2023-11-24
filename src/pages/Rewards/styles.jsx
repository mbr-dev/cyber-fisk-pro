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
  justify-content: center;
  padding-block: 16px;
  gap: 12px;

  @media(max-width: 320px) {
    justify-content: space-around;
    padding-block: 0px;
    gap: 0px;
  }

  @media(min-width: 600px) {
    padding-block: 0;
    padding-top: 20px;
    gap: 16px;
    justify-content: flex-start;
  }

  @media(min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
`;

export const Left = styled.div`
  width: 100%;
  display: flex;
  
  @media(min-width: 1024px) {
    width: 500px;
    height: 500px;
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 6px;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 198px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: normal;
  background-color: ${props => props.theme["gray-700"]};
  color: ${props => props.theme.white};
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.9;
  }
  
  @media(max-width: 320px) {
    width: 120px;
    height: 28px;
    font-size: 14px;
  }

  @media(min-width: 600px) {
    width: 250px;
    height: 54px;
    font-size: 28px;
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
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 6px;
    background-color: ${props => props.theme["gray-200"]};
  }

  p {
    font-size: 20px;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    img {
      width: 32px;
    }

    span {
      width: 28px;
      height: 28px;
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 600px) {
    img {
      width: 84px;
    }

    span {
      width: 64px;
      height: 64px;
      font-size: 28px;
    }

    p {
      font-size: 32px;
    }
  }

  @media(min-width: 1024px) {
    width: 100%;

    img {
      width: 96px;
    }

    span {
      width: 64px;
      height: 64px;
      font-size: 28px;
    }

    p {
      font-size: 42px;
    }
  }
`;

export const Right = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  gap: 8px;

  @media(min-width: 600px) {
    gap: 28px;
  }

  @media(min-width: 1024px) {
    width: 700px;
    height: 500px;
    padding-inline: 0;
    border-left: 3px solid ${props => props.theme["gray-200"]};
  }
`;

export const Separator = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme["gray-200"]};
  padding: 10px;

  @media(max-width: 320px) {
    padding: 8px;
  }
  
  @media(min-width: 768px) {
    padding: 16px 32px;
  }

  @media(min-width: 1024px) {
    width: 100%;
    padding: 16px;
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
  transition: all ease 0.3s;

  img {
    width: 28px;
  }

  &:hover {
    border-color: ${props => props.theme["gray-700"]};
    background-color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    width: 38px;
    height: 38px;

    img {
      width: 24px;
    }
  }

  @media(min-width: 768px) {
    width: 64px;
    height: 64px;

    img {
      width: 36px;
    }
  }

  @media(min-width: 1024px) {
    width: 72px;
    height: 72px;

    img {
      width: 44px;
    }
  }
`;

export const Title = styled.div`
  width: 90%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 2px solid ${props => props.theme["blue-600"]};
  background-color: ${props => props.theme["blue-900"]};
  color: white;

  @media (max-width: 320px) {
    height: 28px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    height: 54px;

    p {
      font-size: 32px;
    }
  }

  @media (min-width: 1024px) {
    width: 90%;
    height: 72px;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 182px;
  padding: 12px 10px;
  
  div {
    width: 100%;
    height: 100%;
    padding-block: 12px;
    padding-left: 12px;
  }

  @media(max-width: 360px) {
    height: 160px;

    div {
      width: 100%;
      height: 100%;
      padding-block: 0;
      padding-left: 0;
    }
  }

  @media(max-width: 320px) {
    height: 110px;

    div {
      width: 100%;
      height: 100%;
      padding-block: 0;
      padding-left: 0;
    }
  }

  @media(min-width: 600px) {
    height: 236px;
  }

  @media(min-width: 1024px) {
    height: 290px;
  }
`;

export const CardReward = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["gray-200"]};

  .RoboCard {
    width: 70%;
  }

  @media(max-width: 320px) {
    border-radius: 6px;
  }
`;

export const Footer = styled.div`
  width: 100vw;
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 18px;

  div {
    display: flex;
    gap: 16px;
  }

  @media(max-width: 320px) {
    height: 56px;
    padding-bottom: 0;
    margin-bottom: 0;

    div {
      gap: 10px;
    }
  }

  @media(min-width: 600px) {
    padding-bottom: 0;
    margin-bottom: 32px;
  }
`;