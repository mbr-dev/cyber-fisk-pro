import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`  
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 0.5rem;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${props => props.theme["gray-300"]};
  overflow: hidden;

  @media(max-width: 320px) {
    padding-block: 0.375rem;
    gap: 0.375rem;
  }

  @media(min-width: 768px) {
    padding-block: 1rem;
    margin-bottom: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 0rem;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
  }

  @media(min-width: 1280px) {
    padding-block: 1rem;
    margin-bottom: 1rem;
  }
`;

export const AreaWord = styled.div`
  width: 23rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  @media(max-width: 320px) {
    width: 19rem;
  }

  @media(min-width: 768px) {
    width: 35rem;
    height: 9rem;
    gap: 0.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 23rem;
      height: 5rem;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
    }
  }

  @media(min-width: 1280px) {
    width: 35rem;
    height: 9rem;
    gap: 0.5rem;
  }
`;

export const Words = styled.span`
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
  text-align: center;

  @media(max-width: 320px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }

  @media(min-width: 768px) {
    font-size: 1.25rem;
    padding: 0.625rem 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
    }
  }

  @media(min-width: 1280px) {
    font-size: 1.25rem;
    padding: 0.625rem 1rem;
  }
`;

export const AreaAnswers = styled.div`
  width: 20rem;
  height: 8.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 2px solid ${props => props.theme["gray-700"]};
  border-radius: 8px;
  
  @media(max-width: 320px) {
    width: 18.5rem;
    height: 8rem;
  }

  @media(min-width: 768px) {
    width: 42rem;
    height: 13rem;
    border-width: 3px;
    align-items: center;
    justify-content: center;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 23rem;
      height: 6rem;
      border-width: 2px;
    }
  }

  @media(min-width: 1280px) {
    width: 35rem;
    height: 13rem;
    border-width: 3px;
  }
`;

export const WordsDrop = styled.span`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
  text-align: center;

  @media(max-width: 320px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }

  @media(min-width: 768px) {
    font-size: 1.125rem;
    padding: 0.625rem 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
    }
  }

  @media(min-width: 1280px) {
    font-size: 1.125rem;
    padding: 0.625rem 1rem;
  }
`;

export const AreaButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media(min-width: 768px) {
    gap: 2rem;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 10rem;
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (min-width: 768px) {
    width: 15.625rem;
    height: 3rem;
    font-size: 1.5rem;
  }

  @media(orientation: landscape) {
    @media (max-width: 320px) {
      width: 7.5rem;
      height: 2rem;
      font-size: 0.875rem;
    }
  }

  @media (min-width: 1280px) {
    width: 15.625rem;
    height: 3rem;
    font-size: 1.5rem;
  }
`;