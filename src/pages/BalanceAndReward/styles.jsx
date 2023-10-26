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
  justify-content: space-around;
`;

export const MainTop = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Top = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  all: unset;
  width: 13rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${props => props.theme["gray-600"]};
  color: ${props => props.theme.white};
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Money = styled.div`
  width: 100%;
  padding-inline: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  img {
    width: 3rem;
  }

  span {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: ${props => props.theme["gray-200"]};
  }
`;

export const Separator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  overflow: hidden;
  padding: 0.5rem;
  background-color: ${props => props.theme["gray-200"]};
`;

export const CardBody = styled.div`
  width: 9rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 0.5rem;
  gap: 0.5rem;
  border-radius: 6px;
  border: 2px solid ${props => props.theme["gray-700"]};
  background-color: ${props => props.theme.white};

  img {
    width: 22px;
  }
`;

export const CardRed = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-inline: 0.25rem;
  border-right: 2px solid ${props => props.theme["gray-700"]};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["red-200"]};

  img {
    width: 20px;
  }

  p {
    font-weight: 500;
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
  width: 100vw;
  height: 9rem;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;

  div {
    img {
      width: 100%;
    }
  }
`;

export const BottomButton = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    gap: 1rem;
  }
`;
