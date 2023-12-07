import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.div`
  padding: 1rem;

   img {
    width: 64px;
  }
`;

export const Main = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding-block: 1rem;
  background-color: ${props => props.theme["gray-100"]};

  p {
    font-size: 1.125rem;
    font-weight: 500;
  }

  span {
    font-size: 1rem;
    font-weight: normal;
  }
`;

export const Last = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    font-size: 0.75rem;
    font-weight: normal;
  }
`;

export const Lesson = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding-block: 1rem;
  background-color: ${props => props.theme["gray-100"]};

  p {
    font-size: 1rem;
  }

  span {
    font-size: 0.75rem;
  }
`;

export const InfoLesson = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-inline: 1.5rem;
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  p {
    font-size: 0.875rem;
  }

  span {
    font-size: 0.75rem;
    font-weight: normal;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  p {
    font-size: 0.875rem;
  }

  span {
    font-size: 0.75rem;
    font-weight: normal;
  }
`;

export const Xp = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 5rem;
  padding-inline: 1.5rem;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;

  @media print {
    display: none;
  }
`;

export const BottomFooter = styled.button`
  all: unset;
  width: 8.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$green === "green" ? props.theme["green-600"] : props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.$green === "green" ? props.theme["green-700"] : props.theme["red-300"]};
  border-bottom-width: 3px;
  border-radius: 10px;
  transition: all ease 0.2s;
  cursor: pointer;

  p {
    font-size: 1.125rem;
    font-weight: bold;
  }

  @media print {
    display: none;
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
    width: 17rem;
    height: 3rem;

    p {
      font-size: 1.75rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 480px) {
      width: 12.5rem;
      height: 2rem;
      border-radius: 6px;

      p {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 25rem;
    height: 3.5rem;

    p {
      font-size: 2rem;
    }
  }
`;