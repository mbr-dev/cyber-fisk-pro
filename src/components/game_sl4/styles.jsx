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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  @media(max-width: 320px) {
   gap: 8px;
  }
`;

export const Photos = styled.div`
  width: 21.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media(max-width: 320px) {
   gap: 8px;
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
`;

export const Types = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
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
`;