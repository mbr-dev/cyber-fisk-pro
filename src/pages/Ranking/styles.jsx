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
  justify-content: center;
  gap: 0.5rem;

  @media(max-width: 320px) {
    gap: 0.625rem;
  }

  @media(min-width: 768px) {
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.5rem
    }
  }

  @media(min-width: 1024px) {
    gap: 3.25rem;
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

  @media(max-width: 320px) {
    gap: 8px;
  }
`;

export const ButtonRakingArea = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${props => props.theme["red-200"]};
  border-radius: 8px;
`;

const ButtonRaking = styled.button`
  all: unset;
  width: 6.25rem;
  height: 2rem;
  color: ${props => props.theme["gray-700"]};
  background-color: ${props => props.theme.white};
  font-weight: 500;

  @media(min-width: 768px) {
    width: 9.375rem;
    height: 3.25rem;
    font-size: 1.75rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 100px;
      height: 2rem;
      font-size: 1rem;
    }
  }

  @media(min-width: 1024px) {
    width: 9.375rem;
    height: 3.25rem;
    font-size: 1.75rem;
  }
`;

export const ButtonNational  = styled(ButtonRaking)`
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      border-top-left-radius: 0.375rem;
      border-bottom-left-radius: 0.375rem;
    }
  }
`;

export const ButtonUnit  = styled(ButtonRaking)`
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      border-top-left-radius: 0.375rem;
      border-bottom-left-radius: 0.375rem;
    }
  }
`;

export const DivMobile = styled.div`
 @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: none;
    }
  }
`;

export const DivDesk = styled.div`
  display: none;
  
  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 100%;
      display: flex;
      padding-inline: 16px;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 1024px) {
    padding-inline: 32px;
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

  @media(min-width: 768px) {
    img {
      width: 48px;
    }

    .gold {
      width: 64px;
    }
  }
`;

export const Carrousel = styled.div`
  width: 100%;
  height: 132px;

  @media (min-width: 1024px) {
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
  position: relative;

  .pNumber {
    width: 32px;
    position: absolute;
    top: 0.5rem;
    left: 0;
    z-index: 1000;
  }

  .positionOne {
    background-color: ${props => props.theme["red-200"]};
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      .numberPosition {
        position: absolute;
        font-size: 1.25rem;
        top: 0.875rem;
        left: 0.625rem;
        z-index: 1001;
      }
    }
  }

  @media (min-width: 1024px) {
    .pNumber {
      width: 40px;
    }

    .numberPosition {
      font-size: 1.5rem;
      top: 1rem;
      left: 0.875rem;
    }
  }

  @media (min-width: 1366px) {
    .pNumber {
      left: 6px;
    }

    .numberPosition {
      font-size: 1.5rem;
      top: 1rem;
      left: 20px;
    }
  }

  @media (min-width: 1920px) {
    .pNumber {
      left: 68px;
    }

    .numberPosition {
      top: 16px;
      left: 82px;
    }
  }
`;

export const PositionCard = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 6px 8px 12px 0px #00000040;
  background-color: #F4F4F4;

  @media (min-width: 1024px) {
    padding: 1.25rem;
    border-radius: 12px;
  }

  @media (min-width: 1920px) {
    padding: 1.75rem;
  }
`;

export const PositionInside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 0px;
  gap: 10px;

  .positionOnep {
    color: ${props => props.theme.white};
  }

  @media (min-width: 1024px) {
    gap: 16px;
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

  @media (min-width: 1024px) {
    width: 150px;

    p {
      font-size: 24px;
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
    margin-bottom: 0.375rem;
  }

  p {
    font-weight: 500;
  }

  @media(max-width: 320px) {
    h2 {
      font-size: 1.25rem;
      margin-bottom: 0;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    h2 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.75rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      h2 {
        font-size: 1rem;
        margin-bottom: 0.25rem;
      }

      p {
        font-size: 0.75rem;
      }
    }
  }

  @media(min-width: 1024px) {
    h2 {
      font-size: 3.25rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 2rem;
    }
  }

  @media(min-width: 1440px) {
    margin-top: 2rem;
  }
`;

export const MainBottom = styled.section`
  width: 100vw;
  height: 350px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${props => props.theme["gray-100"]};

  @media(max-width: 320px) {
    height: 200px;
  }

  @media(min-width: 768px) {
    height: 450px;
  }
`;

export const LevelPosition = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${props => props.$selected ? props.theme["red-100"] : props.theme["gray-100"]};

  p {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${props => props.theme["red-200"]};
    text-align: left;
    white-space: nowrap;
  }

  .pXp {
    width: 5rem;
  }

  span {
    width: 8rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media(max-width: 320px) {
    padding: 0.5rem 1.5rem;
  }

  @media(min-width: 768px) {
    padding: 1.5rem 3rem;

    p {
      font-size: 2rem;
    }

    span {
      width: 12rem;
      font-size: 1.5rem;
    }
  }
`;

export const AvatarArea = styled.section`
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
    width: 4rem;
    height: 4rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  @media (min-width: 1024px) {
    width: 4rem;
    height: 4rem;
    border-width: 2px;
    border-radius: 12px;
  }
`;