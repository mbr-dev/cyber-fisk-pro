import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-block: 16px;
`;

export const Top = styled.div`
  width: 100vw;
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
`;

export const Separator = styled.div`
  width: 100%;
  height: 86px;
  padding: 12px;
  background-color: ${props => props.theme["gray-200"]};

  div {
    width: 100%;
    height: 100%;
  }
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

export const Bottom = styled.div`
  width: 100%;
  height: 154px;
  padding: 12px 16px;

  div {
    width: 100%;
    height: 100%;
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
`;
