import styled from "styled-components";

export const SubtitleLessonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme["gray-300"]};
  padding: 16px;
  text-align: center;

  span {
    font-size: 18px;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    padding: 10px;

    span {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    padding: 16px;

    span {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding: 6px;

      span {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    padding: 16px;

    span {
      font-size: 24px;
    }
  }

  @media(min-width: 1366px) {
    padding: 16px;

    span {
      font-size: 28px;
    }
  }
`;