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
`;

export const AvatarArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
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

export const AvatarInfo2 = styled.div`
  width: 600px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  border-radius: 12px;
  box-shadow: 0px 4px 10px 0px #00000033;

  p {
    font-weight: bold;
    font-size: 32px;
  }
`;

export const Avatar2 = styled.div`
  width: 58px;
  height:58px;
  border: 1px solid ${props => props.theme.white};
  border-radius: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;

  img {
    width: 50px;
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

export const XP = styled.div`
  width: 100%;
  height: 58px;
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

export const AreaSelect = styled.div`
  flex: 1;
  width: 100%;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const SelectIdioma = styled.div`
  width: 300px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;

  @media(min-width: 768px) {
    width: 500px;
  }

  @media(min-width: 1024px) {
    width: 800px;
  }
`;

export const SelectTitle = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
  border: 2px solid ${props => props.theme["gray-700"]};
  border-radius: 8px;
  gap: 10px;
  background-color: ${props => props.theme["gray-200"]};
  color: ${props => props.theme["gray-700"]};

  p {
    flex: 1;
    font-size: 18px;
  }

  img {
    width: 18px;
  }

  @media(min-width: 600px) {
    height: 60px;
    gap: 18px;

    p {
      font-size: 22px;
      font-weight: 500;
    }

    img {
      width: 36px;
    }
  }

  @media(min-width: 1024px) {
    height: 64px;
    gap: 20px;

    p {
      font-size: 24px;
    }

    img {
      width: 28px;
    }
  }
`;

export const SelectUl = styled.ul`
  width: 300px;
  position: absolute;
  z-index: 100;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-inline: 18px;
  gap: 12px;
  background-color: ${props => props.theme["gray-200"]};

  @media(min-width: 768px) {
    width: 500px;
    padding: 16px;
  }

  @media(min-width: 1024px) {
    width: 800px;
    padding-inline: 44px;
    gap: 20px;  
  }
`;

export const SelectLi = styled.li`
  width: 100%;
  list-style: none;
  color: ${props => props.theme["gray-700"]};
  font-weight: 500;

  &:hover {
    background-color: ${props => props.theme["gray-400"]};
  }

  @media(min-width: 768px) {
    font-size: 24px;
  }

  @media(min-width: 1024px) {
    font-size: 28px;
  }
`;