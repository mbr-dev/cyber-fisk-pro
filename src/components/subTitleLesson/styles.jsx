import styled from "styled-components";

export const SubtitleLessonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme["gray-300"]};
  padding: 0.5rem;
  text-align: center;

  span {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    span {
      padding: 0.3125rem;
      font-size: 1.25rem;
    }
  }

  @media(min-width: 480px) {
    span {
      padding: 0px;
      font-size: 20px;
    }
  }

  @media(min-width: 1280px) {
    span {
      font-size: 32px;
    }
  }
`