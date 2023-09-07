import styled from "styled-components";

export const HeaderLessonContainer = styled.div`
  width: 100vw;
`;

export const HeaderLessonContent = styled.div`
  width: 100%;
  padding-block: 0.875rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  background-color: ${props => props.theme["gray-200"]};
  border-end-end-radius: 24px;
  border-end-start-radius: 24px;

  @media(max-width: 360px) {
    gap: 0.25rem;
  }
`

export const BarStep = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  background-color: ${props => props.theme.white};
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const HeaderLessonIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  p {
    font-weight: 500;
  }

  img {
    width: 32px;
  }

  @media(max-width: 320px) {
    p {
      font-size: 0.75rem;
    }

    img {
      width: 28px;
    }
  }
`;