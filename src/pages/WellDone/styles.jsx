import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;

  @media(min-width: 480px) {
    flex-direction: row;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  
  .fundoBg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: -1px;
    z-index: -1;
  }

  @media(max-width: 320px) {
    height: 250px;
  }

  @media(min-width: 480px) {
    width: 40%;
    height: 100vh;
  }
`;

export const Top = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 0 16px;
  z-index: 2;

  @media(max-width: 320px) {
    padding: 12px 12px 0 12px;
  }

  @media(min-width: 1280px) {
    padding: 24px 24px 0 24px;
  }
`;

export const DivMobile = styled.div`
  @media (min-width: 480px) {
    display: none;
  }
`;

export const DivDesk = styled.div`
  display: none;

  @media (min-width: 480px) {
    display: block;
  }
`;

export const Middle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -38px;

  h2 {
    color: ${props => props.theme.white};
    font-size: 42px;
    margin-top: -110px;
  }

  @media(max-width: 320px) {
    margin-top: -54px;

    h2 {
      font-size: 24px;
      margin-top: -60px;
    }
  }

  @media(min-width: 480px) {
    margin-top: 0px;

    h2 {
      font-size: 24px;
      margin-top: -80px;
      margin-bottom: 8px;
    }
  }

  @media(min-width: 1280px) {
    margin-top: 50px;

    h2 {
      font-size: 52px;
      margin-top: -250px;
    }
  }

  @media(min-width: 1440px) {
    margin-top: 80px;

    h2 {
      margin-top: -270px;
    }
  }
`;

export const AvatarArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .bgConfetes {
    width: 350px;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  @media(max-width: 320px) {
    .bgConfetes {
      width: 250px;
    }
  }

  @media(min-width: 480px) {
    .bgConfetes {
      width: 280px;
    }
  }

  @media(min-width: 1280px) {

    .bgConfetes {
      width: 90%;
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

  @media(max-width: 320px) {
    width: 90%;
    gap: 4px;
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

  @media(max-width: 320px) {
    img {
      width: 20px;
    }

    span {
      width: 24px;
      height: 24px;
      font-size: 14px;
      border-radius: 6px;
    }

    p {
      font-size: 14px;
    }
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

  @media(min-width: 480px) {
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

  p {
    text-align: center;
  }
  
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

  @media(max-width: 320px) {
    margin-top: -20px;
  }

  @media(min-width: 480px) {
    margin-top: 0px;
    align-items: flex-end;
    gap: 20px;

    p {
      font-size: 16px;
      margin-bottom: 8px;
    }

    span {
      width: 150px;
      height: 32px;
      font-size: 18px;
    }
  }

  @media(min-width: 1280px) {
    gap: 100px;

    p {
      font-size: 24px;
      margin-bottom: 8px;
      
    }

    span {
      width: 250px;
      height: 52px;
      font-size: 32px;
    }
  }
`;

export const ButtonClose = styled.section`
  display: none;

  @media (min-width: 480px) {
    display: block;
    position: absolute;
    top: 12px;
    right: 12px;
  }
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

  @media(max-width: 320px) {
    width: 220px;
    height: 38px;
    gap: 16px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 1280px) {
    width: 350px;
    height: 84px;
    gap: 32px;

    p {
      font-size: 24px;
    }
  }

  @media(min-width: 1440px) {
    width: 400px;
    height: 120px;
    gap: 16px;

    p {
      font-size: 28px;
    }
  }
`;

export const IconAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};
  overflow: hidden;

  @media (min-width: 1280px) {
    width: 72px;
    height: 72px;
  }

  @media (min-width: 1440px) {
    width: 100px;
    height: 100px;
  }
`;

export const Bottom2 = styled.section`
  display: none;

  @media(min-width: 480px) {
    display: flex;
    width: 400px;
    height: 100px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    position: relative;
    margin-top: 24px;

    .fundoBg {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }

  @media(min-width: 1280px) {
    width: 700px;
    height: 180px;
    gap: 12px;
    margin-top: 36px;

    .fundoBg {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
  }
`;

export const LineSeparator = styled.div`
  width: 250px;
  height: 1px;
  background-color: ${props => props.theme.white};

  @media (min-width: 1280px) {
    width: 500px;
    height: 2px;
  }
`;

export const AreaItem2 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: ${props => props.theme.white};

  img {
    width: 32px;
  }

  span {
    display: block;
    font-size: 14px;
    width: 32px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: ${props => props.theme["red-200"]};
  }

  p {
    font-size: 20px;
    font-weight: 500;
  }

  @media(min-width: 1280px) {
    gap: 52px;

    img {
      width: 56px;
    }

    span {
      width: 56px;
      height: 56px;
      font-size: 28px;
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

  @media(max-width: 320px) {
    gap: 6px;
  }

  @media(min-width: 480px) {
    flex-direction: row;
    gap: 16px;
  }

  @media(min-width: 1280px) {
    gap: 50px;
  }
`;

export const Text = styled.div`
  width: 280px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid ${props => props.theme["gray-700"]};
  border-radius: 6px;
  opacity: 0.5;

  @media(max-width: 320px) {
    width: 250px;
    height: 52px;
    
    p {
      font-size: 16px;
    }
  }

  @media(min-width: 480px) {
    width: 250px;
    height: 100px;
    padding-inline: 6px;
    
    p {
      font-size: 16px;
    }
  }

  @media(min-width: 1280px) {
    width: 400px;
    height: 180px;
    border-width: 3px;
    
    p {
      font-size: 24px;
    }
  }
`;

export const AreaButton = styled.div`
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

  @media(min-width: 480px) {
    width: 300px;
    height: 52px;
  }

  @media(min-width: 1280px) {
    width: 600px;
    height: 100px;
    border-width: 4px;
  }
`;

export const ButtonHome = styled.button`
  all: unset;
  width: 250px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom-width: 3px;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 24px;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 200px;
    height: 32px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 480px) {
    height: 32px;
    border-radius: 6px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 1280px) {
    width: 400px;
    height: 44px;

    p {
      font-size: 32px;
    }
  }
`;