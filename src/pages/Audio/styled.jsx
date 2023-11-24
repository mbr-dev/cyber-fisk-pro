import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 32px;
  gap: 16px;

  @media (max-width: 320px) {
    padding-top: 12px;
  }

  @media (min-width: 1024px) {
    flex: 1;
    padding-top: 0;
    flex-direction: row;
    gap: 64px;
  }
`;

export const Left = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 18px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 320px) {
    width: 150px;
    height: 150px;
  }

  @media (min-width: 768px) {
    width: 450px;
    height: 450px;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media(max-width: 320px) {
    gap: 18px;
  }
`;

export const Title = styled.section`
  p {
    font-weight: normal;
    font-size: 20px;
  }

  @media (min-width: 768px) {
    p {
      font-size: 28px;
    }
  }
`;

export const AreaAudio = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media(max-width: 320px) {
    width: 250px;
    gap: 18px;
  }

  @media(min-width: 768px) {
    width: 450px;
    gap: 24px;
  }

  @media (min-width: 1024px) {
    width: 550px;
  }
`;

export const TimeAudio = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (min-width: 768px) {
    gap: 8px;
  }
`;

export const Bar = styled.div`
  width: 300px;
  height: 5px;
  border-radius: 6px;
  background-color: ${props => props.theme["gray-800"]};

  @media (min-width: 768px) {
    height: 7px;
  }
`;

export const Carrega = styled.div`
  height: 100%;
  position: relative;
  background-color: ${props => props.theme["gray-700"]};
`;

export const Bolinha = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  position: absolute;
  top: -2px;
  right: 0;
  background-color: ${props => props.theme["gray-700"]};

  @media (min-width: 768px) {
    width: 14px;
    height: 14px;
    top: -3px;
  }
`;

export const TimeArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 14px;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    p {
      font-size: 24px;
    }
  }
`;

export const ButtonsArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    all: unset;
    transition: all ease 0.3s;
    cursor: pointer;

    &:hover {
      scale: 1.1
    }
  }

  .playBtn {
    width: 64px;
    height: 64px;
    
  }

  .changeBtn {
    width: 36px;
    height: 36px;
  }

  .redBtn {
    width: 32px;
    height: 32px;
  }

  @media(min-width: 768px) {
      .playBtn {
      width: 84px;
      height: 84px;
    }

    .changeBtn {
      width: 56px;
      height: 56px;
    }

    .redBtn {
      width: 42px;
      height: 42px;
    }
  }
`;

export const ButtonsVArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    all: unset;
    transition: all ease 0.3s;
    cursor: pointer;

    img {
      width: 16px;
      height: 16px;
      transition: all ease 0.3s;
    } 

    &:hover {
      scale: 1.1
    }
  }

  @media(min-width: 768px) {
    button {
      img {
        width: 28px;
        height: 28px;
      }
    }
  }
`;

export const BarVolume = styled.div`
  width: 250px;
  height: 24px;
  display: flex;
  justify-content: space-between;

  .moreV {
    background-color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 320px) {
    width: 200px;
  }

  @media(min-width: 768px) {
    width: 350px;
    height: 28px;
  }

  @media (min-width: 1024px) {
    width: 450px;
    height: 32px;
  }
`;

export const Div = styled.div`
  width: 10px;
  height: 100%;
  background-color: ${props => props.theme["gray-800"]};

  @media(max-width: 320px) {
    width: 8px;
  }

  @media(min-width: 768px) {
    width: 12px;
  }

  @media (min-width: 1024px) {
    width: 18px;
  }
`;