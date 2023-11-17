import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 24px;

  @media (max-width: 320px) {
    gap: 20px;
    padding-top: 20px;
  }

  @media (min-width: 768px) {
    gap: 36px;
    padding-top: 36px;
  }
`;

export const Div = styled.button`
  all: unset;
  width: 300px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 12px;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;

  p {
    font-size: 18px;
    font-weight: 700;
  }

  img {
    width: 18px;
  }

  @media (max-width: 320px) {
    width: 250px;
    height: 40px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    width: 600px;
    height: 64px;
    padding-inline: 16px;

    p {
      font-size: 24px;
    }

    img {
      width: 24px;
    }
  }
`;