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
  padding-top: 2rem;
  gap: 1rem;

 /*  audio {
    display: none;
  } */

  @media (max-width: 320px) {
    padding-top: 0.75rem;
  }

  @media (min-width: 768px) {
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      flex: 1;
      padding-top: 0;
      flex-direction: row;
      gap: 1.5rem;
    }
  }

  @media (min-width: 1280px) {
    gap: 4rem;
  }
`;

export const Left = styled.div`
  width: 13.75rem;
  height: 13.75rem;
  border-radius: 18px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 320px) {
    width: 9.375rem;
    height: 9.375rem;
  }

  @media (min-width: 768px) {
    width: 18rem;
    height: 18rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 13.125rem;
      height: 13.125rem;
    }
  }

  @media (min-width: 1280px) {
    width: 28.125rem;
    height: 28.125rem;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media(max-width: 320px) {
    gap: 1.125rem;
  }

  @media(min-width: 768px) {
    gap: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.25rem;
    }
  }

  @media(min-width: 1280px) {
    gap: 1.5rem;
  }
`;

export const Title = styled.section`
  p {
    font-weight: normal;
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.75rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      p {
        font-size: 1.125rem;
      }
    }
  }

  @media (min-width: 1280px) {
    p {
      font-size: 1.75rem;
    }
  }
`;

export const AreaAudio = styled.div`
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media(max-width: 320px) {
    width: 250px;
    gap: 1.125rem;
  }

  @media (min-width: 768px) {
    width: 25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 1.5rem
    }
  }

  @media (min-width: 1280px) {
    width: 34.375rem;
  }
`;

export const TimeAudio = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 1280px) {
    gap: 0.5rem;
  }
`;

export const Bar = styled.div`
  width: 18.75rem;
  height: 0.3125rem;
  border-radius: 6px;
  background-color: ${props => props.theme["gray-100"]};
 
  @media (min-width: 600px) {
    width: 100%;
  }

  @media (min-width: 1280px) {
    height: 0.4375rem;
  }
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
  right: 0;
  background-color: ${props => props.theme["gray-700"]};

  @media (min-width: 1280px) {
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
    font-size: 0.875rem;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.5rem
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 480px) {
      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1280px) {
    p {
      font-size: 1.5rem
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

  .hasBorder {
    border-color: ${props => props.theme["red-200"]};
  }

  .playBtn {
    width: 4rem;
    height: 4rem;
    
  }

  .changeBtn {
    width: 2.25rem;
    height: 2.25rem;
  }

  .redBtn {
    width: 2rem;
    height: 2rem;
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

  @media(min-width: 1280px) {
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
      width: 1rem;
      height: 1rem;
      transition: all ease 0.3s;
    } 

    &:hover {
      scale: 1.1
    }
  }

  @media(min-width: 768px) {
    button {
      img {
        width: 1.75rem;
        height: 1.75rem;
      }
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      button {
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }

  @media(min-width: 1280px) {
    button {
      img {
        width: 1.75rem;
        height: 1.75rem;
      }
    }
  }
`;

export const BarVolume = styled.div`
  width: 15.625rem;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;

  .moreV {
    background-color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 320px) {
    width: 12.5;
  }

  @media (min-width: 768px) {
    width: 20rem;
    height: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 20rem;
      height: 1.5rem;
    }
  }

  @media (min-width: 1280px) {
    width: 28.125rem;
    height: 2rem;
  }
`;

export const Div = styled.div`
  width: 0.625rem;
  height: 100%;
  background-color: ${props => props.theme["gray-800"]};

  @media(max-width: 320px) {
    width: 0.5rem;
  }

  @media (min-width: 1280px) {
    width: 1.125rem;
  }
`;