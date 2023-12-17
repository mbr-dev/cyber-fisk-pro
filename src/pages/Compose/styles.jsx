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
  gap: 16px;
  padding-top: 16px;

  @media (max-width: 320px) {
    gap: 8px;
    padding-top: 8px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      gap: 8px;
      padding-top: 8px;
    }
  }

  @media (min-width: 1024px) {
    gap: 24px;
    padding-top: 24px;
  }
`;

export const Div = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 10px;
  }

  @media(min-width: 768px) {
    gap: 16px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 700px;
      flex-direction: row;
      gap: 0rem;
      justify-content: space-between;
    }
  }

  @media(min-width: 1024px) {
    width: 800px;
  }

  @media(min-width: 1366px) {
    width: 1100px;
  }
`;

export const Select = styled.div`
  width: 300px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;

  @media(max-width: 320px) {
    width: 250px;
  }

  @media(min-width: 768px) {
    width: 500px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 332px;
    }
  }

  @media(min-width: 1024px) {
    width: 380px;
  }

  @media(min-width: 1366px) {
    width: 520px;
  }
`;

export const SelectTitle = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  position: relative;
  align-items: center;
  padding-inline: 16px;
  border: 1px solid ${props => props.theme["gray-700"]};
  border-radius: 8px;
  background-color: ${props => props.theme["gray-200"]};
  color: ${props => props.theme["gray-700"]};
  
  p {
    flex: 1;
    font-size: 18px;
  }

  img {
    width: 18px;
  }

  @media(max-width: 320px) {
    height: 32px;
    padding-inline: 12px;

    p {
      font-size: 16px;
    }

    img {
      width: 16px;
    }
  }

  @media(min-width: 768px) {
    height: 54px;
    padding-inline: 16px;

    p {
      font-size: 20px;
    }

    img {
      width: 20px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 32px;
      padding-inline: 12px;

      p {
        font-size: 16px;
      }

      img {
        width: 16px;
      }
    }
  }

  @media(min-width: 1024px) {
    height: 54px;
    padding-inline: 16px;

    p {
      font-size: 20px;
    }

    img {
      width: 20px;
    }
  }
`;

export const SelectUl = styled.ul`
  width: 300px;
  position: absolute;
  z-index: 100;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 250px;
    padding: 8px 12px;
  }

  @media(min-width: 768px) {
    width: 500px;
    padding: 1rem 18px;
    gap: 16px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 332px;
      padding: 8px 12px;
    }
  }

  @media(min-width: 1024px) {
    width: 380px;
    padding: 1rem 18px;
    gap: 16px; 
  }
  
  @media(min-width: 1366px) {
    width: 520px;
    padding: 18px 20px;
    gap: 20px; 
  }
`;

export const SelectLi = styled.li`
  width: 100%;
  list-style: none;
  color: ${props => props.theme["gray-700"]};
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: ${props => props.theme["gray-400"]};
  }

  @media(max-width: 320px) {
    font-size: 14px
  }

  @media(min-width: 768px) {
    font-size: 20px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      font-size: 14px;
    }
  }

  @media(min-width: 1024px) {
    font-size: 20px;
  }
`;

export const Text = styled.div`
   flex: 1;
  width: 300px;
  display: flex;
  padding: 14px;
  gap: 12px;
  border-top: 3px solid ${props => props.theme["gray-200"]};
  background-color: ${props => props.theme["gray-100"]};
  
  img {
    width: 18px;
    height: 18px;
  }

  textarea {
    width: 250px;
    font-size: 16px;
    border: none;
    background-color: ${props => props.theme["gray-100"]};
    color: ${props => props.theme["gray-700"]};
    resize: none;
  }

  input {
    display: none;
  }
  
  @media(max-width: 320px) {
    width: 250px;
    padding: 10px;
    gap: 8px;

    textarea {
      width: 200px;
      font-size: 0.875rem;
    }
  }
  
  @media(min-width: 768px) {
    width: 500px;
    padding: 16px;
    gap: 14px;
    
    img {
      width: 24px;
      height: 24px;
    }
    
    textarea {
      width: 420px;
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 700px;
      gap: 8px;
      padding: 10px;

      img {
        width: 16px;
        height: 16px;
      }
      
      textarea {
        width: 28rem;
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 800px;
    padding: 14px;
    gap: 14px;
    
    img {
      width: 22px;
      height: 22px;
    }
    
    textarea {
      width: 520px;
      font-size: 20px;
    }
  }

  @media(min-width: 1366px) {
    width: 1100px;
    padding: 16px;
    gap: 16px;
    
    img {
      width: 28px;
      height: 28px;
    }
    
    textarea {
      width: 920px;
      font-size: 24px;
    }
  }
`;

export const AreaButton = styled.div`
   width: 100vw;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: 320px) {
    height: 64px;
    gap: 16px;
  }

  @media (min-width: 768px) {
    height: 100px;
    gap: 32px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 52px;
      gap: 32px;
    }
  }

  @media(min-width: 1024px) {
    height: 100px;
    gap: 64px;
  }

  @media (min-width: 1366px) {
    gap: 72px;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 150px;
  height: 40px;
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
      font-size: 18px;
    }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 320px) {
    width: 120px;
    height: 36px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 54px;
    
    p {
      font-size: 28px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 180px;
      height: 28px;
      
      p {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 250px;
    height: 54px;
    
    p {
      font-size: 28px;
    }
  }

  @media (min-width: 1366px) {
    width: 400px;
    height: 64px;
    
    p {
      font-size: 36px;
    }
  }
`;