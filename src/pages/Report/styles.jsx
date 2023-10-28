import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const AvatarArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

export const AvatarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  p {
    font-weight: bold;
    font-size: 1.25rem;
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
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const XP = styled.div`
  width: 100%;
  padding-inline: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  background-color: ${props => props.theme["gray-100"]};
`;

export const XPDiv = styled.div`
  width: 18.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const Stage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
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
`;

export const Details = styled.div`
  width: 100%;
  height: 15rem;
  padding-inline: 2rem;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme["gray-100"]};
  overflow-y: scroll;
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
`;

export const Bar = styled.div`
  width: 2rem;
  height: 4rem;
  background-color: ${props => props.theme.white};
  position: relative;
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
`;