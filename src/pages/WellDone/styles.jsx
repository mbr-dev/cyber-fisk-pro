import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
`;

export const Top = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 0 16px;
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
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: -32px;
  
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
`;

export const IconAvatar = styled.div`
  width: 50px;
  height: 50px;
  margin-left: -24px;
  background-color: ${props => props.theme.white};
  border-radius: 6px;
  border: 2px solid ${props => props.theme["red-200"]};

  img {
    width: 100%;
  }
`;


export const Text = styled.div`
  width: 280px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["gray-700"]};
  border-radius: 6px;
  opacity: 0.5;
`;