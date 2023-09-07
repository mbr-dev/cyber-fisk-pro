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

 /*  @media only screen and (max-width: 600px){
    width: 20px;
    height: 22px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 600px){
    width: 55px;
    height: 35px;
  } */
`