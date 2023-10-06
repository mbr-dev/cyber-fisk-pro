import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 1rem;
  padding-bottom: 0.5rem;
  background-color: ${props => props.theme["gray-200"]};
  border-end-end-radius: 24px;
  border-end-start-radius: 24px;
  
  @media(max-width: 320px) {
    padding: 0.5rem 1rem;
    padding-bottom: 0;
    border-end-end-radius: 18px;
    border-end-start-radius: 18px;
  }
`;

export const TopHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    p {
    font-size: 1rem;
  }
  }
`;

export const BottomHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  gap: 1.5rem;
  
  .logoFisk {
    width: 170px;
  }
  
  @media(max-width: 320px) {
    gap: 1rem;

    .logoFisk {
      width: 130px;
    }
  }
`;