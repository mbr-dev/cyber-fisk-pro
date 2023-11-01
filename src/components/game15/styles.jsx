import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  margin-top: 2rem;

  @media(max-width: 320px) {
    gap: 3rem;
    margin-top: 1.5rem;
  }
`;

export const AreaAnswers = styled.div`
  width: 20rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-bottom: 2px solid ${props => props.theme.black};
  padding-bottom: 3px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  p {
    font-size: 1rem;
    font-weight: bold;
  }

  
  
  @media(max-width: 320px) {
    width: 15rem;

    span {
      font-weight: bold;
    }
  }
`;

export const AreaWord = styled.div`
  width: 17rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const Words = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
`;

  export const AreaButton = styled.div`
    width: 100%;
    display: flex;
    margin-top: 32px;
    align-items: center;
    justify-content: center;
    gap: 32px;
  `;