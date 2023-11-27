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
  justify-content: space-around;

  @media(max-width: 320px) {
    justify-content: space-between;
    padding-bottom: 6px;
  }

  @media(min-width: 480px) {
    flex-direction: row;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 480px) {
    width: 50%;
    height: 200px;
    justify-content: flex-start;
  }

  @media(min-width: 1280px) {
    height: 500px;
  }

  @media(min-width: 1440px) {
    height: 650px;
  }
`;

export const AvatarArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;

  @media(max-width: 320px) {
    padding: 8px 20px;
  }

  @media(min-width: 480px) {
    width: 100%;
    padding: 8px;
    justify-content: center;
    gap: 54px;
  }
  
  @media(min-width: 1280px) {
    width: 80%;
    padding: 16px 32px;
    justify-content: space-between;
  }
`;

export const AvatarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  p {
    font-weight: bold;
    font-size: 1.25rem;
  }

  @media(max-width: 320px) {
    p {
      font-size: 14px;
    }
  }

  @media(min-width: 480px) {
    gap: 10px;

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 1280px) {
    gap: 20px;

    p {
      font-size: 24px;
    }
  }
`;

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid ${props => props.theme["red-200"]};
  border-radius: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;

  img {
    width: 100%;
  }

  @media(max-width: 320px) {
    width: 36px;
    height: 36px;
  }

  @media(min-width: 480px) {
    width: 32px;
    height: 32px;
  }

  @media(min-width: 1280px) {
    width: 84px;
    height: 84px;
  }
`;

export const Print = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
 
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 6px;
  cursor: pointer;

  p {
    font-size: 0.675rem;
    text-align: center;
  }

  img {
    width: 50%;
  }

  @media(max-width: 320px) {
    width: 36px;
    height: 36px;

    p {
      font-size: 8px;
    }

    img {
      width: 16px;
    }
  }

  @media(min-width: 480px) {
    width: 32px;
    height: 32px;
    gap: 0;

    p {
      font-size: 6px;
    }

    img {
      width: 12px;
    }
  }

  @media(min-width: 1280px) {
    width: 84px;
    height: 84px;
    gap: 6px;

    p {
      font-size: 12px;
    }

    img {
      width: 36px;
    }
  }
`;

export const XP = styled.div`
  width: 100%;
  height: 60px;
  padding-inline: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  background-color: ${props => props.theme["gray-100"]};

  @media(max-width: 320px) {
    height: 42px;
  }

  @media(min-width: 480px) {
    height: 36px;
  }

  @media(min-width: 1280px) {
    height: 72px;
  }
`;

export const XPDiv = styled.div`
  width: 18.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 320px) {
    width: 250px;
  }

  @media(min-width: 480px) {
    width: 80%;
  }
`;

export const XPLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.25rem;
`;

