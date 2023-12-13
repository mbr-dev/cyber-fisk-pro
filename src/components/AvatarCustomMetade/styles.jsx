import styled from "styled-components";

export const Container = styled.div`
  width: 7.5rem;
  height: 12.5rem;
  position: relative;
  margin-top: -2.625rem;
  z-index: 10;

  @media (max-width: 320px) {
    width: 6.25rem;
    height: 9.375rem;
    margin-top: -2.25rem;
  }

  @media (min-width: 768px) {
    width: 8.25rem;
    height: 13.75rem;
    margin-top: -2.75rem;
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
  width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding-inline: 0.25rem;
  background-color: ${props => props.theme["red-200"]};
  position: absolute;
  z-index: 20;
  
  p {
    font-size: 0.25rem;
    overflow: hidden;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${props => props.theme.white};
  }

  @media (max-width: 320px) {
    width: 6.25rem;
    bottom: 2.625rem;

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    width: 8.25rem;
    height: 2rem;
    bottom: 3.75rem;

    p {
      font-size: 1.5rem;
    }
  }
`;