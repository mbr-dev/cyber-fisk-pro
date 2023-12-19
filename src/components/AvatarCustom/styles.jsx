import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 320px;
  position: relative;
  z-index: 10;

  @media (max-width: 320px) {
    width: 100px;
    height: 200px;
  }

  @media (min-width: 768px) {
    width: 12.5rem;
    height: 25rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 150px;
      height: 320px;
    }
  }

  @media (min-width: 1024px) {
    width: 250px;
    height: 720px;
  }
  
  @media (min-width: 1366px) {
    width: 320px;
    height: 800px;
  }

  @media (min-width: 1920px) {
    width: 400px;
    height: 1000px;
  }

`;

export const Antena = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 12;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Cabeca = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 11;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Face = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 12;

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
  z-index: 10;

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

export const Pet = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
  bottom: 2.375rem;
  left: -1rem;
  z-index: 12;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1280px) {
    width: 9.375rem;
    height: 9.375rem;
    bottom: 6.25rem;
    left: -3.25rem;
  }

  @media (min-width: 1440px) {
  }
`;

export const Name = styled.div`
  width: 150px;
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

  @media (min-width: 1024px) {
    width: 250px;
    height: 72px;

    
    span {
      font-size: 36px;
    }
  }

  @media (min-width: 1366px) {
    width: 320px;
    bottom: 22px;
    padding-inline: 16px;

    span {
      font-size: 2rem;
    }
  }

  @media (min-width: 1920px) {
    width: 400px;
    height: 84px;
    bottom: 40px;
  }
`;
