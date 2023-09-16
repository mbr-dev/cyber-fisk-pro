import styled from "styled-components";

export const BooksContainer = styled.div` 
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BooksHeader = styled.header`
  width: 100vw;
  height: 10rem;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme["gray-200"]};
  border-end-end-radius: 24px;
  border-end-start-radius: 24px;
`;

export const TopHeader = styled.div`
  padding: 0.625rem 1.125rem 0 1.125rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const BottomHeader = styled.div`
  display: flex;
  padding-top: 1rem;
  justify-content: center;
  
  .logoFisk {
    width: 10rem;
  }
`;

export const BooksMain = styled.main`
  flex: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BooksArea = styled.div`
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p {
    text-align: left;
    font-weight: bold;
    font-size: 1.125rem;
  }
`;

export const CurrentBooksArea = styled.div`
  width: 100%;
  margin-bottom: 1.25rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: ${props => props.theme["gray-200"]};
  margin-bottom: 1rem;
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
  img {
    width: 100%;
    height: auto;
  }
`;

export const PreviousBooksArea = styled.div`
  width: 100%;

  p {
    margin-top: 1px;
  }

  img {
    opacity: 0.3;
  }
`;