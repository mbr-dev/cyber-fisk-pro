import styled from "styled-components";

export const SubtitleLessonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme["gray-300"]};
  padding-block: 0.625rem;
  text-align: center;

  span {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    span {
      padding-inline: 0.3125rem;
      font-size: 1.25rem;
    }
  }

  /* @media only screen and (max-width: 600px){
    .title{
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 1024px){
    .title{
      font-size: 24px;
    }
  } */
`