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
  padding-top: 16px;
  gap: 12px;

  @media(max-width: 320px) {
    padding-top: 10px;
    justify-content: space-around;
    gap: 0px;
  }

  @media(min-width: 480px) {
    flex-direction: row;
    align-items: flex-start;
    padding-top: 8px;
  }

  @media(min-width: 1280px) {
    justify-content: center;
    padding-top: 16px;
  }

  @media(min-width: 1920px) {
    padding-top: 100px;
  }
`;

export const Left = styled.div`
  width: 100%;
  display: flex;

  @media(min-width: 480px) {
    width: 300px;
    height: 200px;
    justify-content: flex-start;
  }
  
  @media(min-width: 1280px) {
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

  @media(min-width: 480px) {
    gap: 50px;
  }

  @media(min-width: 1280px) {
    gap: 120px;
  }
`;

export const Button = styled.div`
  width: 198px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: normal;
  background-color: ${props => props.theme["gray-700"]};
  color: ${props => props.theme.white};
  
  @media(max-width: 320px) {
    width: 120px;
    height: 28px;
    font-size: 14px;
  }

  @media(min-width: 480px) {
    width: 150px;
    height: 32px;
    font-size: 16px;
  }

  @media(min-width: 1280px) {
    width: 300px;
    height: 52px;
    font-size: 32px;
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

  @media(min-width: 480px) {
    img {
      width: 42px;
    }

    span {
      width: 38px;
      height: 38px;
      font-size: 18px;
    }

    p {
      font-size: 22px;
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
  gap: 8px;

  @media(min-width: 480px) {
    width: 300px;
    height: 200px;
    gap: 4px;
    border-left: 1px solid ${props => props.theme["gray-200"]};
  }

  @media(min-width: 1024px) {
    width: 700px;
    height: 500px;
    border-left-width: 3px;
    gap: 0;
    justify-content: space-between;
  }
`;

export const DivMobile = styled.div`

  @media (min-width: 480px) {
    display: none;
  }
`;

export const DivDesk = styled.div`
  display: none;

  @media (min-width: 480px) {
    display: block;
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
  
  @media(min-width: 480px) {
    width: 100%;
    padding: 6px;
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

  @media(min-width: 480px) {
    width: 32px;
    height: 32px;

    img {
      width: 18px;
    }
  }

  @media(min-width: 1280px) {
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

  @media (min-width: 480px) {
    height: 32px;
    border-radius: 3px;

    p {
      font-size: 14px;
    }
  }

  @media (min-width: 1280px) {
    width: 90%;
    height: 64px;
    border-radius: 6px;

    p {
      font-size: 32px;
    }
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
      padding-block: 10px;
      padding-left: 10px;
    }
  }

  @media(max-width: 320px) {
    height: 120px;

    div {
      padding-block: 6px;
      padding-left: 8px;
    }
  }

  @media(min-width: 480px) {
    height: 100px;
    padding: 8px 6px;

    div {
      padding-block: 6px;
      padding-left: 4px;
    }
  }

  @media(min-width: 1280px) {
    height: 220px;
    padding: 14px;

    div {
      padding-block: 12px;
      padding-left: 8px;
    }
  }
`;

export const CardReward = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;

  .RoboCard {
    width: 90px;
    height: 90px;
    margin-right: 10px;
  }

  @media(max-width: 320px) {
    border-radius: 6px;

    .RoboCard {
      width: 64px;
      height: 64px;
      margin-right: 10px;
    }
  }

  @media(min-width: 480px) {

    .RoboCard {
      width: 64px;
      height: 64px;
      margin-right: 4px;
    }
  }

  @media(min-width: 1280px) {

    .RoboCard {
      width: 150px;
      height: 150px;
      margin-right: 0px;
    }
  }
`;

export const Footer = styled.div`
  width: 320px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${props => props.theme["gray-200"]};
  gap: 24px;

  @media(max-width: 320px) {
    width: 280px;
    height: 56px;
    gap: 10px;
  }

  @media(min-width: 480px) {
    width: 600px;
    height: 52px;
  }

  @media(min-width: 1280px) {
    width: 1000px;
    height: 100px;
    border-top-width: 3px;
  }
`;

export const BottomFooter = styled.button`
  all: unset;
  width: 160px;
  height: 36px;
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
    font-size: 18px;
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
    width: 200px;
    height: 32px;
    border-radius: 6px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 1280px) {
    width: 400px;
    height: 56px;

    p {
      font-size: 32px;
    }
  }
`;