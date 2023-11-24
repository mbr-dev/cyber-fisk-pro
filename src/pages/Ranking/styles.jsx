import styled from "styled-components";

export const Container  = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main  = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;

  @media(min-width: 1024px) {
    padding-top: 28px;
    gap: 24px;
  }

  @media(min-width: 1440px) {
    padding-top: 32px;
    gap: 36px;
  }

  @media(min-width: 2560px) {
    padding-top: 36px;
    gap: 72px;
  }
`;

export const MainTop  = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  padding-bottom: 12px;
`;

export const ButtonRakingArea  = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${props => props.theme["red-200"]};
  border-radius: 8px;
`;

const ButtonRaking  = styled.button`
  all: unset;
  width: 100px;
  height: 32px;
  color: ${props => props.$selected ? props.theme.white : props.theme.black};
  background-color: ${props => props.$selected ? props.theme["red-200"] : props.theme.white};
  font-weight: 500;

  @media(min-width: 600px) {
    width: 150px;
    height: 52px;
    padding: 0;
    font-size: 28px;
  }
`;

export const ButtonNational  = styled(ButtonRaking)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const ButtonUnit  = styled(ButtonRaking)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const CoinArea  = styled.div`
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

  @media(max-width: 360px) {
    img {
      width: 28px;
    }

    .gold {
      width: 32px;
    }
  }
`;

export const Carrousel  = styled.div`
  width: 96%;
  height: 250px;

  @media(min-width: 1920px) {
    width: 60%;
  }
`;

export const CarrouselInside  = styled.div`
  width: 100%;
  height: 100%;
  padding-block: 28px;
  padding-left: 24px;
`;

export const Position  = styled.div`
  width: 100px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["gray-050"]};
  border-radius: 18px;
  box-shadow: 6px 8px 20px 0px #00000040;
  position: relative;

  .pNumber {
    width: 50px;
    position: absolute;
    top: 8px;
    left: 16px;
    z-index: 1000;
  }
`;

export const PositionInside  = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 32px;
  gap: 32px;
`;

export const PositionImg  = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 12px;
  border: 2px solid ${props => props.theme["red-200"]};
  background-color: ${props => props.theme.white};

  img {
    width: 150px;
    padding-bottom: 5px;
  }
`;

export const DivName  = styled.div`
  p {
    width: 120px;
    font-size: 22px;
    font-weight: 500;
    color: ${props => props.theme["gray-700"]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    color: ${props => props.theme["red-200"]};
    font-size: 28px;
    font-weight: 500;
  }
`;

export const TextArea  = styled.div`
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
      font-size: 22px;
    }

    p {
      font-size: 16px;
    }
  }

  @media(min-width: 600px) {
    h2 {
      font-size: 42px;
      margin-bottom: 12px;
    }

    p {
      font-size: 32px;
    }
  }
`;

export const MainBottom  = styled.section`
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${props => props.theme["gray-100"]};

  @media(max-width: 360px) {
    height: 300px;
  }

  @media(max-width: 320px) {
    height: 200px;
  }

  @media(min-width: 600px) {
    height: 500px;
    gap: 12px;
    align-items: center;
  }
`;

export const LevelPosition  = styled.section`
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

export const AvatarArea  = styled.section`
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