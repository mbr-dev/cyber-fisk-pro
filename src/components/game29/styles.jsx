import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 6px;
  gap: 6px;
  margin-bottom: 6px;
  background-color: ${props => props.theme["gray-300"]};
  overflow: hidden;

  @media(max-width: 320px) {
    padding-block: 3px;
    gap: 3px;
  }

  @media(min-width: 768px) {
    padding-block: 16px;
    margin-bottom: 16px;
    gap: 16px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      padding-block: 3px;
      gap: 0;
      margin-bottom: 6px;
    }
  }

  @media(min-width: 1024px) {
    padding-block: 16px;
    margin-bottom: 8px;
  }
  
  @media(min-width: 1366px) {
    margin-bottom: 16px;
  }
`;

export const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 8px;
  gap: 6px;

  @media(min-width: 768px) {
    gap: 14px;
    padding-inline: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 50%;
      display: flex;
      padding-inline: 16px;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
  }

  @media(min-width: 1024px) {
    justify-content: space-between;
    gap: 16px;
  }
`;

export const AreaWord = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;

  @media(max-width: 320px) {
    gap: 6;
  }

  @media(min-width: 768px) {
    gap: 8px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 6px;
      align-items: center;
    }
  }

  @media(min-width: 1024px) {
    gap: 8px;
  }
`;

export const Words = styled.span`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  text-align: center;

  @media(max-width: 320px) {
    font-size: 10px;
    padding: 3px 6px;
  }

  @media(min-width: 768px) {
    font-size: 20px;
    padding: 8px 14px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      font-size: 10px;
      padding: 3px 6px;
    }
  }

  @media(min-width: 1024px) {
    font-size: 20px;
    padding: 8px 14px;
  }
`;

export const AreaAnswers = styled.div`
  width: 360px;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
  padding: 6px;
  border: 2px solid ${props => props.theme["gray-700"]};
  border-radius: 8px;

  @media(max-width: 360px) {
    width: 340px;
  }
  
  @media(max-width: 320px) {
    width: 300px;
    height: 96px;
  }

  @media(min-width: 768px) {
    width: 700px;
    height: 172px;
    border-width: 3px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 400px;
      height: 96px;
      border-width: 2px;
    }
  }

  @media(min-width: 1024px) {
    width: 464px;
    height: 190px;
    border-width: 3px;
  }

  @media(min-width: 1366px) {
    width: 35rem;
  }
`;

export const WordsDrop = styled.span`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  text-align: center;

  @media(max-width: 320px) {
    font-size: 10px;
    padding: 3px 6px;
  }

  @media(min-width: 768px) {
    font-size: 20px;
    padding: 8px 14px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      font-size: 10px;
      padding: 3px 6px;
    }
  }

  @media(min-width: 1024px) {
    font-size: 20px;
    padding: 8px 14px;
  }
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 8px;
  gap: 6px;

  @media(min-width: 768px) {
    gap: 14px;
    padding-inline: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 50%;
      border-left: 2px solid ${props => props.theme["gray-200"]};
      display: flex;
      padding-inline: 16px;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
  }
  
  @media(min-width: 1024px) {
    justify-content: space-between;
    gap: 16px;
  }
`;

export const AreaButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media(min-width: 768px) {
    gap: 36px;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 164px;
  height: 32px;
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
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 100px;
    height: 20px;
    font-size: 14px;
    border-radius: 6px;
  }

  @media (min-width: 768px) {
    width: 15.625rem;
    height: 3rem;
    font-size: 1.5rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 150px;
      height: 28px;
      font-size: 14px;
    }
  }

  @media (min-width: 1024px) {
    width: 15.625rem;
    height: 3rem;
    font-size: 1.5rem;
  }
`;