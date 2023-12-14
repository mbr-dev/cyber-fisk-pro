import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1.5rem;
  background-color: ${props => props.theme["gray-050"]};

  @media(max-width: 360px) {
    padding-top: 1rem;
    gap: 1rem;
  }

  @media (max-width: 320px) {
    gap: 0.75rem;
    padding-top: 0.75rem;
  }

  @media (min-width: 768px) {
    padding-top: 2rem;
    gap: 1.5rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      flex-direction: row;
      padding-top: 0.5rem;
      gap: 2rem;
      justify-content: center;
    }
  }

  @media (min-width: 1280px) {
    align-items: flex-start;
    padding-top: 2rem;
  }
`;

export const DivButtons = styled.div`
  width: 21.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media(max-width: 320px) {
    width: 18.125rem;
    gap: 0.375rem;
  }

  @media (min-width: 768px) {
    width: 29.125rem;
    gap: 1rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 21.25rem;
      height: 12rem;
    }
  }

  @media (min-width: 1280px) {
    width: 36rem;
    height: 100%;
    gap: 2rem;
  }
`;

export const DivInside = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media (min-width: 1280px) {
      gap: 2rem;
    }
`;

export const ButtonNews = styled.button`
  all: unset;
  width: 10rem;
  height: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  transition: all ease 0.3s;

  img {
    width: 1.25rem;
  }

  @media(max-width: 320px) {
    width: 8.75rem;
    height: 2.25rem;
    gap: 1.125rem;

    p {
      font-size: 0.875rem;
    }

    img {
      width: 18px;
    }
  }

  @media (min-width: 768px) {
    width: 13.125rem;
    height: 3.375rem;

    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 20rem;
      height: 2.5rem;
      gap: 10rem;

      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1280px) {
    width: 36rem;
    height: 4rem;
    gap: 24rem;

    p {
      font-size: 1.25rem;
    }

    img {
      width: 1.5rem;
    }
  }
`;

export const ButtonCreate = styled.button`
  all: unset;
  width: 100%;
  height: 2.625rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  justify-content: center;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  background-color: ${props => props.theme.white};

  @media(max-width: 320px) {
    height: 2.25rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 768px) {
    height: 3.375rem;

    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 20rem;
      height: 2.5rem;

      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1280px) {
    width: 36rem;
    height: 4rem;
    gap: 2rem;

    p {
      font-size: 1.25rem;
    }

    img {
      width: 1.5rem;
    }
  }
`;

export const Image = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${props => props.theme["gray-900"]};

  img {
    width: 16px;
  }

  @media(max-width: 320px) {
    width: 1.25rem;
    height: 1.25rem;

    img {
      width: 14px;
    }
  }
`;

export const NewsItems = styled.div`
  width: 21.25rem;
  height: 25rem;
  display: flex;
  overflow-y: scroll;

  @media(max-width: 320px) {
    width: 18.125rem;
    height: 13.125rem;
  }

  @media (min-width: 768px) {
    width: 28.125rem;
    height: 32.5rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 40%;
      height: 12rem;
      padding-left: 10px;
      border-left: 1px solid ${props => props.theme["gray-070"]};
    }
  }

  @media (min-width: 1280px) {
    width: 36rem;
    height: 33.25rem;
    gap: 1rem;
  }
`;

export const ItemsScroll = styled.div`
  width: 100%;
