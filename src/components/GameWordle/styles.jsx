import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;

  @media(max-width: 376px) {
    margin-top: 6px;
    gap: 6px;
  }

  @media(max-width: 360px) {
    gap: 0.5rem;
  }

  @media(max-width: 320px) {
    margin-top: 4px;
    gap: 4px;
  }

  @media(min-width: 480px) {
    margin-top: 10px;
    justify-content: flex-start;
  }

  @media(min-width: 1280px) {
    margin-top: 36px;
  }
`;

export const MainInside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 320px) {
    gap: 4px;
  }

  @media (min-width: 480px) {
    width: 632px;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1280px) {
    width: 1200px;
  }
`;

export const Right = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  
  @media(max-width: 320px) {
    gap: 4px;
  }

  @media(min-width: 480px) {
    width: 420px;
    gap: 0px;
    justify-content: space-between;
  }
  
  @media(min-width: 1280px) {
    width: 720px;
    height: 450px;
  }
`;

export const Left = styled.div`
  height: 100%;

  @media(min-width: 480px) {
    width: 180px;
    height: 212px;
  }
  
  @media (min-width: 1280px) {
    width: 380px;
    height: 450px;
  }
`;

export const InfoArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;

  @media(min-width: 480px) {
    padding-inline: 0;
  }

  @media(min-width: 1024px) {
    padding-inline: 0;
  }
`;

export const Info = styled.div`
  width: 52px;
  height: 44px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["blue-300"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["blue-200"]};
  border-bottom-width: 4px;
  cursor: pointer;

  img {
    height: 80%;
  }

  @media(max-width: 360px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media(max-width: 320px) {
    width: 36px;
    height: 32px;
  }

  @media(min-width: 480px) {
    width: 200px;
    height: 32px;
  }

  @media(min-width: 1280px) {
    width: 350px;
    height: 72px;

    img {
      height: 50px;
    }
  }
`;

export const Coin = styled.div`
  width: 94px;
  height: 2.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${props => props.theme["blue-200"]};
  border-radius: 8px;

  img {
    width: 2rem;
  }

  span {
    font-size: 1.125rem;
    font-weight: bold;
    color: ${props => props.theme["blue-200"]};
  }

  @media(max-width: 360px) {
    width: 84px;
    height: 38px;

    img {
      width: 1.5rem;
    }

    span {
      font-size: 1rem;
    }
  }

  @media(max-width: 320px) {
    width: 72px;
    height: 32px;

    img {
      width: 1rem;
    }

    span {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 480px) {
    width: 200px;
    height: 32px;
    gap: 8px;

    img {
      width: 20px;
    }

    span {
      font-size: 20px;
    }
  }

  @media(min-width: 1280px) {
    width: 350px;
    height: 72px;
    gap: 52px;
    border-width: 3px;

    img {
      width: 52px;
    }

    span {
      font-size: 36px;
    }
  }
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media(max-width: 375px) {
    gap: 8px;
  }

  @media(max-width: 320px) {
    gap: 4px;
  }

  @media(min-width: 480px) {
    gap: 4px;
  }

  @media(min-width: 1280px) {
    gap: 0px;
    height: 100%;
    justify-content: space-between;
  }
`;

export const BoardRow = styled.div`
  display: flex;
  gap: 0.5rem;

  .correct {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["green-500"]};
    border-color: ${props => props.theme["green-400"]};
  }
  
  .almost {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["yellow-300"]};
    border-color: ${props => props.theme["yellow-400"]};
  }
  
  .error {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["gray-600"]};
    border-color: ${props => props.theme["gray-700"]};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 320px) {
    gap: 0.375rem;
  }

  @media(min-width: 480px) {
    width: 100%;
    gap: 0px;
    justify-content: space-between;
  }
`;

export const Letters = styled.div`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: bolder;
  border: 2px solid ${props => props.theme["gray-700"]};
  border-radius: 3px;
  color: ${props => props.theme["gray-600"]};
  cursor: pointer;

  @media(max-width: 360px) {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1.5rem;
  }

  @media(max-width: 320px) {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 1rem;
  }

  @media(min-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
  
  @media(min-width: 1280px) {
    width: 64px;
    height: 64px;
    border-width: 3px;
    font-size: 32px;
  }
`;

export const DivMobile = styled.div`
  width: 100%;

  @media (min-width: 480px) {
    display: none;
  }
`;

export const DivDesk = styled.div`
  display: none;
  width: 100%;

  @media (min-width: 480px) {
    display: block;
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media(max-width: 360px) {
    gap: 1rem;
  }

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 1280px) {
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 172px;
  height: 42px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-size: 1.125rem;
  background-color: ${props => props.$variant === "green" ? props.theme["green-500"] : props.$variant === "red" ? props.theme["red-200"] : props.theme["blue-300"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.$variant === "green" ? props.theme["green-400"] : props.$variant === "red" ? props.theme["red-300"] : props.theme["blue-200"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  cursor: pointer;

  img {
    width: 1.5rem;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media(max-width: 360px) {
    width: 150px;
    height: 42px;
    font-size: 16px;

    img {
      width: 24px;
    }
  }

  @media(max-width: 320px) {
    width: 130px;
    height: 2rem;
    font-size: 14px;

    img {
      width: 16px;
    }
  }

  @media(min-width: 480px) {
    width: 200px;
    height: 32px;
    font-size: 18px;

    img {
      width: 24px;
    }
  }

  @media(min-width: 1280px) {
    width: 350px;
    height: 72px;
    gap: 16px;
    font-size: 28px;

    img {
      width: 54px;
    }
  }
`;

export const KeyBoard = styled.div`
  width: 23rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .disabled {
    background-color: ${props => props.theme["gray-600"]};
  }

  @media(max-width: 376px) {
    width: 21rem;
  }

  @media(max-width: 360px) {
    width: 20rem;
  }

  @media(max-width: 320px) {
    width: 18rem;
  }

  @media(min-width: 768px) {
    width: 550px;
  }

  @media(min-width: 1204px) {
    width: 100%;
    gap: 20px;
  }
`;

export const Line1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  @media (min-width: 1280px) {
    gap: 16px;
  }
`;

export const Line2= styled.div`
  width: 100%;
  padding-inline: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  @media (min-width: 1280px) {
    gap: 16px;
  }
`;

export const Line3 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  .keyDelete {
    width: 3rem;
    background-color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 360px) {
    .keyDelete {
      width: 2.5rem;
    }
  }

  @media(max-width: 360px) {
    .keyDelete {
      width: 2.25rem;
    }
  }

  @media(min-width: 480px) {
    .keyDelete {
      width: 58px;
    }
  }

  @media(min-width: 1280px) {
    gap: 16px;

    .keyDelete {
      width: 72px;
    }
  }
`;

export const Key = styled.button`
  all: unset;
  width: 28px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  box-shadow: 0px 4px 10px 0px #00000033;
  border: 2px solid transparent;
  border-radius: 3px;
  color: ${props => props.theme["gray-600"]};
  transition: all ease 0.3s;
  font-size: 24px;
  cursor: pointer;

  img {
    width: 36px;
  }

  &:hover {
    border-color: ${props => props.theme["gray-700"]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media(max-width: 360px) {
    width: 24px;
    height: 38px;
    font-size: 22px;
  }

  @media(max-width: 320px) {
    width: 20px;
    height: 32px;
    font-size: 16px;
  }

  @media(min-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 18px;

    img {
      width: 32px;
    }
  }

  @media(min-width: 1280px) {
    width: 46px;
    height: 72px;
    font-size: 28px;

    img {
      width: 36px;
    }
  }
`;