import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: 320px)  {
    gap: 10px;
  }

  @media (min-width: 1280px)  {
    flex-direction: row;
  }
`;

export const Photos = styled.div`
  width: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 8px;
  }

  @media (min-width: 1280px)  {
    width: 450px;
    height: 300px;
  }
`;

export const Photo = styled.div`
  width: 10rem;
  height: 6rem;
  background-color: gray;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media(max-width: 320px) {
    width: 120px;
    height: 60px;
    border-radius: 6px;
  }

  @media(min-width: 1280px) {
    width: 200px;
    height: 130px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1280px) {
    width: 530px;
    height: 300px;
    justify-content: space-between;
  }
`;

export const Types = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;

  @media(min-width: 1280px) {
    gap: 6px;
  }
`;

export const Type = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 2px solid ${props => props.theme.black};

  @media(max-width: 360px) {
    width: 30px;
    height: 36px;
  }

  @media(max-width: 320px) {
    width: 28px;
    height: 32px;
  }

  @media(min-width: 1280px) {
    width: 42px;
    height: 56px;
  }
`;

export const Keyboard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  flex-wrap: wrap;
  gap: 0.75rem;
  background-color: ${props => props.theme["gray-300"]};

  @media(max-width: 360px) {
    padding: 14px;
    gap: 8px
  }

  @media(min-width: 1280px) {
    gap: 14px;
    padding: 12px 42px;
  }
`;

export const Keys = styled.button`
  all: unset;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    scale: 1.05;
    border-color: ${props => props.theme["gray-600"]}
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media(max-width: 320px) {
    width: 28px;
    height: 28px;
    border-radius: 6px;
  }

  @media(min-width: 600px) {
    width: 42px;
    height: 42px;
    font-size: 24px;
  }

  @media(min-width: 1280px) {
    width: 48px;
    height: 48px;
  }
`;