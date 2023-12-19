import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  gap: 16px;

  @media (max-width: 320px) {
    padding-top: 8px;
    gap: 8px;
  }

  @media (min-width: 768px) {
    padding-top: 24px;
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 550px;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 8px;
      gap: 0px;
    }
  }

  @media (min-width: 1024px) {
    width: 800px;
    padding-top: 64px;
  }

  @media (min-width: 1366px) {
    width: 1100px;
    height: 100%;
    align-items: center;
  }
`;

export const Left = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 18px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 320px) {
    width: 120px;
    height: 120px;
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 180px;
      height: 180px;
    }
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1366px) {
    width: 400px;
    height: 400px;
  }
`;

export const Right = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  
  @media(max-width: 320px) {
    width: 220px;
    gap: 14px;
  }

  @media(min-width: 768px) {
    width: 500px;
    gap: 20px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 300px;
      gap: 10px;
    }
  }

  @media(min-width: 1024px) {
    width: 420px;
    gap: 20px;
  }

  @media(min-width: 1366px) {
    width: 600px;
  }
`;

export const Title = styled.section`
  p {
    font-weight: normal;
    font-size: 16px;
  }

  @media (max-width: 320px) {
    p {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      p {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 24px;
    }
  }

  @media (min-width: 1366px) {
    p {
      font-size: 32px;
    }
  }
`;

export const AreaAudio = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 14px;
  }

  @media (min-width: 768px) {
    gap: 18px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 8px
    }
  }

  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

export const TimeAudio = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1024px) {
    gap: 14px;
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 0.3125rem;
  border-radius: 6px;
  background-color: ${props => props.theme["gray-100"]};
`;

export const Carrega = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${props => props.theme["gray-700"]};
`;

export const Bolinha = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 9999px;
  position: absolute;
  top: -2px;
  right: -10px;
  background-color: ${props => props.theme["gray-700"]};

  @media (min-width: 1024px) {
    width: 14px;
    height: 14px;
    top: -4px;
    right: -12px;
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
      font-size: 24px
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      p {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 1024px) {
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
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 2px solid transparent;
    transition: all ease 0.3s;
    cursor: pointer;

    &:hover {
      scale: 1.1
    }
  }

  .playBtn {
    width: 4rem;
    height: 4rem;
    background-color: ${props => props.theme["red-200"]};
    border-radius: 6px;
    box-shadow: 0px 4px 10px 0px #00000033;
    
    img {
      width: 36px;
    }
  }

  .changeBtn {
    width: 2.25rem;
    height: 2.25rem;
  }

  .redBtn {
    width: 2rem;
    height: 2rem;
  }

  @media(max-width: 320px) {
    .playBtn {
      width: 38px;
      height: 38px;
    }

    .changeBtn {
      width: 32px;
      height: 32px;
    }

    .redBtn {
      width: 28px;
      height: 28px;
    }
  }

  @media(min-width: 768px) {
    .playBtn {
      width: 5.25rem;
      height: 5.25rem;
    }

    .changeBtn {
      width: 3.5rem;
      height: 3.5rem;
    }

    .redBtn {
      width: 2.625rem;
      height: 2.625rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      .playBtn {
        width: 3.375rem;
        height: 3.375rem;
      }

      .changeBtn {
        width: 2rem;
        height: 2rem;
      }

      .redBtn {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  @media(min-width: 1024px) {
    .playBtn {
      width: 5rem;
      height: 5rem;
    }

    .changeBtn {
      width: 3rem;
      height: 3rem;
    }

    .redBtn {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  @media(min-width: 1366px) {
    .playBtn {
      width: 5.25rem;
      height: 5.25rem;
    }

    .changeBtn {
      width: 3.5rem;
      height: 3.5rem;
    }

    .redBtn {
      width: 2.625rem;
      height: 2.625rem;
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
      width: 28px;
      height: 28px;
      transition: all ease 0.3s;
    } 

    &:hover {
      scale: 1.1;
    }
  }

  @media(max-width: 320px) {
    button {
      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  @media(min-width: 768px) {
    button {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      button {
        img {
          width: 28px;
          height: 28px;
        }
      }
    }
  }

  @media(min-width: 1024px) {
    button {
      img {
        width: 42px;
        height: 42px;
      }
    }
  }
`;

export const BarVolume = styled.div`
  width: 232px;
  height: 28px;
  display: flex;
  justify-content: space-between;

  .moreV {
    background-color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 320px) {
    width: 164px;
  }

  @media (min-width: 768px) {
    width: 380px;
    height: 46px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 232px;
      height: 26px;
    }
  }

  @media (min-width: 1024px) {
    width: 320px;
    height: 46px;
  }

  @media (min-width: 1366px) {
    width: 480px;
  }
`;

export const Div = styled.div`
  width: 8px;
  height: 100%;
  background-color: ${props => props.theme["gray-800"]};

  @media(max-width: 320px) {
    width: 5px;
  }

  
  @media (min-width: 768px) {
    width: 12px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 8px;
    }
  }

  @media (min-width: 1024px) {
    width: 10px;
  }

  @media (min-width: 1366px) {
    width: 18px;
  }
`;