import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media(max-width: 320px) {
    width: 19rem;
  }

  @media(min-width: 600px) {
    width: 90%;
    gap: 1rem;
    flex-direction: row-reverse;
    align-items: flex-start;
  }

  @media(min-width: 1280px) {
    width: 80%;
    gap: 3rem;
  }
`;

export const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 600px) {
    width: 45%;
  }
`;

export const Answers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  @media(max-width: 320px) {
    gap: 0.25rem;
  }

  @media(min-width: 600px) {
    gap: 0.25rem;
  }

  @media(min-width: 1280px) {
    width: 100%;
    gap: 1rem;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 600px) {
    gap: 0.5rem;
  }

  @media(min-width: 1280px) {
    gap: 1rem;
    justify-content: center;
  }
`;

export const DivQ = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivQuestion = styled.div`
  width: 11rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["gray-700"]};
  border-radius: 6px;
  align-items: center;
  padding-inline: 0.5rem;
  text-align: center;

  span {
    font-size: 0.75rem;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    width: 9rem;
    height: 2.5rem;

    span {
      font-size: 0.625rem;
    }
  }

  @media(min-width: 600px) {
    width: 9rem;
    height: 2.5rem;

    span {
      font-size: 0.75rem;
    }
  }

  @media(min-width: 1024px) {
    width: 200px;
    height: 4.5rem;

    span {
      font-size: 1rem;
    }
  }
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media(max-width: 320px) {
    gap: 0.25rem;
  }
`;

export const DivA = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media(max-width: 320px) {
    gap: 0.25rem;
  }

  @media(min-width: 600px) {
    gap: 0.25rem;
  }

  @media(min-width: 1280px) {
    width: 224px;
    gap: 16px;

    span {
      font-size: 26px;
    }
  }
`;

export const Answer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 6px;
  background-color: ${props => props.theme["gray-700"]};
  color: ${props => props.theme.white};

  @media(max-width: 320px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media(min-width: 600px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media(min-width: 1280px) {
    width: 64px;
    height: 64px;
  }
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media(min-width: 1280px) {
    width: 45%;
    justify-content: flex-start;
    gap: 2rem;
  }
`;

export const WordSelected = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border: 2px solid ${props => props.theme["gray-700"]};

  @media(min-width: 1024px) {
    height: 54px;
    border-radius: 8px;
  }
`;

export const Words = styled.div`
  width: 19rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;

  @media(max-width: 360px) {
    width: 17rem;
  }

  @media(max-width: 320px) {
    width: 16rem;
  }

  @media(min-width: 1024px) {
    height: 54px;
    border-radius: 8px;
    padding-left: 16px;

    span {
      font-size: 28px;
    }
  }
`;

export const Delete = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2px;
  background-color: ${props => props.theme["red-200"]};
  line-height: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    scale: 1.05;
  }

  @media(min-width: 1024px) {
    width: 54px;
    height: 54px;
  }
`;

export const WordsArea = styled.div`
  width: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media(max-width: 320px) {
    width: 19rem;
  }

  @media(min-width: 600px) {
    width: 100%;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  padding: 0.375rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all ease 0.3s;
  text-align: center;

  p {
    font-size: 0.875rem;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }  

  @media(max-width: 320px) {
    padding: 0.25rem 0.5rem;

    p {
      font-size: 0.75rem;
    }
  }

  @media(min-width: 600px) {
    padding: 0.375rem 0.5rem;

    p {
      font-size: 0.75rem;
    }
  }

  @media(min-width: 1280px) {
    padding: 0.75rem 1rem;

    p {
      font-size: 0.875rem;
    }
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  all: unset;
  width: 150px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${props => props.$variant === "red" ? props.theme["red-200"] : props.theme["green-600"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.$variant === "red" ? props.theme["red-300"] :  props.theme["green-700"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 7.5rem;
    height: 2rem;
    font-size: 0.875rem;
  }

  @media (min-width: 1280px) {
    width: 250px;
    height: 48px;
    font-size: 24px;
  }
`;

export const AreaFooter = styled.div`
  width: 300px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 250px;
    height: 52px;
  }

  @media(min-width: 600px) {
    width: 600px;
    height: 52px;
  }

  @media(min-width: 1280px) {
    width: 1200px;
    height: 100px;
    border-width: 4px;
  }
`;

export const ButtonTask = styled.button`
  all: unset;
  width: 250px;
  height: 32px;
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
    width: 200px;
    height: 32px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 600px) {
    height: 32px;
    border-radius: 6px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 1280px) {
    width: 400px;
    height: 44px;

    p {
      font-size: 32px;
    }
  }
`;