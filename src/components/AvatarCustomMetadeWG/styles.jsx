import styled from "styled-components";

export const Container = styled.div`
  width: 11.25rem;
  height: 21.875rem;
  position: relative;
  z-index: 10;

  @media (max-width: 320px) {
    width: 6.25rem;
    height: 13.75rem;
  }

  @media (min-width: 768px) {
    width: 15.625rem;
    height: 34.375rem;
    margin-top: -4rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 7.5rem;
      height: 17.5rem;
      margin-top: -1.25rem;
    }
  }

  @media (min-width: 1280px) {
    width: 18.75rem;
    height: 43.75rem;
  }

  @media (min-width: 1440px) {
    height: 50rem;
    margin-top: -5rem;
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
  z-index: 15;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.div`
  width: 11.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding-inline: 6px;
  background-color: ${props => props.theme["red-200"]};
  position: absolute;
  z-index: 20;
  bottom: 6.875rem;
  
  p {
    font-size: 1.125rem;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${props => props.theme.white};
  }

  @media (max-width: 320px) {
    width: 6.25rem;
    height: 2rem;
    bottom: 3.75rem;

    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    width: 15.625rem;
    height: 3rem;
    bottom: 11.5rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 7.5rem;
      height: 2rem;
      bottom: 5.5rem;

      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1280px) {
    width: 18.75rem;
    height: 3.25rem;
    bottom: 15.625rem;

    p {
      font-size: 2rem;
    }
  }

  @media (min-width: 1440px) {
    height: 4rem;
    bottom: 17rem;
  }
`;