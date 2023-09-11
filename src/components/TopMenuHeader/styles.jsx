import styled from "styled-components";

export const TopMenuHeaderContainer = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0 1rem;
  background-color: ${props => props.theme["gray-200"]};
  border-end-end-radius: 24px;
  border-end-start-radius: 24px;
`;

export const TopHeader = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media(min-width: 600px) {
    p {
      font-size: 2rem;
    }
  }
`;

export const BottomHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.5rem;
  
  .logoFisk {
    width: 160px;
  }

  @media(max-width: 320px) {
    align-items: flex-start;
    
    .logoFisk {
      width: 132px;
    }
  }

  @media(min-width: 600px) {
    .logoFisk {
      width: 180px;
    }
  }
`;