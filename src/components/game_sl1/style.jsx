import styled from 'styled-components';

export const GameSL1Container = styled.div``;

export const GameSL1Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2rem;
  
  @media(max-width: 320px) {
    margin-top: 0.5rem;
    gap: 0.5rem;
  }

  @media(max-width: 376px) {
    margin-top: 0.75rem;
    gap: 0.75rem;
  }

  .boxTimer{
    display: flex;
    flex-direction: row;
    font-size: 20px;
    padding-bottom: 20px;
    font-weight: bold; 
  }

  .base-timer {
    position: relative;
    width: 300px;
    height: 300px;
  }
  
  .base-timer__svg {
    transform: scaleX(-1);
  }
  
  .base-timer__circle {
    fill: none;
    stroke: none;
  }
  
  .base-timer__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }
  
  .base-timer__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: red;
  }

  .base-timer__label {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
  }
`

export const BoxBtn = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 600px) {
    gap: 2rem;
  }
`;

export const ButtonLetter = styled.button`
  all: unset;
  width: 3.5rem;
  height: 4rem;
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
    width: 3rem;
    height: 2.5rem;
  }

  @media(min-width: 600px) {
    width: 5rem;
    height: 6rem;
  }
`;

export const ButtonClear = styled.button`
  all: unset;
  width: 12rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow:  2px 2px 6px #ccc;
  transition: all .2s ease-in-out;
  text-transform: none;
  background-color: ${props => props.theme["red-300"]};

  &:hover { 
    background-color: ${props => props.theme["red-200"]} ;
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    width: 12rem;
    height: 3rem;
  }

  @media(min-width: 600px) {
    width: 16rem;
    height: 4rem;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const BoxBtnClear = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;