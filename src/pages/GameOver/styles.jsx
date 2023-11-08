import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(min-width: 1024px) {
    flex-direction: row;
    overflow: hidden;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  position: relative;
  
  .fundoBg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }

  @media(max-width: 360px) {
    gap: 8px;
  }

  @media(min-width: 600px) {
    height: 560px;
  }

  @media(min-width: 1024px) {
    width: 40%;
    height: 100vh;
    gap: 20px;
  }
`;

export const Top = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 0 16px;

  @media(min-width: 1024px) {
    padding: 24px 24px 0 24px;
  }
`;

export const Middle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -56px;

  h2 {
    color: ${props => props.theme.white};
    font-size: 42px;
  }

  @media(min-width: 600px) {
    margin-top: -74px;
    gap: 5px;
  }

  @media(min-width: 1024px) {
    margin-top: 80px;
    gap: 20px;
  }

  @media(min-width: 1440px) {
    margin-top: 120px;
  }

  @media(min-width: 1920px) {
    margin-top: 150px;
  }
`;

export const AvatarArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 50%;
    z-index: 2;
  }

  .bgConfetes {
    width: 90%;
    position: absolute;
    z-index: 1;
  }

  p {
    width: 150px;
    height: 28px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-radius: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media(min-width: 600px) {
    img {
      width: 280px;
    }

    .bgConfetes {
      width: 80%;
    }

    p {
      border-radius: 12px;
      width: 300px;
      height: 48px;
      font-size: 28px;
    }
  }

  @media(min-width: 1024px) {
    .bgConfetes {
      width: 90%;
    }

    p {
      font-size: 32px;
    }
  }

  @media(min-width: 1920px) {
    img {
      width: 300px;
    }
  }
`;

export const Bottom = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media(max-width: 360px) {
    gap: 6px;
  }

  @media(min-width: 600px) {
    gap: 6px;
  }
`;

export const AreaItem = styled.section`
   width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: ${props => props.theme.white};
  justify-content: center;

  img {
    width: 36px;
    margin-right: 20px;
  }

  span {
    display: block;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: ${props => props.theme["red-200"]};
  }

  p {
    font-weight: 500;
  }

  @media(min-width: 600px) {
    gap: 20px;

    img {
      width: 44px;
    }

    span {
      width: 36px;
      height: 36px;
      font-size: 24px;
    }

    p {
      font-size: 24px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media(min-width: 1024px) {
    flex: 0;
    width: 60%;
    height: 100vh;
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: -32px;
  position: relative;
  
  span {
    width: 120px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.theme["red-300"]};
    border-radius: 6px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
  }

  @media(min-width: 600px) {
    margin-top: -50px;
    gap: 14px;

    p {
      font-size: 24px;
    }

    span {
      width: 250px;
      height: 52px;
      font-size: 24px;
    }
  }

  @media(min-width: 1024px) {
    margin-top: 0px;
    gap: 100px;
  }

  @media(min-width: 1920px) {
    gap: 200px;
  }
`;

export const ButtonClose = styled.section`
  position: absolute;
  top: 32px;
  right: 32px;
`;

export const ButtonRed = styled.button`
  all: unset;
  width: 280px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["red-300"]};
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 1.25rem;
    font-weight: bold;
  }

  &:hover {
    background-color: ${props => props.theme["red-300"]};
  }

  @media(min-width: 600px) {
    width: 500px;
    height: 84px;
    gap: 72px;

    p {
      font-size: 32px;
    }
  }

  @media(min-width: 1024px) {
    width: 350px;
    height: 72px;
    gap: 32px;

    p {
      font-size: 24px;
    }
  }
`;

export const Bottom2 = styled.section`
  width: 80%;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  margin-left: 200px;
  margin-top: 64px;

  .fundoBg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  @media(min-width: 2560px) {
    margin-left: 350px;
  }
`;

export const AreaItem2 = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: ${props => props.theme.white};
  justify-content: center;

  img {
    width: 36px;
    margin-right: 20px;
  }

  span {
    display: block;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: ${props => props.theme["red-200"]};
  }

  p {
    font-weight: 500;
  }

  @media(min-width: 600px) {
    gap: 20px;

    img {
      width: 44px;
    }

    span {
      width: 36px;
      height: 36px;
      font-size: 24px;
    }

    p {
      font-size: 24px;
    }
  }

  @media(min-width: 1440px) {
    gap: 40px;

    img {
      width: 56px;
    }

    span {
      width: 56px;
      height: 56px;
      font-size: 32px;
    }

    p {
      font-size: 28px;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media(min-width: 600px) {
    gap: 14px;
  }

  @media(min-width: 1024px) {
    flex-direction: row;
    gap: 50px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
  }
`;

export const Text = styled.div`
  width: 280px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 12px;
  border: 2px solid ${props => props.theme["gray-700"]};
  border-radius: 6px;
  opacity: 0.5;

  @media(min-width: 600px) {
    width: 350px;
    height: 82px;
    
    p {
      font-size: 22px;
    }
  }

  @media(min-width: 1024px) {
    width: 300px;
    height: 150px;
    border-width: 3px;
    
    p {
      font-size: 22px;
    }
  }
`;