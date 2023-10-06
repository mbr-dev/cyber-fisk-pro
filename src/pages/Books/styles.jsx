import styled from "styled-components";

export const Container = styled.div` 
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 18.75rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  gap: 0.5rem;

  p {
    text-align: left;
    font-weight: 500;
    font-size: 1.125rem;
  }
`;

export const CurrentBooksArea = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;

  p {
    margin-bottom: 1.5rem;
  }
`;

export const BooksImagesArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const BooksImagesCarrousel = styled.div`
  height: 8.25rem;
`;

export const ImagesCarrousel = styled.div`
  /* img {
    width: 100%;
    height: auto;
  } */
  img {
    width: 30%;
  }
`;

export const PreviousBooksArea = styled.div`
  width: 100%;

  p {
    margin-bottom: 1.5rem;
  }

  img {
    opacity: 0.3;
  }
`;