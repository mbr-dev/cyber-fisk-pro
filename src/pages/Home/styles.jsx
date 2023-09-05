import styled from "styled-components"

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HomeHeader = styled.header`
  width: 100vw;
  height: 11rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${props => props.theme['gray-200']};
  border-end-end-radius: 24px;
  border-end-start-radius: 24px;
`;

export const TopMenuButton = styled.header`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  margin: 1rem 0 0 2rem;
  justify-content: center;
  background-color: ${props => props.theme['red-200']};
  border-radius: 6px;
  color: ${props => props.theme.white};
`;

export const BottomMenuHeader = styled.div`
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
  padding-top: 0.5rem;
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
    font-weight: bold;
    color: ${props => props.theme.black};
  }
`;