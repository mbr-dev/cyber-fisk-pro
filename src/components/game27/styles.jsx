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
  flex-wrap: wrap;
  padding-inline: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 14px;

  @media(max-width: 320px) {
    gap: 0.5rem;
    margin-top: 1rem;
  }

  @media(min-width: 600px) {
    height: 450px;
    align-items: center;
  }

  @media(min-width: 1024px) {
    width: 850px;
    height: 400px;
    margin-top: 16px;
  }

  @media(min-width: 1440px) {
    margin-top: 32px;
  }
`;

export const Photo = styled.button`
  all: unset;
  width: 150px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 3px solid transparent;
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
    width: 96px;
    height: 64px;
  }

  @media(min-width: 600px) {
    width: 280px;
    height: 200px;
  }

  @media(min-width: 1024px) {
    height: 180px;
  }
`;