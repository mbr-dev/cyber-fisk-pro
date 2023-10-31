import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  
  @media(min-width: 800px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media(min-width: 800px) {
    width: calc(100vw - 480px);
  }
`;

export const HeaderDesktop = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 32px;
  gap: calc(80% / 2);

  p {
    font-size: 36px;
    font-weight: 500;
    color: ${props => props.theme["gray-700"]};
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media(max-width: 320px) {
    gap: 2px;
  }
`;

export const AreaInput = styled.div`
  width: 80%;
  text-align: left;
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    color: ${props => props.theme["gray-600"]};
    padding-left: 16px;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  svg {
    position: absolute;
    top: 41px;
    left: 10px;
    color: ${props => props.theme["gray-400"]};
  }

  .selectState {
    color: ${props => props.theme["gray-600"]};
  }

  .inputDate::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media(max-width: 320px) {
    .selectState {
      font-size: 12px;
    }

    label {
      font-size: 12px;
      padding-left: 12px;
      margin-bottom: 6px;
    }

    svg {
      top: 26px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding-left: 32px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["gray-400"]};
  background-color: transparent;

  &::placeholder {
    font-weight: normal;
    font-family: "Ubuntu", sans-serif;
    font-size: 16px;
    color: ${props => props.theme["gray-600"]};
  }

  @media(max-width: 360px) {
    height: 40px;
  }

  @media(max-width: 320px) {
    height: 30px;
    padding-left: 30px;

    &::placeholder {
      font-size: 12px;
    }
  }
`;

export const Select = styled.select`
  height: 42px;
  padding-left: 32px;
  border-radius: 8px;
  background-color: transparent;
  font-weight: normal;
  font-family: "Ubuntu", sans-serif;

  @media(max-width: 360px) {
    padding-left: 30px;
    height: 30px;
  }
`;

export const SelectIdioma = styled.div`
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;
`;

export const SelectTitle = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 5px;
  border: 2px solid transparent;
  border-radius: 8px;
  gap: 10px;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};

  p {
    flex: 1;
    font-size: 18px;
  }
`;

export const SelectUl = styled.ul`
  width: 100%;
  position: absolute;
  z-index: 10;
  bottom: -94px;
  padding: 8px;
  display: flex;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  align-items: flex-start;
  padding-inline: 16px;
  gap: 12px;
  background-color: ${props => props.theme["red-200"]};
`;

export const SelectLi = styled.li`
  width: 100%;
  list-style: none;
  color: ${props => props.theme.white};

  &:hover {
    background-color: ${props => props.theme["red-300"]};
  }
`;