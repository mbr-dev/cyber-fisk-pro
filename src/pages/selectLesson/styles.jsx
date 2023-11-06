import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SelectLessonArea = styled.div`
  width: 200px;
  display: grid;
  grid-template-columns: repeat(2, 5rem);
  justify-content: space-between;
  gap: 16px;

  @media(max-width: 360px) {
    gap: 12px;
  }

  @media(max-width: 320px) {
    width: 140px;
    gap: 8px;
  }

  @media(min-width: 600px) {
    grid-template-rows: (2, 5rem);
    grid-template-columns: repeat(5, 5rem);
    align-items: center;
    justify-content: center;
    padding-block: 16px;
  }
  
  @media(min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    gap: 36px;
    width: 800px;
  }
`;

export const ButtonLesson = styled.button`
  all: unset;
  width: 72px;
  height: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: 0.3s;

  p {
    font-weight: bold;
    font-size: 32px;
  }

  span {
    font-weight: 500;
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border: 2px solid ${props => props.theme.black};
  }

  &:disabled{
    background-color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 360px) {
    width: 68px;
    height: 72px;

    p {
      font-size: 28px
    }
  }

  @media(max-width: 320px) {
    width: 48px;
    height: 52px;

    p {
      font-size: 18px;
    }

    span {
      font-size: 12px
    }
  }

  @media(min-width: 1024px) {
    width: 124px;
    height: 120px;

    p {
      font-size: 48px;
    }

    span {
      font-size: 20px;
    }
  }
`;