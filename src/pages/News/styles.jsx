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
  justify-content: center;
  gap: 16px ;

  @media (max-width: 320px) {
    gap: 10px;
    padding-top: 10px;
  }

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: center;
      gap: 0;
    }
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    gap: 32px;
    padding-top: 24px;
  }

  @media (min-width: 1366px) {
    padding-top: 32px;
  }
`;

export const DivButtons = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(max-width: 320px) {
    width: 290px;
    gap: 10px;
  }

  @media (min-width: 768px) {
    width: 600px;
    gap: 16px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 340px;
    }
  }
  
  @media (min-width: 1024px) {
    width: 400px;
    gap: 24px;
  }

  @media (min-width: 1366px) {
    width: 576px;
    gap: 32px;
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

  @media (min-width: 1024px) {
    gap: 24px;
  }

  @media (min-width: 1366px) {
    gap: 32px;
  }
`;

export const ButtonNews = styled.button`
  all: unset;
  width: 160px;
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
    width: 284px;
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

  @media (min-width: 1024px) {
    width: 400px;
    height: 4rem;
    gap: 12rem;

    p {
      font-size: 1.25rem;
    }

    img {
      width: 1.5rem;
    }
  }

  @media (min-width: 1366px) {
    width: 36rem;
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
    gap: 24px;

    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 20rem;
      height: 2.5rem;
      gap: 16px;

      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 400px;
    height: 4rem;
    gap: 2rem;

    p {
      font-size: 1.25rem;
    }

    img {
      width: 1.5rem;
    }
  }

  @media (min-width: 1366px) {
    width: 36rem;
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

  @media(min-width: 768px) {
    width: 32px;
    height: 32px;

    img {
      width: 20px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 1.25rem;
      height: 1.25rem;

      img {
        width: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 32px;
    height: 32px;

    img {
      width: 20px;
    }
  }
`;

export const NewsItems = styled.div`
  width: 340px;
  height: 380px;
  display: flex;
  overflow-y: scroll;
  
  @media(max-width: 320px) {
    width: 290px;
    height: 232px;
  }

  @media (min-width: 768px) {
    width: 600px;
   height: 500px;
  }
  
  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 40%;
      height: 190px;
      padding-left: 10px;
      border-left: 1px solid ${props => props.theme["gray-070"]};
    }
  }
  
  @media (min-width: 1024px) {
    width: 500px;
    height: 440px;
  }
  
  @media (min-width: 1366px) {
    width: 600px;
    height: 492px;
  }
  
  @media (min-width: 1920px) {
    height: 672px;
  }
`;

export const ItemsScroll = styled.div`
  width: 100%;
`;

export const CreateItems = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme["gray-200"]};
  border-radius: 8px;

  @media (min-width: 320px) {
    padding: 12px;
  }

  @media (min-width: 768px) {
    padding: 24px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      background-color: ${props => props.theme["gray-060"]};
      padding: 12px;
    }
  }

  @media (min-width: 1024px) {
    padding: 24px;
  }

  @media (min-width: 1366px) {
    padding: 32px;
  }
`;

export const CreateItemsInside = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  
  textarea {
    width: 16rem;
    height: 100%;
    border: none;
    border-radius: 6px;
    background-color: ${props => props.theme["gray-200"]};
    color: ${props => props.theme["gray-600"]};
    resize: none;
    padding: 0.5rem;
  }

  @media (max-width: 320px) {
    textarea {
      width: 13.125rem;
    }
  }

  @media (min-width: 768px) {
    textarea {
      width: 460px;
      font-size: 1.25rem;

      &::placeholder {
        font-size: 1.25rem;
      }
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      textarea {
        width: 220px;
        font-size: 0.875rem;
        background-color: ${props => props.theme["gray-060"]};

        &::placeholder {
          font-size: 0.875rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    textarea {
      width: 360px;
      font-size: 1.25rem;

      &::placeholder {
        font-size: 1.25rem;
      }
    }
  }

  @media (min-width: 1366px) {
    textarea {
      width: 450px;
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

  @media (max-width: 320px) {
    width: 28px;
    height: 28px;

    img {
      width: 16px;
    }
  }

  @media (min-width: 768px) {
    width: 54px;
    height: 54px;

    img {
      width: 32px;
    }
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

  @media (min-width: 1024px) {
    width: 54px;
    height: 54px;

    img {
      width: 32px;
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

  @media (min-width: 1024px) {
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

  @media (min-width: 1024px) {
    height: 17rem;

    p {
      padding: 1rem;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1366px) {
    height: 21.875rem;
  }
`;

export const AreaButton = styled.div`
  width: 100vw;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
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

  @media (min-width: 1024px) {
    width: 62.5rem;
    height: 7.5rem;
    gap: 2rem;
  }
`;

export const ButtonSend = styled.button`
  all: unset;
  width: 15.625rem;
  height: 38px;
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
    height: 32px;
  }

  @media (min-width: 768px) {
    width: 27rem;
    height: 52px;
    
    p {
      font-size: 1.75rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 15.625rem;
      height: 32px;
      
      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 32rem;
    height: 52px;
    
    p {
      font-size: 1.75rem;
    }
  }
`;

export const Button = styled.button`
  all: unset;
  width: 150px;
  height: 38px;
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
    font-size: 20px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 320px) {
    width: 120px;
    height: 32px;

    p {
      font-size: 18px;
    }
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 52px;
    
    p {
      font-size: 32px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 200px;
      height: 32px;
      
      p {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 250px;
    height: 52px;
    
    p {
      font-size: 32px;
    }
  }
`;