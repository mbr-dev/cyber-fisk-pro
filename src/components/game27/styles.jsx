import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
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
  margin-top: 1rem;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  @media(min-width: 768px) {
    height: 25rem;
    margin-top: 1rem;
    gap: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
  }

  @media(min-width: 1024px) {
    width: 53.125rem;
    height: 25rem;
    margin-top: 1rem;
    gap: 1rem;
  }
`;

export const Photo = styled.button`
  all: unset;
  width: 9.375rem;
  height: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 2px solid transparent;
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
  }

  @media(max-width: 320px) {
    width: 6rem;
    height: 4rem;
  }

  @media(min-width: 768px) {
    width: 15.625rem;
    height: 11.25rem;
    border-width: 3px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 6rem;
      height: 4rem;
      border-width: 2px;
    }
  }

  @media(min-width: 1024px) {
    width: 15.625rem;
    height: 11.25rem;
    border-width: 3px;
  }
`;