import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  overflow-y: scroll;

  @media (max-width: 320px) {
    gap: 0.75rem;
    padding-top: 0.75rem;
  }

  @media (min-width: 768px) {
    gap: 1rem;
    padding-top: 2rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      gap: 0.5rem;
      padding-top: 0.5rem;
    }
  }

  @media (min-width: 1024px) {
    gap: 1.5rem;
    padding-top: 1.5rem;
  }

  @media (min-width: 1366px) {
    gap: 1rem;
    padding-top: 2rem;
  }
`;

export const Div = styled.div`
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media(min-width: 768px) {
    gap: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 43.75rem;
      flex-direction: row;
      gap: 0rem;
      justify-content: space-between;
    }
  }

  @media(min-width: 1024px) {
    width: 800px;
  }

  @media(min-width: 1366px) {
    width: 68.75rem;
  }
`;

export const AreaButton = styled.div`
  width: 100%;
  height: 5.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.125rem;

  @media (max-width: 320px) {
    height: 4rem;
  }

  @media (min-width: 768px) {
    height: 7.5rem;
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 4rem;
    }
  }

  @media (min-width: 1024px) {
    height: 100px;
    gap: 54px;
  }

  @media (min-width: 1366px) {
    height: 7.5rem;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 9.375rem;
  height: 2rem;
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
    width: 15.625rem;
    height: 3.5rem;
    
    p {
      font-size: 1.75rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 12rem;
      height: 2rem;
      
      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 54px;
    
    p {
      font-size: 1.75rem;
    }
  }

  @media (min-width: 1366px) {
    height: 3.5rem;
    
    p {
      font-size: 2rem;
    }
  }
`;

export const Text = styled.div`
  flex: 1;
  width: 18.75rem;
  display: flex;
  padding: 0.875rem;
  gap: 0.625rem;
  border: 2px solid ${props => props.theme["gray-200"]};
  background-color: ${props => props.theme["gray-100"]};
  
  img {
    width: 18px;
    height: 18px;
  }

  textarea {
    width: 15.625rem;
    border: none;
    background-color: ${props => props.theme["gray-100"]};
    color: ${props => props.theme["gray-700"]};
    resize: none;
  }

  input {
    display: none;
  }

  @media(max-width: 320px) {
    width: 15.625rem;

    textarea {
      width: 200px;
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    width: 31.25rem;

    img {
      width: 24px;
      height: 24px;
    }

    textarea {
      width: 25rem;
      font-size: 1.25rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 43.75rem;
      gap: 0.5rem;
      
      img {
        width: 16px;
        height: 16px;
      }
      
      textarea {
        width: 40rem;
        font-size: 0.75rem;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 800px;
    
    img {
      width: 22px;
      height: 22px;
    }
    
    textarea {
      width: 64rem;
      font-size: 1.125rem;
    }
  }
  
  @media(min-width: 1280px) {
    width: 68.75rem;
    
    img {
      width: 24px;
      height: 24px;
    }
    
    textarea {
      width: 64rem;
      font-size: 1.25rem;
    }
  }
`;

export const Select = styled.div`
  width: 18.75rem;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;

  @media(max-width: 320px) {
    width: 15.625rem;
  }

  @media(min-width: 768px) {
    width: 31.25rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 21rem;
    }
  }

  @media(min-width: 1024px) {
    width: 380px;
  }

  @media(min-width: 1366px) {
    width: 33rem;
  }
`;

export const SelectTitle = styled.div`
  width: 100%;
  height: 2.625rem;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
  border: 1px solid ${props => props.theme["gray-700"]};
  border-radius: 8px;
  gap: 0.625rem;
  background-color: ${props => props.theme["gray-200"]};
  color: ${props => props.theme["gray-700"]};
  

  p {
    flex: 1;
    font-size: 1.125rem;
  }

  img {
    width: 18px;
  }

  @media(max-width: 320px) {
    height: 2.25rem;
  }

  @media(min-width: 768px) {
    height: 3.75rem;
    gap: 1.125rem;

    p {
      font-size: 22px;
      font-weight: 500;
    }

    img {
      width: 36px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 2rem;
      gap: 1.25rem;

      p {
        font-size: 0.875rem;
      }

      img {
        width: 18px;
      }
    }
  }

  @media(min-width: 1024px) {
    height: 4rem;
    gap: 1.25rem;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 28px;
    }
  }
`;

export const SelectUl = styled.ul`
  width: 18.75rem;
  position: absolute;
  z-index: 100;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-inline: 1.125rem;
  gap: 0.75rem;
  background-color: ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 15.625rem;
    padding: 0.625rem;
  }

  @media(min-width: 768px) {
    width: 31.25rem;
    padding: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 21rem;
      padding: 0.5rem;
    }
  }

  @media(min-width: 1024px) {
    width: 380px;
    padding-inline: 32px;
    gap: 1.25rem;  
  }

  @media(min-width: 1366px) {
    width: 33rem;
    padding-inline: 44px;
    gap: 1.25rem;  
  }
`;

export const SelectLi = styled.li`
  width: 100%;
  list-style: none;
  color: ${props => props.theme["gray-700"]};
  font-weight: 500;

  &:hover {
    background-color: ${props => props.theme["gray-400"]};
  }

  @media(min-width: 768px) {
    font-size: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 1024px) {
    font-size: 1.5rem;
  }

  @media(min-width: 1366px) {
    font-size: 1.75rem;
  }
`;