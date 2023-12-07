import styled from "styled-components";

export const Container = styled.div`
  width: 9.375rem;
  height: 18.75rem;
  margin-top: -6.25rem;
  position: relative;
  z-index: 10;

  @media (max-width: 320px) {
    width: 3.375rem;
    height: 6rem;
  }

  @media (min-width: 768px) {
    width: 12.5rem;
    height: 25rem;
    margin-top: -3.125rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 9.375rem;
      height: 18.75rem;
      margin-top: -18rem;
    }
  }

  @media (min-width: 1280px) {
    width: 18.75rem;
    height: 50rem;
    margin-top: -50em;
  }

  @media (min-width: 1440px) {
    height: 53.125rem;
    margin-top: -52rem;
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

export const Name = styled.div`
  width: 9.375rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding-inline: 6px;
  background-color: ${props => props.theme["red-200"]};
  position: absolute;
  z-index: 20;
  bottom: 6px;
  
  span {
    font-size: 1.25rem;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${props => props.theme.white};
  }

  @media (min-width: 1280px) {
    width: 18.75rem;
    height: 4.5rem;
    bottom: 1.75rem;
    padding-inline: 1rem;

    span {
      font-size: 2rem;
    }
  }

  @media (min-width: 1440px) {
    bottom: 1.25rem;
  }
`;
