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

  @media(max-width: 320px) {
    gap: 0.5rem;
  }
`;

export const Image = styled.div`
  width: 200px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  @media(max-width: 320px) {
    width: 150px;
    height: 90px;
  }

  @media(min-width: 1280px) {
    width: 250px;
    height: 180px;
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 10px;
  }

  @media(min-width: 480px) {
    gap: 18px;
  }

  @media(min-width: 1280px) {
    margin-top: 8px;
    gap: 20px;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 280px;
  height: 48px;
  padding-inline: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  border: 2px solid transparent;
  border-bottom-width: 3px;
  text-align: center;
  cursor: pointer;
  transition: all ease 0.3s;

  p {
    color: ${props => props.theme["gray-700"]};
    font-size: 14px;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 320px) {
    width: 150px;
    height: 36px;

    p {
      font-size: 12px;
    }
  }

  @media (min-width: 1280px) {
    height: 56px;

    p {
      font-size: 18px;
    }
  }
`;