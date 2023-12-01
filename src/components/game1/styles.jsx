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
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  @media(min-width: 768px) {
    margin-top: 2rem;
    gap: 2rem;
  }
  
  @media(orientation: landscape) {
    gap: 1rem;
    margin-top: 1rem;

    @media(min-width: 600px) {
      flex-direction: row;
      justify-content: center;
    }
  }
  
  @media(min-width: 1280px) {
    margin-top: 2rem;
    gap: 2rem;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 6rem;
  height: 7rem;
  display: flex;
  align-items: center;
  padding-inline: 1rem;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;

  img {
    width: 100%;
    height: 80%;
    object-fit: contain;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }  

  @media(max-width: 320px) {
    width: 4rem;
    height: 4.5rem;
    padding-inline: 0.5rem;
  }

  @media(min-width: 768px) {
    width: 7.5rem;
    height: 9.375rem;
    padding-inline: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 4.5rem;
      height: 6rem;
      padding-inline: 0.5rem;
    }
  }

  @media(min-width: 1280px) {
    width: 7.5rem;
    height: 9.375rem;
    padding-inline: 1rem;
  }
`;