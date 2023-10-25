import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const XP = styled.div`
  width: 100%;
  padding-inline: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
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

  p {
    color: ${props => props.theme["blue-100"]};
    font-size: 1.25rem;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Stage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  gap: 0.5rem;
`;

export const SLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  h2 {
    font-size: 1rem;
  }

  div {
    width: 80px;
    height:80px;
    border-radius: 9999px;
    background-color: red;
  }
`;

export const SRight = styled.div`
  flex: 1;
  text-align: center;
  span {
    color: ${props => props.theme["red-200"]};
  }

  p {
    color: ${props => props.theme["gray-700"]};
    font-weight: 500;
  }
`;

export const Details = styled.div`
  width: 100%;
  padding-inline: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  background-color: ${props => props.theme["gray-100"]};
`;

export const DDiv = styled.div``;