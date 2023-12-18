import styled from "styled-components";

export const Container = styled.div`
  width: 7.5rem;
  height: 12.5rem;
  position: relative;
  z-index: 10;

  @media (max-width: 320px) {
    width: 100px;
    height: 150px;
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 380px;
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
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding-inline: 0.25rem;
  background-color: ${props => props.theme["red-200"]};
  position: absolute;
  bottom: 48px;
  z-index: 20;
  
  p {
    font-size: 16px;
    overflow: hidden;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${props => props.theme.white};
  }

  @media (max-width: 320px) {
    width: 100px;
    height: 28px;
    bottom: 36px;

    p {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 40px;
    bottom: 124px;

    p {
      font-size: 20px;
    }
  }
`;