import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  padding-block: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["blue-500"]};

  img {
    width: 200px;
  }

  @media(max-width: 320px) {
    padding-block: 1rem;
    
    img {
      width: 150px;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 2rem;
  gap: 1rem;
  margin-bottom: 2rem;

  @media(max-width: 376px) {
    width: 18.75rem;
    padding-block: 1rem;
    margin-bottom: 1.5rem;
    gap: 0.875rem;
  }

  @media(max-width: 360px) {
    gap: 0.5rem;
  }

  @media(max-width: 320px) {
    padding-block: 0.5rem;
    width: 16rem;
    gap: 0.375rem;
    margin-bottom: 0rem;
  }
`;

export const AreaInput = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    color: ${props => props.theme["gray-600"]};
    padding-left: 1rem;
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  svg {
    position: absolute;
    top: 41px;
    left: 10px;
    color: ${props => props.theme["gray-400"]};
  }
  
  img {
    width: 1.25rem;
    position: absolute;
    top: 40px;
    left: 10px;
    color: ${props => props.theme["gray-400"]};
  }

  .language {
    background-color: ${props => props.theme["red-200"]};
    border: 0;
    color: ${props => props.theme.white};
    font-size: 1.125rem;
    font-weight: 500;
  }

  .selectState {
    color: ${props => props.theme["gray-600"]};
  }

  .inputDate::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media(max-width: 320px) {
    .language {
      font-size: 1rem;
    }

    label {
      font-size: 1rem;
      padding-left: 0.75rem;
    }

    svg {
      top: 38px;
    }
    
    img {
      top: 36px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2.625rem;
  padding-left: 2rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme["gray-400"]};
  background-color: transparent;
  color: ${props => props.theme["gray-600"]};

  &::placeholder {
    font-weight: normal;
    font-family: "Ubuntu", sans-serif;
    font-size: 1rem;
    color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 360px) {
    height: 2.5rem;
  }

  @media(max-width: 320px) {
    height: 2.25rem;

    &::placeholder {
      font-size: 0.875rem;
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 2.625rem;
  padding-left: 2rem;
  border-radius: 8px;
  background-color: transparent;
  font-weight: normal;
  font-family: "Ubuntu", sans-serif;

  @media(max-width: 360px) {
    height: 2.5rem;
  }
`;