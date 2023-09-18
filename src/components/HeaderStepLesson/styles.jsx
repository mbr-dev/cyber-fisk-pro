import styled from "styled-components";

export const HeaderStepLessonContainer = styled.div``;
  
export const HeaderStepLessonContent = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${props => props.theme["gray-200"]};
  border: 1px solid ${props => props.theme.black};
  border-left: transparent;

  @media(max-width: 320px) {
    width: 1.125rem;
    height: 1.125rem;
  }

  @media(min-width: 600px) {
    width: 2rem;
    height: 2rem;
  }
`;