import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 300px;
  margin-top: -100px;
  position: relative;
  z-index: 10;

  @media (max-width: 320px) {
    width: 54px;
    height: 96px;
  }

  @media (min-width: 1280px) {
    width: 300px;
    height: 800px;
    margin-top: -160px;
  }

  @media (min-width: 1440px) {
    height: 900px;
    margin-top: -950px;
  }

  @media (min-width: 1920px) {
    width: 300px;
    height: 1000px;
    margin-top: -1000px;
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

export const Headset = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 16;

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

export const Pernas = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 12;

  img {
    width: 100%;
    height: 100%;
  }
`;
