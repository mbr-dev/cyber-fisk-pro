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
  justify-content: center;
  gap: 16px;
  padding-top: 16px;
  overflow-y: scroll;

  @media (max-width: 320px) {
    gap: 12px;
    padding-top: 12px;
  }

  @media (min-width: 768px) {
    gap: 36px;
    padding-top: 36px;
  }
`;

export const Div = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const AreaButton = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 320px) {
    height: 64px;
  }

  @media (min-width: 768px) {
    height: 120px;
    gap: 32px;
  }
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

  p {
      font-size: 18px;
    }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 320px) {
    width: 130px;
    height: 32px;
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 56px;
    
    p {
      font-size: 28px;
    }
  }
`;

export const Text = styled.div`
  flex: 1;
  width: 300px;
  display: flex;
  padding: 14px;
  gap: 10px;
  border-block: 2px solid ${props => props.theme["gray-200"]};
  background-color: ${props => props.theme["gray-100"]};
  
  img {
    width: 18px;
    height: 18px;
  }

  textarea {
    width: 250px;
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

    textarea {
      width: 200px;
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 500px;

    img {
      width: 24px;
      height: 24px;
    }

    textarea {
      width: 400px;
      font-size: 20px;
    }
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

  @media(min-width: 1024px) {
    width: 800px;
  }
`;

export const SelectTitle = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
  border: 1px solid ${props => props.theme["gray-700"]};
  border-radius: 8px;
  gap: 10px;
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
    height: 36px;
  }

  @media(min-width: 600px) {
    height: 60px;
    gap: 18px;

    p {
      font-size: 22px;
      font-weight: 500;
    }

    img {
      width: 36px;
    }
  }

  @media(min-width: 1024px) {
    height: 64px;
    gap: 20px;

    p {
      font-size: 24px;
    }

    img {
      width: 28px;
    }
  }
`;

export const SelectUl = styled.ul`
  width: 300px;
  position: absolute;
  z-index: 100;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-inline: 18px;
  gap: 12px;
  background-color: ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 250px;
    padding: 10px;
  }

  @media(min-width: 768px) {
    width: 500px;
    padding: 16px;
  }

  @media(min-width: 1024px) {
    width: 800px;
    padding-inline: 44px;
    gap: 20px;  
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
    font-size: 24px;
  }

  @media(min-width: 1024px) {
    font-size: 28px;
  }
`;