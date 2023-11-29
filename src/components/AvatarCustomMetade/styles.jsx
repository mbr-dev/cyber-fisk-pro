import styled from "styled-components";

export const Container = styled.div`
  width: 120px;
  height: 200px;
  position: relative;
  margin-top: -42px;
  z-index: 10;

  @media (max-width: 320px) {
    width: 100px;
    height: 150px;
    margin-top: -36px;
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

export const Name = styled.div`
  width: 120px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding-inline: 6px;
  background-color: ${props => props.theme["red-200"]};
  position: absolute;
  z-index: 20;
  bottom: 60px;
  
  p {
    overflow: hidden;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${props => props.theme.white};
  }

  @media (max-width: 320px) {
    width: 100px;
    bottom: 42px;

    p {
      font-size: 14px;
    }
  }
`;