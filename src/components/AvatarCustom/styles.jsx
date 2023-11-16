import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 192px;
  position: relative;
  z-index: 10;

  @media (max-width: 320px) {
    width: 54px;
    height: 96px;
  }

  @media (min-width: 1024px) {
    width: 180px;
    height: 380px;
  }

  @media (min-width: 1440px) {
    width: 180px;
    height: 400px;
  }
`;

export const Cabeca = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Bracos = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Face = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Pernas = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Tronco = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
  }
`;