export const XPInside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    color: ${props => props.theme["red-200"]};
  }

  p {
    color: ${props => props.theme["gray-700"]};
    font-weight: 500;
  }

  @media(max-width: 320px) {
    span {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 480px) {
    span {
      font-size: 12px;
    }
    
    p {
      font-size: 12px;
    }
  }

  @media(min-width: 1280px) {
    span {
      font-size: 24px;
    }
    
    p {
      font-size: 24px;
    }
  }
`;

export const XPRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.3s;

  p {
    color: ${props => props.theme["blue-100"]};
    font-size: 1.25rem;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  }

  &:hover {
    p {
      color: ${props => props.theme["blue-600"]};
    }
  }

  @media(max-width: 320px) {
    p {
      font-size: 16px;
    }
  }

  @media(min-width: 480px) {
    p {
      font-size: 16px;
    }
  }

  @media(min-width: 1280px) {
    p {
      font-size: 24px;
    }
  }
`;

export const Stage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;

  @media(max-width: 320px) {
    padding: 4px 10px;
  }

  @media(min-width: 480px) {
    width: 80%;
    padding: 0;
    padding-block: 6px;
  }

  @media(min-width: 1280px) {
    padding-block: 32px;
  }
`;

export const SLeft = styled.div`
  width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h2 {
    font-size: 1rem;
    z-index: 100;
  }

  @media(max-width: 320px) {
    width: 150px;
    height: 60px;

      h2 {
      font-size: 10px;
    }
  }

  @media(min-width: 480px) {
    width: 120px;
    height: 86px;

    h2 {
      font-size: 16px;
    }
  }

  @media(min-width: 1280px) {
    width: 300px;
    height: 250px;

    h2 {
      font-size: 24px;
    }
  }
`;

export const SRight = styled.div`
  flex: 1;
  text-align: center;
  transition: all ease 0.3s;
  cursor: pointer;

  span {
    color: ${props => props.theme["red-200"]};
  }

  p {
    color: ${props => props.theme["gray-700"]};
    font-weight: 500;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media(max-width: 320px) {
    span {
      font-size: 16px;
    }
    
    p {
      font-size: 12px;
    }
  }

  @media(min-width: 480px) {
    span {
      font-size: 16px;
    }
    
    p {
      font-size: 16px;
    }
  }

  @media(min-width: 1280px) {
    span {
      font-size: 28px;
    }
    
    p {
      font-size: 28px;
    }
  }
`;

export const Details = styled.div`
  width: 100%;
  height: 220px;
  padding-inline: 2rem;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme["gray-100"]};
  overflow-y: scroll;

  @media(max-width: 320px) {
    height: 160px;
    padding-inline: 16px;
    padding-top: 6px;
  }

  @media(min-width: 480px) {
    width: 50%;
    height: 200px;
    padding-inline: 36px;
  }

  @media(min-width: 1280px) {
    width: 50%;
    height: 500px;
    padding-inline: 52px;
  }

  @media(min-width: 1440px) {
    height: 650px;
  }
`;

export const DDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${props => props.theme["gray-200"]};
  padding-bottom: 0.25rem;
  cursor: pointer;
`;

export const DivBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    padding: 0.135rem;
    font-size: 0.75rem;
    border-radius: 6px;
    border: 2px solid ${props => props.theme["red-300"]};
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    p {
      padding: 3px 4px;
      font-size: 10px;
    }
  }

  @media(min-width: 480px) {
    p {
      padding: 4px 10px;
      font-size: 12px;
    }
  }

  @media(min-width: 1280px) {
    p {
      padding: 8px 12px;
      font-size: 16px;
    }
  }
`;

export const Bar = styled.div`
  width: 2rem;
  height: 4rem;
  background-color: ${props => props.theme.white};
  position: relative;

  @media(max-width: 320px) {
    width: 36px;
    height: 52px;
  }

  @media(min-width: 480px) {
    width: 52px;
    height: 80px;
  }

  @media(min-width: 1280px) {
    width: 64px;
    height: 100px;
  }
`;

export const BarColor = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["yellow-500"]};
  border: 1px solid ${props => props.theme["yellow-600"]};
  position: absolute;
  bottom: 0;

  span {
    text-align: center;
    font-size: 0.75rem;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    span {
      font-size: 12px;
    }
  }

  @media(min-width: 480px) {
    span {
      font-size: 12px;
    }
  }

  @media(min-width: 1280px) {
    span {
      font-size: 16px;
    }
  }
`;

export const ViewDetails = styled.div`
  width: 12rem;
  
  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  li {
    font-size: 0.875rem;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    width: 180px;

    h2 {
      font-size: 14px;
    }

    li {
      font-size: 12px;
    }
  }

  @media(min-width: 480px) {
    width: 200px;

    h2 {
      font-size: 16px;
      margin-bottom: 6px;
    }

    li {
      font-size: 14px;
    }
  }

  @media(min-width: 1280px) {
    width: 280px;

    h2 {
      font-size: 24px;
      margin-bottom: 0.5rem;
    }

    li {
      font-size: 18px;
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

  @media(min-width: 480px) {
    width: 600px;
    height: 52px;
  }

  @media(min-width: 1280px) {
    width: 1200px;
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