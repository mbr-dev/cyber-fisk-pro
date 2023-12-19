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
    margin-top: 0.375rem;
    gap: 0.375rem;
  }

  @media(max-width: 360px) {
    gap: 0.5rem;
  }

  @media(max-width: 320px) {
    margin-top: 0.25rem;
    gap: 0.25rem;
  }

  @media(min-width: 768px) {
    margin-top: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      margin-top: 0.625rem;
      justify-content: flex-start;
    }
  }

  @media(min-width: 1024px) {
    margin-top: 36px;
  }
`;

export const MainInside = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.625rem;

  @media (max-width: 320px) {
    gap: 0.25rem;
  }

  @media(min-width: 768px) {
    width: 31.25rem;
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 39.5rem;
      gap: 0rem;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }

  @media (min-width: 1024px) {
    width: 990px;
  }

  @media (min-width: 1366px) {
    width: 75rem;
  }
`;

export const Right = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  @media(max-width: 320px) {
    gap: 0.25rem;
  }

  @media(min-width: 768px) {
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 26.25rem;
      gap: 0px;
      justify-content: space-between;
    }
  }
  
  @media(min-width: 1024px) {
    width: 594px;
    height: 28.125rem;
  }

  @media(min-width: 1366px) {
    width: 45rem;
  }
`;

export const Left = styled.div`
  height: 100%;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 11.25rem;
      height: 13.25rem;
    }
  }
  
  @media (min-width: 1024px) {
    width: 23.75rem;
    height: 28.125rem;
  }
`;

export const InfoArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;

  @media(min-width: 768px) {
    padding-inline: 6rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-inline: 0;
    }
  }
`;

export const Info = styled.button`
  width: 3.25rem;
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media(max-width: 360px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media(max-width: 320px) {
    width: 2.25rem;
    height: 2rem;
  }

  @media(min-width: 768px) {
    width: 15rem;
    height: 3rem;

    img {
      height: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 12.5rem;
      height: 2rem;

      img {
        height: 24px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 280px;
    height: 4.5rem;

    img {
      height: 50px;
    }
  }

  @media(min-width: 1366px) {
    width: 21.875rem;
  }
`;

export const Coin = styled.div`
  width: 5.875rem;
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
    width: 5.25rem;
    height: 2.375rem;

    img {
      width: 1.5rem;
    }

    span {
      font-size: 1rem;
    }
  }

  @media(max-width: 320px) {
    width: 4.5rem;
    height: 2rem;

    img {
      width: 1rem;
    }

    span {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    width: 15rem;
    height: 3rem;
    gap: 2rem;

    img {
      height: 32px;
    }

    span {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 12.5rem;
      height: 2rem;
      gap: 0.5rem;

      img {
        width: 20px;
        height: 24px;
      }

      span {
        font-size: 1.25rem;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 280px;
    height: 4.5rem;
    gap: 3.25rem;
    border-width: 3px;

    img {
      width: 52px;
      height: 42px;
    }

    span {
      font-size: 2.25rem;
    }
  }

  @media(min-width: 1366px) {
    width: 21.875rem;
  }
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media(max-width: 375px) {
    gap: 0.5rem;
  }

  @media(max-width: 320px) {
    gap: 0.25rem;
  }

  @media(max-width: 768px) {
    gap: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.25rem;
    }
  }

  @media(min-width: 1024px) {
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

  @media(min-width: 768px) {
    gap: 0.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 100%;
      gap: 0px;
      justify-content: space-between;
    }
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
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 2rem;
      height: 2rem;
      font-size: 1rem;
    }
  }
  
  @media(min-width: 1024px) {
    width: 4rem;
    height: 4rem;
    border-width: 3px;
    font-size: 2rem;
  }
`;

export const DivMobile = styled.div`
  width: 100%;

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: none;
    }
  }
`;

export const DivDesk = styled.div`
  display: none;
  width: 100%;

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: block;
    }
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(max-width: 768px) {
    gap: 2rem;
  }

  @media(min-width: 1024px) {
    gap: 0;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 10.75rem;
  height: 2.625rem;
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
    width: 9.375rem;
    font-size: 1rem;

    img {
      width: 24px;
    }
  }

  @media(max-width: 320px) {
    width: 8.125rem;
    height: 2rem;
    font-size: 0.875rem;

    img {
      width: 16px;
    }
  }

  @media(min-width: 768px) {
    width: 15rem;
    height: 3rem;
    gap: 0.5rem;
    font-size: 1.25rem;

    img {
      width: 54px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 12.5rem;
      height: 2rem;
      font-size: 1.125rem;

      img {
        width: 24px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 280px;
    height: 4.5rem;
    gap: 1rem;
    font-size: 28px;

    img {
      width: 54px;
    }
  }

  @media(min-width: 1366px) {
    width: 21.875rem;
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
    width: 34.375rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 30rem;
    }
  }

  @media(min-width: 1024px) {
    width: 100%;
    gap: 1.25rem;
  }
`;

export const Line1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;

  @media(min-width: 768px) {
    gap: 0.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.375rem;
    }
  }

  @media (min-width: 1024px) {
    gap: 1rem;
  }
`;

export const Line2= styled.div`
  width: 100%;
  padding-inline: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;

  @media(min-width: 768px) {
    gap: 0.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.375rem;
    }
  }

  @media (min-width: 1024px) {
    gap: 1rem;
  }
`;

export const Line3 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;

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
    gap: 0.5rem;

    .keyDelete {
      width: 4rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.375rem;

      .keyDelete {
        width: 3.625rem;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 1rem;

    .keyDelete {
      width: 4.5rem;
    }
  }
`;

export const Key = styled.button`
  all: unset;
  width: 1.75rem;
  height: 2.5rem;
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
  font-size: 1.5rem;
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
    width: 1.5rem;
    height: 2.375rem;
    font-size: 1.375rem;
  }

  @media(max-width: 320px) {
    width: 1.25rem;
    height: 1rem;
    font-size: 1rem;
  }

  @media(min-width: 768px) {
    width: 3rem;
    height: 3.5rem;
    font-size: 1.5rem;

    img {
      width: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 2rem;
      height: 2rem;
      font-size: 1.125rem;

      img {
        width: 32px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 2.875rem;
    height: 4.5rem;
    font-size: 1.75rem;

    img {
      width: 36px;
    }
  }
`;