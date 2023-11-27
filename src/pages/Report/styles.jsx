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

  @media(max-width: 320px) {
    gap: 10px;

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 480px) {
    display: none;
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
    width: 38px;
    height: 38px;
  }
`;

export const AvatarInfo2 = styled.div`
  display: none;

  @media (min-width: 480px) {
    width: 200px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    border-radius: 8px;
    box-shadow: 0px 4px 10px 0px #00000033;

    p {
      font-weight: bold;
      font-size: 14px;
    }
  }

  @media (min-width: 1280px) {
    width: 600px;
    height: 86px;
    gap: 1.5rem;
    border-radius: 12px;

    p {
      font-size: 32px;
    }
  }
`;

export const Avatar2 = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid ${props => props.theme.white};
  border-radius: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;

  img {
    width: 28px;
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

  @media(max-width: 320px) {
    height: 36px;

    .compose {
      font-size: 16px;
    }
  }

  @media(min-width: 480px) {
    height: 32px;

    .compose {
      font-size: 16px;
    }
  }

  @media(min-width: 1280px) {
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

  @media(min-width: 480px) {
    padding-top: 16px;
    gap: 10px;
  }
`;

export const Select = styled.div`
  width: 300px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;

  @media(max-width: 320px) {
    width: 250px;
  }

  @media(min-width: 480px) {
    width: 300px;
  }

  @media(min-width: 1280px) {
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

  @media(max-width: 320px) {
    height: 36px;
  }

  @media(min-width: 480px) {
    height: 32px;
    gap: 18px;

    p {
      font-weight: 500;
    }

    img {
      width: 16px;
    }
  }

  @media(min-width: 1280px) {
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

  @media(max-width: 320px) {
    width: 250px;
    padding: 10px;
  }

  @media(min-width: 480px) {
    width: 300px;
    padding: 12px;
  }

  @media(min-width: 1280px) {
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

  @media(min-width: 480px) {
    font-size: 16px;
  }

  @media(min-width: 1280px) {
    font-size: 28px;
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