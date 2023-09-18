import styled from "styled-components";

export const SubtitleSuperLessonContainer = styled.div`
  width: 100vw;
`;

export const SubtitleSuperLessonContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props=> props.theme["gray-200"]};
  padding-block: 0.625rem;
`

export const BoxLetters = styled.div`
  width: 1.625rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.black};
  border-radius: 5px;

  p {
    font-size: 1rem;
  }
`;