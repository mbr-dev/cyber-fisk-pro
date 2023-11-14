import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media(min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 1024px) {
    width: 50%;
    height: 500px;
    justify-content: flex-start;
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

  @media(min-width: 768px) {
    width: 80%;
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

  @media(min-width: 768px) {
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

  @media(min-width: 768px) {
    width: 84px;
    height: 84px;
  }
`;

export const Print = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  width: 3rem;
  height: 3rem;
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

  @media(min-width: 768px) {
    width: 84px;
    height: 84px;
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

  .compose {
    font-size: 20px;
    font-weight: 700;
  }

  @media(min-width: 768px) {
    height: 72px;

    .compose {
      font-size: 24px;
    }
  }
`;

export const XPDiv = styled.div`
  width: 18.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(min-width: 768px) {
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

  @media(min-width: 768px) {
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

  @media(min-width: 768px) {
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

  @media(min-width: 768px) {
    width: 80%;
    padding: 0;
    padding-block: 10px;
  }

  @media(min-width: 768px) {
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

  @media(min-width: 768px) {
    width: 150px;

    h2 {
      font-size: 24px;
    }
  }

  @media(min-width: 1024px) {
    width: 200px;
  }

  @media(min-width: 1440px) {
    width: 300px;
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

  @media(min-width: 768px) {
    span {
      font-size: 24px;
    }
    
    p {
      font-size: 24px;
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

  @media(min-width: 768px) {
    height: 320px;
    padding-inline: 100px;
  }

  @media(min-width: 1024px) {
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

  @media(min-width: 768px) {
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

  @media(min-width: 768px) {
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

  @media(min-width: 768px) {
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

  @media(min-width: 768px) {
    width: 280px;

    h2 {
      font-size: 24px;
      margin-bottom: 0.5rem;
    }

    li {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;