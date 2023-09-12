import styled from "styled-components";

export const SelectLessonContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SelectLessonHeader = styled.header`
  width: 100%;
  padding: 1rem 1.125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme["gray-200"]};
  border-end-end-radius: 24px;
  border-end-start-radius: 24px;

  p {
    font-size: 1.75rem;
    font-weight: 500;
  }
`;

export const SelectLessonMain = styled.main`
  flex: 1;
  width: 18.75rem;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectLessonArea = styled.div`
  width: 13.75rem;
  display: grid;
  grid-template-columns: repeat(2, 5rem);
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
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
`;