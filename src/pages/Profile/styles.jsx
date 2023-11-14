import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media(min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Header = styled.header`
  width: 100vw;
  height: 164px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 16px 0 16px;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  overflow: hidden;
  position: relative;

  .bgHeaderImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @media(max-width: 320px) {
    height: 100px;
    padding: 12px 12px 0 12px;
  }

  @media(max-width: 360px) {
    height: 132px;
    padding: 14px 14px 0 14px;
  }

  @media(min-width: 1024px) {
    width: 40%;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
    padding: 32px 32px 72px 32px;
    border-end-end-radius: 0;
    border-end-start-radius: 0;
  }
`;

export const TopHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 24px;
    font-weight: 500;
    color: ${props => props.theme["white"]};
  }

  @media(max-width: 320px) {
    p {
      font-size: 16px;
    }
  }

  @media(max-width: 360px) {
    p {
      font-size: 20px;
    }
  }
`;

export const BottomHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  
  .logoFisk {
    width: 196px;
  }

  @media(max-width: 320px) {
    
    gap: 54px;
    padding-bottom: 8px;

    .logoFisk {
      width: 100px;
    }
  }

  @media(max-width: 360px) {
    gap: 36px;

    .logoFisk {
      width: 150px;
    }
  }

  @media(min-width: 768px) {
    .logoFisk {
      width: 210px;
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    margin-top: -24px;
  }

  .roboPe {
    width: 200px;
    margin-bottom: -50px;
  }

  p {
    width: 120px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    img {
      margin-top: 0;
      width: 50px;
    }

    p {
      width: 80px;
      height: 20px;
      font-size: 12px;
    }
  }

  @media(max-width: 360px) {
    img {
      width: 64px;
    }

    p {
      width: 96px;
      height: 24px;
      font-size: 14px;
    }
  }

  @media(min-width: 1024px) {
    width: 400px;
    height: 500px;

    p {
      width: 300px;
      height: 52px;
      font-size: 32px;
    }
  }

  @media(min-width: 1920px) {
    width: 500px;
    height: 750px;

    .roboPe {
      width: 250px;
      margin-bottom: -64px;
    }

    p {
      width: 450px;
      height: 74px;
      font-size: 44px;
    }
  }

  @media(min-width: 2560px) {
    width: 600px;
    height: 800px;

    .roboPe {
      width: 300px;
      margin-bottom: -64px;
    }

    p {
      width: 500px;
      height: 82px;
      font-size: 44px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  
 /*  @media(min-width: 800px) {
    width: calc(100vw - 480px);
  } */

  @media(min-width: 1024px) {
    width: 60%;
  }

  @media(min-width: 2560px) {
    width: 50%;
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

  @media(min-width: 2560px) {
    p {
      font-size: 52px;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 16px;
  gap: 10px;

  @media(max-width: 320px) {
    padding-top: 0;
    gap: 2px;
  }

  @media(min-width: 768px) {
    gap: 20px;
  }

  @media(min-width: 1920px) {
    gap: 16px;
  }

  @media(min-width: 2560px) {
    gap: 20px;
  }
`;

export const AreaInput = styled.div`
  width: 300px;
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

  .iconImg {
    width: 28px;
    position: absolute;
    top: 38px;
    left: 10px;
  }

  .selectState {
    color: ${props => props.theme["gray-600"]};
  }

  .inputDate::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media(max-width: 320px) {
    width: 250px;

    .iconImg {
      top: -38px;
      background-color: red;
    }

    .selectState {
      font-size: 12px;
    }

    label {
      font-size: 12px;
      padding-left: 12px;
      margin-bottom: 6px;
    }
  }

  @media(max-width: 360px) {
    .iconImg {
      width: 24px;
      top: 36px;
    }
  }

  @media(min-width: 768px) {
    width: 620px;

    label {
      font-size: 24px;
    }
  }

  @media(min-width: 1024px) {
    width: 680px;

    label {
      padding-left: 28px;
      font-size: 24px;
      margin-bottom: 16px;
    }

    svg {
      top: 62px;
      left: 18px;
    }
  }

  @media(min-width: 2560px) {
    width: 70%;
  }
`;

export const Div = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    top: 41px;
    left: 10px;
    color: ${props => props.theme["gray-400"]};
  }

  @media(max-width: 320px) {
    .selectState {
      font-size: 12px;
    }

    svg {
      top: 26px;
    }
  }

  @media(min-width: 768px) {
    gap: 20px;
  }

  @media(min-width: 1024px) {
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .dataInput {
      width: 90%;
    }
    
    svg {
      top: 62px;
      left: 18px;
    }
  }

  @media(min-width: 2560px) {
    width: 70%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding-left: 42px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["gray-400"]};
  background-color: transparent;

  &::placeholder {
    font-weight: normal;
    font-family: "Ubuntu", sans-serif;
    font-size: 16px;
    color: ${props => props.theme["gray-600"]};
  }

  @media(max-width: 320px) {
    height: 30px;
    padding-left: 30px;

    &::placeholder {
      font-size: 12px;
    }
  }

  @media(max-width: 360px) {
    height: 36px;
  }

  @media(min-width: 768px) {
    height: 62px;
    padding-left: 54px;

    &::placeholder {
      font-size: 24px;
    }
  }

  @media(min-width: 1024px) {
    height: 64px;
    box-shadow: 0px 4px 10px 0px #00000040;

    &::placeholder {
      font-size: 20px;
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 42px;
  padding-left: 42px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["gray-400"]};
  background-color: transparent;
  font-weight: normal;
  font-family: "Ubuntu", sans-serif;

  @media(max-width: 320px) {
    height: 30px;
  }

  @media(max-width: 360px) {
    height: 36px;
  }

  @media(min-width: 768px) {
    height: 62px;
    font-size: 24px;
    padding-left: 54px;
  }

  @media(min-width: 1024px) {
    height: 64px;
    padding-left: 54px;
    font-size: 24px;
    box-shadow: 0px 4px 10px 0px #00000040;
  }

`;

export const SelectIdioma = styled.div`
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px 0px #00000033;
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
    font-weight: 500;
  }

  @media(max-width: 320px) {
    width: 250px;
    height: 30px;

    p {
      font-size: 12px;
    }

    img {
      width: 18px;
    }
  }

  @media(max-width: 360px) {
    height: 36px;
  }

  @media(min-width: 768px) {
    height: 62px;
    padding-inline: 16px;

    p {
      font-size: 24px;
    }

    img {
      width: 32px;
    }
  }

  @media(min-width: 1024px) {
    height: 64px;
    gap: 20px;

    p {
      font-size: 24px;
    }

    img {
      width: 38px;
    }
  }
`;

export const SelectUl = styled.ul`
  width: 100%;
  position: absolute;
  z-index: 10;
  bottom: -94px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-inline: 16px;
  gap: 12px;
  background-color: ${props => props.theme["red-200"]};

  @media(max-width: 320px) {
    bottom: -78px;
  }

  @media(min-width: 768px) {
    padding: 16px;
    bottom: -140px;
  }

  @media(min-width: 1024px) {
    padding-inline: 44px;
    gap: 20px;
    bottom: -140px;
  }
`;

export const SelectLi = styled.li`
  width: 100%;
  font-weight: 500;
  list-style: none;
  color: ${props => props.theme.white};

  &:hover {
    background-color: ${props => props.theme["red-300"]};
  }

  @media(max-width: 320px) {
    font-size: 12px;
  }

  @media(min-width: 768px) {
    font-size: 24px;
  }

  @media(min-width: 1024px) {
    font-size: 28px;
  }
`;