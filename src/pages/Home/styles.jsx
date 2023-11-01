import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.white};
  padding-block: 16px;
`;

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  align-items: center;
  justify-content: space-around;
  gap: 12px;

  @media(min-width: 768px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(3, auto);
    gap: 3rem;
  }

  @media(max-width: 376px) {
    gap: 10px;
  }

  @media(max-width: 320px) {
    gap: 6px;
  }
`;

export const Card = styled.a`
  width: 100px;
  height: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 2px solid transparent;
  background-color: ${props => props.theme.white};
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 18px;
  cursor: pointer;
  transition: all ease 0.3s;
  
  img {
    height: 42px;
  }

  p {
    font-weight: 500;
    text-align: center;
    font-size: 14px;
    color: ${props => props.theme.black};
  }
  
  &:hover {
    border-color: ${props => props.theme["gray-700"]};
    background-color: ${props => props.theme["red-200"]};
    
    p {
    color: ${props => props.theme.white};
  }
  }

  @media(max-width: 360px) {
    width: 100px;
    height: 96px;
  }
  
  @media(max-width: 320px) {
    width: 64px;
    height: 56px;
    border-radius: 8px;
    gap: 2px;
    
    p {
      font-size: 10px
    }
    
    img {
      height: 24px;
    }
  }
`;

export const ButtonDayCh = styled.button`
  all: unset;
  width: 80%;
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  background-color: ${props => props.theme.white};
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  cursor: pointer;
  transition: all ease 0.3s;

  img {
    width: 242px;
  }

  &:hover {
    border-color: ${props => props.theme["gray-700"]};
    background-color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    width: 70%;
    height: 52px;
    
    img {
      width: 190px;
    }
  }
`;