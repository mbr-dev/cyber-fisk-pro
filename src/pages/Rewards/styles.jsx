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
  
  @media(min-width: 768px) {
    padding: 16px 32px;
  }

  @media(min-width: 1024px) {
    width: 100%;
    padding: 16px 20px;
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
    width: 72px;
    height: 72px;

    img {
      width: 44px;
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

  @media (min-width: 1024px) {
    width: 90%;
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
  box-shadow: 0px 4px 10px 0px #00000033;

  .RoboCard {
    width: 70%;
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

  @media(min-width: 600px) {
    gap: 32px;
    padding-bottom: 0;
    margin-bottom: 32px;
  }
`;
