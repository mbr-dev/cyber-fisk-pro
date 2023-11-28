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
    margin-top: -120px;
  }

  @media (min-width: 1440px) {
    height: 850px;
    margin-top: -50px;
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
  width: 150px;
  height: 32px;
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
    font-size: 20px;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${props => props.theme.white};
  }

  @media (min-width: 1280px) {
    width: 300px;
    height: 72px;
    bottom: 28px;
    padding-inline: 16px;

    span {
      font-size: 32px;
    }
  }

  @media (min-width: 1440px) {
    bottom: 36px;
  }
`;
