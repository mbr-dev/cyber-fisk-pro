import styled from "styled-components";

export const LessonSelectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LessonSelectionContent = styled.main`
  flex: 1;
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-block: 1rem;

  @media(max-width: 320px) {
    margin-block: 0.5rem;
    gap: 0.75rem;
  }

  @media(max-width: 376px) {
    margin-block: 0.625rem;
    gap: 1rem;
  }

  @media(min-width: 600px) {
    width: 38rem;
    margin-block: 2rem;
  }
`;

export const ButtonAreaTop = styled.div`
  width: 100%;
  height: 13rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  p {
    font-size: 1.125rem;
    font-weight: 500;
  }

  @media(max-width: 376px) {
    height: 12.75rem;
  }

  @media(max-width: 320px) {
    height: 9rem;

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 600px) {
    justify-content: center;
    gap: 5rem;
    height: 19rem;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const DivRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 320px) {
    gap: 0.75rem;
  }

  @media(min-width: 600px) {
    gap: 2rem;
  }
`;

export const ButtonTask = styled.button`
  all: unset;
  width: 6.5rem;
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;

  img {
    width: 36px;
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme.black};
  }

  @media(max-width: 376px) {
    height: 5.75rem;
  }

  @media(max-width: 320px) {
    height: 5rem;
    gap: 0.5rem;

    img {
      width: 24px;
    }
  }

  @media(min-width: 600px) {
    width: 10rem;
    height: 12rem;
  }
`;

export const ButtonSuperTask = styled.button`
  all: unset;
  width: 9rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;

  p {
    font-size: 1.25rem;
  }

  img {
    width: 64px;
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme.black};
  }

  @media(max-width: 320px) {
    p {
      font-size: 1.25rem;
    }

    img {
      width: 36px;
    }
  }

  @media(min-width: 600px) {
    width: 13rem;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const ButtonAreaBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  img {
    width: 28px;
  }

  .micro {
    height: 50%;
  }

  p {
    font-size: 1.125rem;
    font-weight: 500;
  }

  .button {
    margin-bottom: 1rem;
  }

  @media(min-width: 600px) {
    width: 38rem;
    justify-content: center;
    gap: 5rem;

    p {
      font-size: 1.5rem;
    }

    .button {
      margin-bottom: 2rem;
    }
  }
`;

export const BottomRight = styled.div`
  width: 9rem;

  @media(min-width: 600px) {
    width: 13rem;
  }
`;

export const BottomLeft = styled.div`
  width: 6.5rem;
  
  @media(min-width: 600px) {
    width: 10rem;
  }
`;

export const ButtonBottom = styled.button`
  all: unset;
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  img {
    width: 24px;
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme.black};
  }

  @media(max-width: 320px) {
    height: 4rem;
    gap: 0.5rem;

    p { 
      font-size: 0.75rem;
    }

    img {
      width: 18px;
    }
  }

  @media(min-width: 600px) {
    height: 6rem;
    justify-content: center;
    gap: 1rem;

    p {
      font-size: 1rem;
    }

    img {
      width: 32px;
    }
  }
`;