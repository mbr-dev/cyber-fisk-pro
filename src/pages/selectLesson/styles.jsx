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
  /* width: 18.75rem; */
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SelectLessonArea = styled.div`
  width: 13.75rem;
  display: grid;
  grid-template-columns: repeat(2, 5rem);
  justify-content: space-between;
  gap: 1rem;

  @media(max-width: 320px) {
    justify-content: space-around;
  }
`;

export const ButtonLesson = styled.button`
  all: unset;
  width: 5rem;
  height: 5.25rem;
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
    font-size: 2rem;
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

  @media(max-width: 320px) {
    width: 4rem;
    height: 4.25rem;

    p {
      font-size: 1.5rem;
    }

    span {
      font-size: 0.875rem;
    }
  }
`;