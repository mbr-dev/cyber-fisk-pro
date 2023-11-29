import styled from "styled-components";

export const Container = styled.div`
  width: 52px;
  height: 92px;
  position: relative;
  margin-bottom: -28px;
  z-index: 1;

  @media (min-width: 1280px) {
    width: 72px;
    height: 130px;
    margin-bottom: -46px;
  }

  @media (min-width: 1440px) {
    width: 100px;
    height: 180px;
    margin-bottom: -66px;
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