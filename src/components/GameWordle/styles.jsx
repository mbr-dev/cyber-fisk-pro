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

  @media(max-width: 360px) {
    gap: 0.5rem;
  }
`;

export const InfoArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Info = styled.div`
  width: 2.75rem;
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
    width: 1.75rem;
    height: 1.75rem;
  }
`;

export const Coin = styled.div`
  padding: 0.375rem 0.5rem;
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
    padding: 0.25rem;

    img {
      width: 1.5rem;
    }

    span {
      font-size: 1rem;
    }
  }

  @media(max-width: 320px) {
    padding: 0.25rem;
    gap: 0.125rem;

    img {
      width: 1rem;
    }

    span {
      font-size: 0.875rem;
    }
  }
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media(max-width: 360px) {
    gap: 0.5rem;
  }

  @media(max-width: 320px) {
    gap: 0.375rem;
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
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media(max-width: 360px) {
    gap: 1rem;
  }

  @media(max-width: 320px) {
    gap: 0.5rem;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 10rem;
  height: 3rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-size: 1.125rem;
  background-color: ${props => props.$variant === "green" ? props.theme["green-500"] : props.theme["blue-300"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.$variant === "green" ? props.theme["green-400"] : props.theme["blue-200"]};
  border-bottom-width: 3px;
  cursor: pointer;

  img {
    width: 1.5rem;
  }

  @media(max-width: 320px) {
    width: 7rem;
    height: 2rem;
    font-size: 0.75rem;

    img {
      width: 1rem;
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
`;

export const Line1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Line2= styled.div`
  width: 100%;
  padding-inline: 0.5rem;
  display: flex;
  justify-content: space-around;
`;

export const Line3 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
`;

export const Key = styled.button`
  all: unset;
  width: 1.875rem;
  height: 2.875rem;
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
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 376px) {
    width: 1.75rem;
    height: 2.5rem;
    font-size: 1.5rem;
  }

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 2rem;
    font-size: 1rem;
  }
`;