`;

export const AreaButton = styled.div`
  width: 22.5rem;
  height: 5.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  border-top: 1px solid ${props => props.theme["gray-070"]};

  @media (max-width: 320px) {
    height: 4rem;
  }

  @media (min-width: 768px) {
    width: 42rem;
    height: 7.5rem;
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 43.75rem;
      height: 4rem;
      gap: 2rem;
    }
  }

  @media (min-width: 1280px) {
    width: 62.5rem;
    height: 7.5rem;
    gap: 2rem;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 9.375rem;
  height: 2.25rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${props => props.$variant === "red" ? props.theme["red-200"] : props.theme["yellow-300"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.$variant === "red" ? props.theme["red-300"] :  props.theme["yellow-200"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  cursor: pointer;

  p {
      font-size: 1.125rem;
    }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 320px) {
    width: 8.125rem;
    height: 2rem;
  }

  @media (min-width: 768px) {
    width: 15rem;
    height: 3.5rem;
    
    p {
      font-size: 1.75rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 15rem;
      height: 2.25rem;
      
      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1280px) {
    width: 15.625rem;
    height: 3.5rem;
    
    p {
      font-size: 1.75rem;
    }
  }
`;

export const CreateItems = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme["gray-200"]};
  border-radius: 8px;

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      background-color: ${props => props.theme["gray-060"]};
    }
  }
`;

export const CreateItemsInside = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  textarea {
    width: 16rem;
    height: 20.375rem;
    border: none;
    border-radius: 6px;
    background-color: ${props => props.theme["gray-200"]};
    color: ${props => props.theme["gray-600"]};
    resize: none;
    padding: 0.5rem;
  }

  @media (max-width: 360px) {
    textarea {
      height: 17.5rem;
    }
  }

  @media (max-width: 320px) {
    textarea {
      width: 13.125rem;
      height: 11.875rem;
    }
  }

  @media (min-width: 768px) {
    textarea {
      width: 21.875rem;
      height: 30rem;
      font-size: 1.25rem;

      &::placeholder {
        font-size: 1.25rem;
      }
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      textarea {
        width: 17rem;
        height: 11rem;
        font-size: 0.875rem;
        background-color: ${props => props.theme["gray-060"]};

        &::placeholder {
          font-size: 0.875rem;
        }
      }
    }
  }

  @media (min-width: 1280px) {
    textarea {
      width: 30rem;
      height: 32rem;
      font-size: 1.25rem;

      &::placeholder {
        font-size: 1.25rem;
      }
    }
  }
`;

export const ButtonFile = styled.button`
  all: unset;
  width: 2.625rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${props => props.theme["red-200"]};
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom-width: 4px;
  cursor: pointer;
  transition: all ease 0.3s;

  img {
    width: 24px;
  }

  input {
    display: none;
  }

  &:hover {
    scale: 1.1;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 2rem;
      height: 2rem;

      img {
        width: 18px;
      }
    }
  }
`;

export const CreateFile = styled.div`
  width: 17.5rem;
  height: 10rem;
  padding: 0.5rem;

  img {
    width: 100%;
    height: 100%;
  }

  p {
    padding: 0.75rem;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 400;
  }

  @media(max-width: 320px) {
    height: 7rem;

    p {
      padding: 0.625rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    height: 14.5rem;

    p {
      padding: 1rem;
      font-size: 1.5rem;
    }
  }
`;

export const ButtonSend = styled.button`
  all: unset;
  width: 15.625rem;
  height: 2.25rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${props => props.theme["green-600"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme["green-200"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  cursor: pointer;

  p {
      font-size: 1.125rem;
    }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 320px) {
    width: 12.5rem;
    height: 2rem;
  }

  @media (min-width: 768px) {
    width: 27rem;
    height: 3.5rem;
    
    p {
      font-size: 1.75rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 15.625rem;
      height: 2.25rem;
      
      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1280px) {
    width: 32rem;
    height: 3.5rem;
    
    p {
      font-size: 1.75rem;
    }
  }
`;

export const Items = styled.div`
  width: 100%;
  border: 2px solid ${props => props.theme["red-200"]};
  border-radius: 8px;
  margin-bottom: 0.75rem;

  @media(max-width: 320px) {
    margin-bottom: 0.375rem;
  }
`;

export const TitleItems = styled.div`
  flex: 1;
  padding: 0.75rem;
  height: 4rem;
  background-color: ${props => props.theme.white};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  p {
    font-weight: 700;
  }

  span {
    font-size: 0.875rem;
    font-weight: 700;
  }

  @media(max-width: 320px) {
    height: 3rem;
    padding: 0.375rem;

    p {
      font-size: 0.875rem;
    }

    span {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 768px) {
    height: 4.5rem;

    p {
      font-size: 1.5rem;
    }

    span {
      font-size: 1.125rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding: 0;
      padding-left: 1rem;
      height: 2rem;

      p {
        font-size: 0.75rem;
      }

      span {
        font-size: 0.5rem;
      }
    }
  }

  @media (min-width: 1280px) {
    height: 4rem;
    padding-top: 0.5rem;

    p {
      font-size: 1.5rem;
    }

    span {
      font-size: 1.125rem;
    }
  }
`;

export const InfoItems = styled.div`
  width: 100%;
  height: 11.25rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  p {
    padding: 0.75rem;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 400;
  }

  @media(max-width: 320px) {
    p {
      padding: 0.625rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    p {
      padding: 1rem;
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 9.375rem;

      p {
        padding: 0.5rem;
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1280px) {
    height: 21.875rem;

    p {
      padding: 1rem;
      font-size: 1.5rem;
    }
  }
`;