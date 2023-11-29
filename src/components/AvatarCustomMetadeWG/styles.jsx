import styled from "styled-components";

export const Container = styled.div`
  width: 180px;
  height: 350px;
  position: relative;
  z-index: 10;

  @media (max-width: 320px) {
    width: 100px;
    height: 220px;
  }

  @media (min-width: 480px) {
    width: 120px;
    height: 280px;
    margin-top: -20px;
  }

  @media (min-width: 1280px) {
    width: 300px;
    height: 700px;
    margin-top: -20px;
  }

  @media (min-width: 1440px) {
    height: 800px;
    margin-top: -20px;
  }
`;

export const Antena = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 15;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Cabeca = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 13;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Face = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 14;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Oculos = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 17;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Tronco = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 11;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Bracos = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.div`
  width: 180px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding-inline: 6px;
  background-color: ${props => props.theme["red-200"]};
  position: absolute;
  z-index: 20;
  bottom: 110px;
  
  p {
    font-size: 18px;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${props => props.theme.white};
  }

  @media (max-width: 320px) {
    width: 100px;
    height: 32px;
    bottom: 60px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 480px) {
    width: 120px;
    bottom: 82px;
  }

  @media (min-width: 1280px) {
    width: 300px;
    height: 52px;
    bottom: 250px;

    p {
      font-size: 32px;
    }
  }

  @media (min-width: 1440px) {
    bottom: 282px;
  }
`;