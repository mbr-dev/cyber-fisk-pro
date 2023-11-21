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
`;

export const SelectLessonArea = styled.div`
  width: 230px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media(max-width: 360px) {
    gap: 12px;
  }

  @media(max-width: 320px) {
    width: 180px;
    gap: 8px;
  }

  @media(min-width: 600px) {
    width: 500px;
    gap: 20px;
  }

  @media(min-width: 768px) {
    width: 330px;
    gap: 24px;
  }
  
  @media(min-width: 1024px) {
    width: 1000px;
    gap: 36px;
  }
`;

export const ButtonLesson = styled.button`
  all: unset;
  width: 72px;
  height: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all ease 0.3s;

  p {
    font-weight: bold;
    font-size: 32px;
  }

  span {
    font-weight: 500;
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border: 2px solid ${props => props.theme.black};
  }

  &:disabled{
    background-color: ${props => props.theme["gray-500"]};
  }  

  @media(max-width: 360px) {
    width: 68px;
    height: 72px;

    p {
      font-size: 28px
    }
  }

  @media(max-width: 320px) {
    width: 58px;
    height: 54px;

    p {
      font-size: 18px;
    }

    span {
      font-size: 12px
    }
  }

  @media(min-width: 600px) {
    width: 64px;
    height: 64px;

    p {
      font-size: 22px;
    }

    span {
      font-size: 16px;
    }
  }

  @media(min-width: 768px) {
    width: 116px;
    height: 116px;

    p {
      font-size: 42px;
    }

    span {
      font-size: 24px;
    }
  }

  @media(min-width: 1024px) {
    width: 150px;
    height: 150px;

    p {
      font-size: 48px;
    }

    span {
      font-size: 20px;
    }
  }
`;

export const AreaFooter = styled.div`
  width: 300px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 250px;
    height: 52px;
  }

  @media(min-width: 600px) {
    width: 620px;
    height: 64px;
  }

  @media(min-width: 768px) {
    width: 620px;
    height: 104px;
  }

  @media(min-width: 1024px) {
    width: 1000px;
    height: 120px;
    border-width: 4px;
  }

  @media(min-width: 1440px) {
    width: 1200px;
  }

  @media(min-width: 1920px) {
    width: 1600px;
  }
`;