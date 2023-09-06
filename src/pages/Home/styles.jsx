import styled from "styled-components"

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HomeHeader = styled.header`
  width: 100vw;
  height: 10rem;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme['gray-200']};
  border-end-end-radius: 24px;
  border-end-start-radius: 24px;
`;

export const TopHeader = styled.div`
  padding: 0.625rem 1.125rem 0 1.125rem;
`;

export const BottomHeader = styled.div`
  padding-top: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  
  .logoFisk {
    width: 10rem;
  }
`;

export const HomeMain = styled.div`
  width: 100%;
  flex: 1;
  padding-top: 1rem;
  background-color: ${props => props.theme.white};

  @media(min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MainCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media(min-width: 768px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(3, auto);
    gap: 3rem;
  }
`;

export const MainCard = styled.a`
  width: 120px;
  height: 114px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${props => props.theme.white};
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  cursor: pointer;

  img {
    width: 3rem;
    height: 3rem;
    margin-top: 0.75rem;
  }

  p {
    font-weight: 500;
    color: ${props => props.theme.black};
  }
`;