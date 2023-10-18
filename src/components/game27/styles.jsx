import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1.5rem;

  @media(max-width: 320px) {
    gap: 1rem;
    margin-top: 1rem;
  }  
`;

export const Photo = styled.button`
  all: unset;
  width: 16rem;
  height: 10rem;
  overflow: hidden;
  border: 4px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media(max-width: 320px) {
    width: 13rem;
    height: 8rem;
  }  
`;