import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media(max-width: 360px) {
    width: 20rem;
  }

  @media(max-width: 320px) {
    width: 19rem;
  }

  @media(min-width: 600px) {
    gap: 16px;
  }

  @media(min-width: 1024px) {
    width: 80%;
    height: 400px;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0;
  }

  @media(min-width: 1440px) {
    width: 70%;
  }

  @media(min-width: 2560px) {
    width: 50%;
  }
`;

export const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 1024px) {
    width: 45%;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const Answers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  
  @media(max-width: 376px) {
    gap: 0.5rem;
  }
  
  @media(max-width: 360px) {
    gap: 0.25rem;
  }

  @media(min-width: 1024px) {
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media(max-width: 360px) {
    gap: 0.5rem;
  }
`;

export const DivQ = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media(max-width: 320px) {
    gap: 0.25rem;
  }

  
`;

export const DivQuestion = styled.div`
  width: 11rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["gray-700"]};
  border-radius: 6px;
  align-items: center;
  padding-inline: 0.5rem;
  text-align: center;

  @media(max-width: 360px) {
    width: 10rem;
    height: 2.75rem;

    span {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 1024px) {
    width: 200px;
    height: 64px;

    span {
      font-size: 18px;
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

  @media(max-width: 360px) {
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
  width: 3rem;
  height: 3rem;
  border-radius: 6px;
  background-color: ${props => props.theme["gray-700"]};
  color: ${props => props.theme.white};

  @media(max-width: 360px) {
    width: 2.75rem;
    height: 2.75rem;
  }

  @media(min-width: 1024px) {
    width: 64px;
    height: 64px;
  }
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media(min-width: 600px) {
    gap: 16px;
  }

  @media(min-width: 1024px) {
    width: 45%;
    height: 100%;
    justify-content: flex-start;
    gap: 42px;
  }

  @media(min-width: 1440px) {
    width: 480px;
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

  @media(max-width: 360px) {
    width: 21rem;
  }

  @media(max-width: 320px) {
    width: 19rem;
  }

  @media(min-width: 1024px) {
    width: 100%;
    gap: 10px;
  }

  @media(min-width: 1440px) {
    justify-content: space-between;
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;