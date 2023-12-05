import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SelectLessonArea = styled.div`
  width: 14.375rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media(max-width: 320px) {
    width: 11.25rem;
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    width: 18rem;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }

  @media (orientation: landscape) {
    @media (min-width: 600px) {
      width: 25rem;
      height: 9.375rem;
      gap: 1rem;
    }
  }

  @media (min-width: 1024px) {
    width: 38.75rem;
    height: 9.375rem;
    gap: 1.75rem;
  }

  @media(min-width: 1280px) {
    width: 43.75rem;
    height: 15.625rem;
    gap: 2rem;
  }
`;

export const ButtonLesson = styled.button`
  all: unset;
  width: 4.5rem;
  height: 4.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all ease 0.3s;

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

  &:disabled{
    background-color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 320px) {
    width: 3.625rem;
    height: 3.375rem;

    p {
      font-size: 1.125rem;
    }

    span {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 768px) {
    width: 6.875rem;
    height: 6.875rem;

    p {
      font-size: 3rem;
    }

    span {
      font-size: 1.25rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 3.625rem;
      height: 3.625rem;

      p {
        font-size: 1.125rem;
      }

      span {
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 5.5rem;
    height: 5.5rem;

    p {
      font-size: 2rem;
    }

    span {
      font-size: 1rem;
    }
  }

  @media(min-width: 1280px) {
    width: 6.875rem;
    height: 6.875rem;

    p {
      font-size: 3rem;
    }

    span {
      font-size: 1.25rem;
    }
  }
`;

export const AreaFooter = styled.div`
  width: 18.75rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 15.625rem;
    height: 3.25rem;
  }

  @media(min-width: 768px) {
    width: 37.5rem;
    height: 5.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 782px) {
      width: 37.5rem;
      height: 3.25rem;
    }
  }

  @media(min-width: 1024px) {
    width: 43.75rem;
    height: 5rem;
  }

  @media(min-width: 1280px) {
    width: 75rem;
    height: 6.25rem;
    border-width: 4px;
  }
`;

export const ButtonHome = styled.button`
  all: unset;
  width: 15.625rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom-width: 3px;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 24px;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 12.5rem;
    height: 2rem;

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    width: 25rem;
    height: 2.75rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 782px) {
      width: 15.625rem;
      height: 2rem;
      border-radius: 6px;

      p {
        font-size: 1.125rem;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 20rem;
    height: 2.5rem;

    p {
      font-size: 1.5rem;
    }
  }

  @media(min-width: 1280px) {
    width: 25rem;
    height: 2.75rem;

    p {
      font-size: 2rem;
    }
  }
`;