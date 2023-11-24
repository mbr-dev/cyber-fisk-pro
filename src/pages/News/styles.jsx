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
  gap: 24px;
  padding-top: 24px;
  background-color: ${props => props.theme["gray-050"]};

  @media(max-width: 360px) {
    padding-top: 16px;
    gap: 16px;
  }

  @media (max-width: 320px) {
    gap: 12px;
    padding-top: 12px;
  }

  @media (min-width: 768px) {
    padding-top: 32px;
    gap: 24px;
  }
`;

export const DivButtons = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media(max-width: 320px) {
    width: 290px;
    gap: 6px;
  }

  @media (min-width: 768px) {
    width: 450px;
    gap: 16px;
  }
`;

export const DivInside = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonNews = styled.button`
  all: unset;
  width: 160px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  transition: all ease 0.3s;

  img {
    width: 20px;
  }

  @media(max-width: 320px) {
    width: 140px;
    height: 36px;
    gap: 18px;

    p {
      font-size: 14px;
    }

    img {
      width: 18px;
    }
  }

  @media (min-width: 768px) {
    width: 210px;
    height: 54px;

    p {
      font-size: 24px;
    }
  }
`;

export const ButtonCreate = styled.button`
  all: unset;
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  background-color: ${props => props.theme.white};

  @media(max-width: 320px) {
    height: 36px;

    p {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    height: 54px;

    p {
      font-size: 24px;
    }
  }
`;

export const Image = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${props => props.theme["gray-900"]};

  img {
    width: 16px;
  }

  @media(max-width: 320px) {
    width: 20px;
    height: 20px;

    img {
      width: 14px;
    }
  }
`;

export const NewsItems = styled.div`
  width: 340px;
  height: 350px;
  overflow-y: scroll;

  @media(max-width: 360px) {
    height: 300px;
  }

  @media(max-width: 320px) {
    width: 290px;
    height: 210px;
  }

  @media (min-width: 768px) {
    width: 450px;
    height: 520px;
  }
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
  background-color: ${props => props.$variant === "red" ? props.theme["red-200"] : props.theme["yellow-300"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.$variant === "red" ? props.theme["red-300"] :  props.theme["yellow-200"]};
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

export const CreateItems = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme["gray-200"]};
  border-radius: 8px;
`;

export const CreateItemsInside = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  textarea {
    width: 256px;
    height: 326px;
    border: none;
    border-radius: 6px;
    background-color: ${props => props.theme["gray-200"]};
    color: ${props => props.theme["gray-700"]};
    resize: none;
    padding: 8px;
  }

  @media (max-width: 360px) {
    textarea {
      height: 280px;
    }
  }

  @media (max-width: 320px) {
    textarea {
      width: 210px;
      height: 190px;
    }
  }
`;

export const ButtonFile = styled.button`
  all: unset;
  width: 42px;
  height: 36px;
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
`;

export const CreateFile = styled.div`
  width: 280px;
  height: 160px;
  padding: 8px;

  img {
    width: 100%;
    height: 100%;
  }

  p {
    padding: 12px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
  }

  @media(max-width: 320px) {
    height: 112px;

    p {
      padding: 10px;
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    height: 232px;

    p {
      padding: 16px;
      font-size: 24px;
    }
  }
`;

export const ButtonSend = styled.button`
  all: unset;
  width: 250px;
  height: 36px;
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
      font-size: 18px;
    }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 320px) {
    width: 200px;
    height: 32px;
  }

  @media (min-width: 768px) {
    width: 350px;
    height: 56px;
    
    p {
      font-size: 28px;
    }
  }
`;

export const Items = styled.div`
  width: 100%;
  height: 250px;
  border: 2px solid ${props => props.theme["red-200"]};
  border-radius: 8px;
  margin-bottom: 12px;

  @media(max-width: 320px) {
    height: 170px;
    margin-bottom: 6px;
  }

  @media (min-width: 768px) {
    height: 320px;
  }
`;

export const TitleItems = styled.div`
  padding: 12px;
  height: 64px;
  background-color: ${props => props.theme.white};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  p {
    font-weight: 700;
  }

  span {
    font-size: 14px;
    font-weight: 700;
  }

  @media(max-width: 320px) {
    height: 48px;
    padding: 6px;

    p {
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) {
    height: 72px;

    p {
      font-size: 24px;
    }

    span {
      font-size: 18px;
    }
  }
`;

export const InfoItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["gray-100"]};
`;

export const Div = styled.div`
  width: 100%;
  height: 176px;

  img {
    width: 100%;
    height: 100%;
  }

  p {
    padding: 12px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
  }

  @media(max-width: 320px) {
    height: 112px;

    p {
      padding: 10px;
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    height: 232px;

    p {
      padding: 16px;
      font-size: 24px;
    }
  }
`;