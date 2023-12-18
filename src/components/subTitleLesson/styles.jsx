import styled from "styled-components";

export const SubtitleLessonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme["gray-300"]};
  padding: 1rem;
  text-align: center;

  span {
    font-size: 1rem;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    padding: 0.5rem;

    span {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    padding: 1rem;

    span {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding: 0.5rem;

      span {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1024px) {
    padding: 1rem;

    span {
      font-size: 1.5rem;
    }
  }
`