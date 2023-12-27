import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  padding-inline: 16px;

  @media(max-width: 320px) {
    gap: 8px;
    margin-top: 8px;
    padding-inline: 8px;
  }

  @media(min-width: 768px) {
    margin-top: 32px;
    gap: 24px;
    padding-inline: 100px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
      gap: 8px;
      margin-top: 8px;
      padding-inline: 36px;
    }
  }

  @media(min-width: 1024px) {
    justify-content: center;
    margin-top: 32px;
    gap: 24px;
    padding-inline: 40px;
  }
`;

export const Title = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme["gray-100"]};
  text-align: center;
  padding-block: 10px;
  
  p {
    font-size: 16px;
    font-weight: 500;
  }
  
  @media(max-width: 320px) {
    padding-block: 8px;
    padding-inline: 8px;

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    padding-block: 16px;
    padding-inline: 0;

    p {
      font-size: 28px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 8px;

      p {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    padding-block: 16px;

    p {
      font-size: 28px;
    }
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 150px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  border: 2px solid transparent;
  border-bottom-width: 3px;
  text-align: center;
  cursor: pointer;
  transition: all ease 0.3s;

  p {
    font-size: 16px;
    color: ${props => props.theme["gray-700"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 120px;
    height: 40px;

    p {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    width: 240px;
    height: 72px;

    p {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 120px;
      height: 40px;

      p {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 240px;
    height: 72px;

    p {
      font-size: 24px;
    }
  }
`;