import styled from "styled-components";

export const Container = styled.div`
  width: 3.25rem;
  height: 5.75rem;
  position: relative;
  margin-bottom: -1.75rem;
  z-index: 1;

  @media (min-width: 768px) {
    width: 4rem;
    height: 8rem;
    margin-bottom: -2.75rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 3.25rem;
      height: 5.75rem;
      margin-bottom: -1.75rem;
    }
  }

  @media (min-width: 1280px) {
    width: 4.5rem;
    height: 8.125rem;
    margin-bottom: -2.5rem;
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