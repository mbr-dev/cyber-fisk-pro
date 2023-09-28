import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  
  @media(max-width: 320px) {
    margin-top: 0;
    gap: 0.5rem;
  }
`

export const LettersArea = styled.div`
  width: 100%;
  padding-block: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  background-color: ${props=> props.theme["gray-200"]};
`;

export const Letter = styled.div`
  width: 1.75rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.black};
  border-radius: 5px;

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 2rem;
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }
`;

export const ButtonLetter = styled.button`
  all: unset;
  width: 3rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  box-shadow:  2px 2px 6px #ccc;
  transition: all .2s ease-in-out;
  text-transform: none;

  &:hover { 
    transform: scale(1.05); 
  }

  p {
    font-size: 1.75rem;
    font-weight: bold;
  }

  @media(max-width: 320px) {
    width: 2.5rem;
    height: 3rem;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const ButtonClear = styled.button`
  all: unset;
  width: 12rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 3px solid ${props => props.theme["red-300"]};
  border-bottom: 4px solid ${props => props.theme["red-300"]};
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    color: ${props => props.theme.white};
  }

  &:hover { 
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 10rem;
    height: 2.25rem;
  }
`;
