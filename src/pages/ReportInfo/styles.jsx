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

  @media(min-width: 768px) {
    justify-content: flex-start;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 50%;
      height: 12.5rem;
      justify-content: flex-start;
    }
  }

  @media(min-width: 1280px) {
    height: 31.25rem;
  }

  @media(min-width: 1440px) {
    height: 40.625rem;
  }
`;

export const AvatarArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  @media(max-width: 320px) {
    padding: 0.5rem 1.25rem;
  }

  @media(min-width: 768px) {
    width: 80%;
    padding: 1rem 2rem;
    justify-content: space-between;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 100%;
      padding: 0.5rem;
      justify-content: center;
      gap: 3.375rem;
    }
  }
  
  @media(min-width: 1280px) {
    width: 80%;
    padding: 1rem 2rem;
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
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    gap: 1.25rem;

    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.625rem;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1280px) {
    gap: 1.25rem;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme["red-200"]};
  overflow: hidden;

  @media (min-width: 768px) {
    width: 4.5rem;
    height: 4.5rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 3rem;
      height: 3rem;
    }
  }

  @media (min-width: 1280px) {
    width: 4.5rem;
    height: 4.5rem;
  }

  @media (min-width: 1440px) {
    width: 6.25rem;
    height: 6.25rem;
  }
`;

export const Print = styled.button`
  all: unset;
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 6px;
  transition: all ease 0.2s;
  cursor: pointer;

  p {
    font-size: 0.675rem;
    text-align: center;
  }

  &:hover {
    scale: 1.05;
  }

  img {
    width: 50%;
  }

  @media(max-width: 320px) {
    width: 1.25rem;
    height: 1.25rem;

    p {
      font-size: 0.5rem;
    }

    img {
      width: 16px;
    }
  }

  @media(min-width: 768px) {
    width: 5.25rem;
    height: 5.25rem;
    gap: 0.375rem;

    p {
      font-size: 0.75rem;
    }

    img {
      width: 36px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 2rem;
      height: 2rem;
      gap: 0;

      p {
        font-size: 0.375rem;
      }

      img {
        width: 12px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 5.25rem;
    height: 5.25rem;
    gap: 0.375rem;

    p {
      font-size: 0.75rem;
    }

    img {
      width: 36px;
    }
  }
`;

export const XP = styled.div`
  width: 100%;
  height: 3.75rem;
  padding-inline: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  background-color: ${props => props.theme["gray-100"]};

  @media(max-width: 320px) {
    height: 2.625rem;
  }

  @media(min-width: 768px) {
    height: 4.5rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 3.75rem;
    }
  }

  @media(min-width: 1280px) {
    height: 4.5rem;
  }
`;

export const XPDiv = styled.div`
  width: 18.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 320px) {
    width: 15.625rem;
  }

  @media (min-width: 768px) {
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
    font-size: 1rem;
    color: ${props => props.theme["red-200"]};
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme["gray-700"]};
    font-weight: 500;
  }

  @media(max-width: 320px) {
    span {
      font-size: 0.875rem;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    span {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      span {
        font-size: 0.75rem;
      }
      
      p {
        font-size: 0.75rem;
      }
    }
  }

  @media(min-width: 1280px) {
    span {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 1.5rem;
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
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      p {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1280px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

export const Stage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  @media(max-width: 320px) {
    padding: 0.25rem 0.625rem;
  }

  @media(min-width: 768px) {
    padding: 0 4rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 80%;
      padding: 0;
      padding-block: 0.375rem;
    }
  }

  @media(min-width: 1280px) {
    padding-block: 2rem;
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
      font-size: 0.625rem;
    }
  }

  @media(min-width: 768px) {
    width: 15.625rem;
    height: 11.25rem;

    h2 {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 7.5rem;
      height: 5.375rem;

      h2 {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 18.75rem;
    height: 15.625rem;

    h2 {
      font-size: 1.5rem;
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
      font-size: 1rem;
    }
    
    p {
      font-size: 0.75rem;
    }
  }

  @media(min-width: 768px) {
    span {
      font-size: 1.75rem;
    }
    
    p {
      font-size: 1.75rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      span {
        font-size: 1rem;
      }
      
      p {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1280px) {
    span {
      font-size: 1.75rem;
    }
    
    p {
      font-size: 1.75rem;
    }
  }
`;

export const Details = styled.div`
  width: 100%;
  height: 13.75rem;
  padding-inline: 2rem;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme["gray-100"]};
  overflow-y: scroll;

  @media(max-width: 320px) {
    height: 10rem;
    padding-inline: 1rem;
    padding-top: 0.375rem;
  }

  @media(min-width: 768px) {
    height: 20rem;
    margin-top: 2rem;
    padding-inline: 7rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 50%;
      height: 12.50rem;
      margin-top: 0rem;
      padding-inline: 2.25rem;
    }
  }

  @media(min-width: 1280px) {
    width: 50%;
    height: 31.25rem;
    padding-inline: 3.25rem;
  }

  @media(min-width: 1440px) {
    height: 40.625rem;
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
      padding: 0.1875rem 0.25rem;
      font-size: 0.625rem;
    }
  }

  @media(min-width: 768px) {
    p {
      padding: 0.5rem 0.75rem;
      font-size: 1rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      p {
        padding: 0.25rem 0.625rem;
        font-size: 0.75rem;
      }
    }
  }

  @media(min-width: 1280px) {
    p {
      padding: 0.5rem 0.75rem;
      font-size: 1rem;
    }
  }
`;

export const Bar = styled.div`
  width: 2rem;
  height: 4rem;
  background-color: ${props => props.theme.white};
  position: relative;

  @media(max-width: 320px) {
    width: 2.25rem;
    height: 3.25rem;
  }

  @media(min-width: 768px) {
    width: 4.5rem;
    height: 6.5rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 3.25rem;
      height: 5rem;
    }
  }

  @media(min-width: 1280px) {
    width: 4rem;
    height: 6.25rem;
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
      font-size: 0.75rem;
    }
  }

  @media(min-width: 768px) {
    span {
      font-size: 1rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      span {
        font-size: 0.75rem;
      }
    }
  }

  @media(min-width: 1280px) {
    span {
      font-size: 1rem;
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
    width: 11.25rem;

    h2 {
      font-size: 0.875rem;
    }

    li {
      font-size: 0.75rem;
    }
  }

  @media(min-width: 768px) {
    width: 23rem;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    li {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 12.50rem;

      h2 {
        font-size: 1rem;
        margin-bottom: 0.375rem
      }

      li {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 23rem;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    li {
      font-size: 1.5rem;
    }
  }
`;