import styled from "styled-components";

export const TitleLessonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.625rem 1rem;
  text-align: center;
  margin-block: 0.5rem;
  text-align: center;

  span {
    font-size: 1.375rem;
  }

  @media(max-width: 360px) {
    margin-block: 0;

    span {
      font-size: 1.25rem;
    }
  }

  @media(max-width: 320px) {
    span {
      font-size: 1.125rem;
    }
  }

  @media(min-width: 600px) {
    span {
      font-size: 2rem;
    }
  }
`
