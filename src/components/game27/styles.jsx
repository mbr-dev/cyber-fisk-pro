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
  justify-content: center;
  margin-top: 16px;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 8px;
    margin-top: 8px;
  }

  @media(min-width: 768px) {
    margin-top: 24px;
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 8px;
      margin-top: 8px;
    }
  }

  @media(min-width: 1024px) {
    margin-top: 16px;
    gap: 16px;
  }
`;

export const Photo = styled.button`
  all: unset;
  width: 164px;
  height: 100px;
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
    width: 148px;
    height: 94px;
  }

  @media(max-width: 320px) {
    width: 146px;
    height: 80px;
  }

  @media(min-width: 768px) {
    width: 300px;
    height: 180px;
    border-width: 3px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 150px;
      height: 92px;
      border-width: 2px;
    }
  }

  @media(min-width: 1024px) {
    width: 250px;
    height: 120px;
    border-width: 3px;
  }

  @media(min-width: 1366px) {
    width: 280px;
    height: 150px;
  }
`;