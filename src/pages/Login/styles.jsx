  import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  background-repeat: no-repeat;
  background-size: cover;

  .logoFisk {
    width: 180px;
  }

  .buddyImg {
    display: none;
  }

  @media(max-width: 360px) {
    height: 110px;
    
    .logoFisk {
      width: 164px;
    }
  }

  @media(max-width: 320px) {
    height: 100px;
    
    .logoFisk {
      width: 150px;
    }
  }

  @media(min-width: 768px) {
    height: 150px;

    .logoFisk {
      width: 232px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 40%;
      height: 100vh;
      border-end-end-radius: 0;
      border-end-start-radius: 0;
      flex-direction: column;
      gap: 10px;

      .logoFisk {
        width: 120px;
      }

      .buddyImg {
        display: block;
        width: 150px;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 16px;

    .logoFisk {
      width: 250px;
    }

    .buddyImg {
      width: 300px;
    }
  }

  @media(min-width: 1366px) {
    gap: 24px;

    .logoFisk {
      width: 300px;
    }

    .buddyImg {
      width: 400px;
    }
  }

  @media(min-width: 1920px) {
    gap: 36px;

    .buddyImg {
      width: 500px;
    }
  }
`;

export const FooterBlue = styled.header`
  display: none;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      
      p {
        color: ${props => props.theme.white};
        font-size: 16px;
        font-weight: normal;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        
        img {
          width: 28px;
        }
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 16px;

    p {
      font-size: 20px;
    }

    div {
      gap: 24px;

      img {
        width: 52px;
      }
    }
  }

  @media(min-width: 1366px) {
    gap: 20px;

    p {
      font-size: 24px;
    }

    div {
      gap: 28px;

      img {
        width: 64px;
      }
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 60%;
      height: 100%;
      gap: 0px;
    }
  }
`;

export const Form = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  gap: 16px;

  @media(max-width: 360px) {
    width: 300px;
  }

  @media(max-width: 320px) {
    width: 250px;
    padding-top: 8px;
    gap: 8px;
  }

  @media (min-width: 768px) {
    width: 500px;
    gap: 16px;
    padding-top: 24px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 360px;
      padding-top: 8px;
      gap: 8px;
    }
  }

  @media(min-width: 1024px) {
    width: 420px;
    padding-top: 32px;
    gap: 24px;
  }

  @media(min-width: 1366px) {
    width: 600px;
    padding-top: 64px;
    gap: 32px;
  }

  @media(min-width: 1920px) {
    padding-top: 120px;
  }
`;

export const AreaInput = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;

  label {
    font-size: 16px;
    color: ${props => props.theme["gray-600"]};
    padding-left: 16px;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    label {
      font-size: 14px;
      padding-left: 10px;
    }
  }

  @media(min-width: 768px) {
    gap: 16px;

    label {
      padding-left: 18px;
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 8px;

      label {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 16px;

    label {
      padding-left: 18px;
      font-size: 24px;
    }
  }

  @media(min-width: 1366px) {
    gap: 20px;

    label {
      padding-left: 32px;
      font-size: 32px;
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  position: relative;

  img {
    width: 14px;
    position: absolute;
    top: 12px;
    left: 12px;
  }

  .userImg {
    width: 20px;
    position: absolute;
    top: 10px;
    left: 12px;
  }
  
  .eyesImg {
    width: 22px;
    position: absolute;
    top: 10px;
    left: 284px;
  }

  @media (max-width: 360px) {
    .eyesImg {
      left: 268px;
    }
  }

  @media (max-width: 320px) {
    img {
      width: 12px;
      top: 12px;
      left: 10px;
    }

    .userImg {
      width: 18px;
      top: 10px;
      left: 8px;
    }
    
    .eyesImg {
      width: 20px;
      top: 10px;
      left: 220px;
    }
  }
  
  @media (min-width: 768px) {
    img {
      width: 20px;
      top: 18px;
      left: 16px;
    }

    .userImg {
      width: 30px;
      top: 16px;
      left: 10px;
    }
    
    .eyesImg {
      width: 32px;
      top: 18px;
      left: 452px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      img {
        width: 14px;
        top: 10px;
        left: 16px;
      }

      .userImg {
        width: 22px;
        top: 8px;
        left: 10px;
      }
      
      .eyesImg {
        width: 24px;
        top: 10px;
        left: 324px;
      }
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 20px;
      top: 18px;
      left: 16px;
    }

    .userImg {
      width: 28px;
      top: 16px;
      left: 10px;
    }
    
    .eyesImg {
      width: 32px;
      top: 16px;
      left: 372px;
    }
  }

  @media (min-width: 1366px) {
    img {
      width: 24px;
      top: 20px;
      left: 16px;
    }

    .userImg {
      width: 32px;
      top: 18px;
      left: 10px;
    }
    
    .eyesImg {
      width: 36px;
      top: 20px;
      left: 546px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding-left: 32px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["gray-400"]};
  font-size: 16px;
  font-weight: normal;
  color: ${props => props.theme["gray-600"]};
  background-color: transparent;

  &::placeholder {
    font-size: 16px;
    font-weight: normal;
    font-family: "Ubuntu", sans-serif;
    color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 320px) {
    height: 36px;
    padding-left: 28px;
    font-size: 14px;

    &::placeholder {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    height: 64px;
    padding-left: 48px;
    font-size: 24px;

    &::placeholder {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 36px;
      font-size: 16px;
      padding-left: 36px;

      &::placeholder {
        font-size: 16px;
      }
    }
  }

  @media(min-width: 1024px) {
    height: 64px;
    padding-left: 46px;
    font-size: 24px;

    &::placeholder {
      font-size: 24px;
    }
  }

  @media(min-width: 1366px) {
    height: 72px;
    padding-left: 56px;
    font-size: 28px;

    &::placeholder {
      font-size: 28px;
    }
  }
`;

export const SelectIdioma = styled.div`
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const SelectTitle = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 6px;
  border: 2px solid transparent;
  border-radius: 8px;
  gap: 16px;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};

  p {
    flex: 1;
    font-size: 16px;
  }

  img {
    width: 28px;
  }

  @media(max-width: 320px) {
    height: 36px;
    gap: 14px;

    p {
      font-size: 14px;
    }

    img {
      width: 24px;
    }
  }

  @media(min-width: 768px) {
    height: 64px;
    gap: 16px;
    padding-inline: 12px;

    p {
      font-size: 22px;
    }

    img {
      width: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 36px;
      padding-inline: 8px;
      gap: 8px;

      p {
        font-size: 14px;
        font-weight: 500;
      }

      img {
        width: 20px;
      }
    }
  }

  @media(min-width: 1024px) {
    height: 64px;
    gap: 16px;
    padding-inline: 12px;

    p {
      font-size: 22px;
    }

    img {
      width: 32px;
    }
  }

  @media(min-width: 1366px) {
    height: 72px;
    gap: 24px;
    padding-inline: 16px;

    p {
      font-size: 24px;
    }

    img {
      width: 36px;
    }
  }
`;

export const SelectUl = styled.ul`
  width: 100%;
  position: absolute;
  z-index: 10;
  bottom: -106px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 14px 16px;
  gap: 12px;
  background-color: ${props => props.theme["red-200"]};

  @media(max-width: 320px) {
    padding: 8px 14px;
    gap: 8px;
    bottom: -80px;
  }

  @media(min-width: 768px) {
    padding: 10px 20px;
    gap: 18px;
    bottom: -140px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding: 8px 14px;
      gap: 8px;
      bottom: -70px;
    }
  }

  @media(min-width: 1024px) {
    padding: 10px 20px;
    gap: 18px;
    bottom: -140px;
  }
`;

export const SelectLi = styled.li`
  width: 100%;
  list-style: none;
  font-size: 16px;
  color: ${props => props.theme.white};

  &:hover {
    background-color: ${props => props.theme["red-300"]};
  }

  @media(max-width: 320px) {
    font-size: 14px;
  }

  @media(min-width: 768px) {
    font-size: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      font-size: 12px;
      font-weight: 500px;
    }
  }

  @media(min-width: 1024px) {
    font-size: 24px;
  }
`;

export const AreaButton = styled.div`
  width: 320px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media (max-width: 360px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    width: 250px;
    height: 56px;
  }

  @media (min-width: 768px) {
    width: 500px;
    height: 6rem;
    border-top-width: 4px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 360px;
      height: 52px;
      border-top-width: 2px
    }
  }

  @media (min-width: 1024px) {
    width: 450px;
    height: 6rem;
    border-top-width: 4px;
  }

  @media (min-width: 1366px) {
    width: 37.5rem;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 250px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["green-600"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["green-700"]};
  border-bottom-width: 4px;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 12.5rem;
    height: 2rem;

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    width: 300px;
    height: 42px;

    p {
      font-size: 28px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 250px;
      height: 28px;
      border-radius: 6px;

      p {
        font-size: 16px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 25rem;
    height: 2.75rem;

    p {
      font-size: 32px;
    }
  }
`;

export const FooterArea = styled.div`
  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: none;
    }
  }
`;