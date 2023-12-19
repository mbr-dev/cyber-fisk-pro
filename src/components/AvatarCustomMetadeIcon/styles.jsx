import styled from "styled-components";

export const Container = styled.div`
  width: 3.25rem;
  height: 5.75rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    width: 4rem;
    height: 8rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 3.25rem;
      height: 5.75rem;
    }
  }

  @media (min-width: 1024px) {
    width: 4.5rem;
    height: 8.125rem;
  }

  @media (min-width: 1920px) {
    width: 100px;
    height: 232px;
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