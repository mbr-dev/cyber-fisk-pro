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

  @media(min-width: 768px) {
    margin-top: 24px;
  }

  @media(min-width: 1024px) {
    margin-top: 16px;
    height: 500px;
    justify-content: center;
  }
`;

export const MainInside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 320px) {
    gap: 4px;
  }

  @media (min-width: 1024px) {
    width: 1050px;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
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
  
  @media(min-width: 1024px) {
    gap: 0;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  }
`;

export const Left = styled.div`
  height: 100%;
  
  @media (min-width: 1024px) {
    width: 380px;
  }
`;

export const InfoArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;

  @media(min-width: 768px) {
    padding-inline: 32px;
  }

  @media(min-width: 1024px) {
    padding-inline: 0;
  }
`;

export const Info = styled.div`
  width: 52px;
  height: 2.75rem;
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

  @media(min-width: 768px) {
    width: 72px;
    height: 72px;
  }

  @media(min-width: 1024px) {
    width: 300px;
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

  @media(min-width: 768px) {
    width: 180px;
    height: 72px;
    gap: 32px;
    border-width: 3px;

    img {
      width: 54px;
    }

    span {
      font-size: 32px;
    }
  }

  @media(min-width: 1024px) {
    width: 300px;
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

  @media(min-width: 1024px) {
    width: 100%;
    height: 100%;
  }
`;

export const BoardRow = styled.div`
  display: flex;
  gap: 0.5rem;

  @media(max-width: 320px) {
    gap: 0.375rem;
  }

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

  @media(min-width: 1024px) {
    width: 100%;
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

  @media(min-width: 768px) {
    width: 58px;
    height: 58px;
    font-size: 32px;
    border-width: 3px;
  }

  @media(min-width: 1024px) {
    width: 64px;
    height: 64px;
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
`;

export const Button = styled.button`
  all: unset;
  width: 172px;
  height: 3rem;
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

  @media(min-width: 768px) {
    width: 300px;
    height: 64px;
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
`;

export const Line2= styled.div`
  width: 100%;
  padding-inline: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
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

  @media(min-width: 768px) {
    .keyDelete {
      width: 64px;
    }
  }

  @media(min-width: 1024px) {
    .keyDelete {
      width: 84px;
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

  @media(min-width: 768px) {
    width: 36px;
    height: 54px;
    font-size: 24px;

    img {
      width: 44px;
    }
  }

  @media(min-width: 1204px) {
    width: 44px;
    height: 64px;
    font-size: 28px;

    img {
      width: 64px;
    }
  }
`;