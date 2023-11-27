import styled from "styled-components";

export const Container  = styled.div`
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
  padding-top: 16px;
  gap: 8px;

  @media(max-width: 320px) {
    padding-top: 6px;
    gap: 6px;
  }

  @media(min-width: 480px) {
    padding-top: 6px;
    gap: 8px;
  }

  @media(min-width: 1280px) {
    padding-top: 32px;
    gap: 52px;
  }

  @media(min-width: 1920px) {
    padding-top: 32px;
    gap: 120px;
  }
`;

export const MainTop = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
`;

export const ButtonRakingArea = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${props => props.theme["red-200"]};
  border-radius: 8px;
`;

const ButtonRaking = styled.button`
  all: unset;
  width: 100px;
  height: 32px;
  color: ${props => props.theme["gray-700"]};
  background-color: ${props => props.theme.white};
  font-weight: 500;

  @media(min-width: 480px) {
    width: 100px;
    height: 32px;
    padding: 0;
    font-size: 16px;
  }

  @media(min-width: 1280px) {
    width: 150px;
    height: 52px;
    padding: 0;
    font-size: 28px;
  }
`;

export const ButtonNational  = styled(ButtonRaking)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  @media(min-width: 480px) {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`;

export const ButtonUnit  = styled(ButtonRaking)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  @media(min-width: 480px) {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`;

export const DivMobile = styled.div`
  @media (min-width: 480px) {
    display: none;
  }
`;

export const DivDesk = styled.div`
  width: 100%;
  padding-inline: 16px;
  display: none;

  @media (min-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CoinArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  img {
    width: 42px;
  }

  .gold {
    width: 52px;
  }

  @media(max-width: 360px) {
    img {
      width: 36px;
    }

    .gold {
      width: 42px;
    }
  }

  @media(max-width: 320px) {
    img {
      width: 28px;
    }

    .gold {
      width: 32px;
    }
  }
`;

export const Carrousel = styled.div`
  width: 100%;
  height: 120px;

  @media (min-width: 1280px) {
    width: 98%;
    height: 180px;
  }
`;

export const CarrouselInside = styled.div`
  width: 100%;
  height: 100%;
`;

export const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme["gray-400"]};
  background-color: ${props => props.theme["gray-050"]};
  border-radius: 12px;
  position: relative;

  .pNumber {
    width: 32px;
    position: absolute;
    top: 4px;
    left: 6px;
    z-index: 1000;
  }

  @media (min-width: 1280px) {
    border-width: 2px;

    .pNumber {
      width: 52px;
    }
  }
`;

export const PositionInside = styled.div`
  display: flex;
  padding-inline: 0px;
  gap: 10px;
  margin-top: 12px;

  @media (min-width: 1280px) {
    gap: 16px;
    margin-top: 40px;
  }
`;

export const PositionImg = styled.div`
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 8px;
  border: 1px solid ${props => props.theme["red-200"]};
  background-color: ${props => props.theme.white};

  img {
    width: 100%;
  }

  @media (min-width: 1280px) {
    width: 86px;
    height: 86px;
  }
`;

export const DivName = styled.div`
  width: 90px;

  p {
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme["gray-700"]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    color: ${props => props.theme["red-200"]};
    font-size: 22px;
    font-weight: 500;
  }

  @media (min-width: 1280px) {
    width: 150px;

    p {
      font-size: 20px;
    }

    span {
      font-size: 32px;
    }
  }
`;

export const TextArea = styled.div`
  text-align: center;

  h2 {
    font-weight: bold;
    color: ${props => props.theme["red-200"]};
    margin-bottom: 6px;
  }

  p {
    font-weight: 500;
  }

  @media(max-width: 320px) {
    h2 {
      font-size: 20px;
      margin-bottom: 0;
    }

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 480px) {
    h2 {
      font-size: 16px;
      margin-bottom: 4px;
    }

    p {
      font-size: 12px;
    }
  }

  @media(min-width: 1280px) {
    h2 {
      font-size: 52px;
      margin-bottom: 16px;
    }

    p {
      font-size: 32px;
    }
  }

  @media(min-width: 1440px) {
    margin-top: 32px;
  }
`;

export const MainBottom = styled.section`
  width: 100vw;
  height: 330px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${props => props.theme["gray-100"]};

  @media(max-width: 360px) {
    height: 290px;
  }

  @media(max-width: 320px) {
    height: 200px;
  }
`;

export const LevelPosition = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 1rem 1.5rem;
  background-color: ${props => props.$selected ? props.theme["red-100"] : props.theme["gray-100"]};

  p {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${props => props.theme["red-200"]};
    white-space: nowrap;
  }

  span {
    width: 6rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media(max-width: 360px) {
    padding: 8px;
    padding-left: 36px;
  }

  @media(max-width: 320px) {
    gap: 10px;
    padding: 8px;
    padding-left: 32px;
  }

  @media(min-width: 600px) {
    height: 100px;
    padding: 16px 32px;
    padding-left: 180px;
    justify-content: flex-start;
    gap: 20px;

    p {
      font-size: 28px;
    }

    span {
      width: 200px;
      font-size: 28px;
    }
  }
`;

export const AvatarArea = styled.section`
  width: 3rem;
  height: 3rem;
  border: 1px solid ${props => props.theme["red-200"]};
  background-color: ${props => props.theme.white};
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  img {
    width: 46px;
  }

  @media(min-width: 600px) {
    width: 68px;
    height: 64px;

    img {
      width: 56px;
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
    width: 1000px;
    height: 120px;
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
    height: 56px;

    p {
      font-size: 32px;
    }
  }
`;