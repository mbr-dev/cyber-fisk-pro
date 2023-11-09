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
  justify-content: space-around;
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

  @media(min-width: 600px) {
    width: 600px;
    gap: 16px;
  }

  @media(min-width: 1024px) {
   gap: 12px;
  }

  @media(min-width: 1440px) {
   gap: 28px;
  }

  @media(min-width: 1920px) {
   gap: 32px;
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
    width: 140px;
    height: 70px;
    border-radius: 6px;
  }

  @media(min-width: 600px) {
    width: 250px;
    height: 154px;
  }

  @media(min-width: 1024px) {
    width: 270px;
  }
`;

export const Types = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;

  @media(min-width: 600px) {
    gap: 12px;
  }

  @media(min-width: 1024px) {
    gap: 18px;
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
    width: 28px;
    height: 28px;
  }

  @media(max-width: 320px) {
    width: 24px;
    height: 24px;
  }

   @media(min-width: 600px) {
    width: 52px;
    height: 64px;
    font-size: 32px;
  }

  @media(min-width: 1024px) {
    width: 48px;
    height: 58px;
  }

  @media(min-width: 1440px) {
    width: 64px;
    height: 72px;
    font-size: 36px;
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

  @media(max-width: 320px) {
    gap: 8px;
  }

  @media(min-width: 600px) {
    padding: 18px;
  }

  @media(min-width: 1024px) {
    gap: 16px;
  }

  @media(min-width: 1920px) {
    gap: 20px;
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

  @media(min-width: 1024px) {
    width: 52px;
    height: 52px;
  }

  @media(min-width: 1440px) {
    width: 64px;
    height: 64px;
    font-size: 32px;
  }
`;