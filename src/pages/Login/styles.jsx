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
    margin-top: 0.75rem;
    margin-left: 0.625rem;
    color: ${props => props.theme["gray-400"]};
  }

  .userImg {
    width: 20px;
  }

  .eyesImg {
    width: 24px;
    margin-left: 17.75rem;
    color: ${props => props.theme["gray-400"]};
  }

  @media (max-width: 320px) {
    img {
      margin-top: 0.5rem;
    }

    .userImg {
      width: 24px;
    }

    .eyesImg {
      width: 24px;
      margin-left: 12.75rem;
    }
  }
  
  @media (min-width: 768px) {
    img {
      width: 20px;
      margin-top: 1rem;
    }

    .userImg {
      width: 28px;
    }

    .eyesImg {
      width: 24px;
      margin-left: 27rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      img {
        width: 14px;
        margin-top: 0.75rem;
      }

      .userImg {
        width: 18px;
      }

      .eyesImg {
        width: 18px;
        margin-left: 19.75rem;
      }
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 20px;
      margin-top: 1rem;
    }

    .userImg {
      width: 28px;
    }

    .eyesImg {
      width: 28px;
      margin-left: 23rem;
      margin-top: 1.25rem;
    }
  }

  @media (min-width: 1366px) {
    .eyesImg {
      margin-left: 34rem;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding-left: 2rem;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["gray-400"]};
  background-color: transparent;
  color: ${props => props.theme["gray-600"]};
  font-weight: normal;
  font-size: 1rem;

  &::placeholder {
    font-weight: normal;
    font-family: "Ubuntu", sans-serif;
    font-size: 1rem;
    color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 320px) {
    height: 36px;

    &::placeholder {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    height: 3.75rem;
    padding-left: 2.75rem;
    font-size: 1.5rem;

    &::placeholder {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 2.25rem;
      font-size: 1rem;

      &::placeholder {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1024px) {
    height: 3.75rem;
    padding-left: 2.625rem;
    font-size: 1.5rem;

    &::placeholder {
      font-size: 1.5rem;
    }
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
  height: 2.625rem;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 5px;
  border: 2px solid transparent;
  border-radius: 8px;
  gap: 0.625rem;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};

  p {
    flex: 1;
    font-size: 1.125rem;
  }

  @media(min-width: 768px) {
    height: 4rem;
    gap: 1rem;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 2.25rem;
      gap: 0.5rem;

      p {
        font-size: 0.875rem;
        font-weight: 500;
      }

      img {
        width: 20px;
      }
    }
  }

  @media(min-width: 1024px) {
    height: 4rem;
    gap: 1rem;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 32px;
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
  padding-inline: 1rem;
  gap: 0.75rem;
  background-color: ${props => props.theme["red-200"]};

  @media(min-width: 768px) {
    padding-inline: 2.75rem;
    gap: 1.25rem;
    bottom: -8.75rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-inline: 1.5rem;
      gap: 1rem;
      bottom: -94px;
    }
  }

  @media(min-width: 1024px) {
    padding-inline: 2.75rem;
    gap: 1.25rem;
    bottom: -8.75rem;
  }
`;

export const SelectLi = styled.li`
  width: 100%;
  list-style: none;
  color: ${props => props.theme.white};

  &:hover {
    background-color: ${props => props.theme["red-300"]};
  }

  @media(min-width: 768px) {
    font-size: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      font-size: 14px;
      font-weight: 500px;
    }
  }

  @media(min-width: 1024px) {
    font-size: 1.5rem;
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

  @media (max-width: 320px) {
    width: 250px;
    height: 56px;
  }

  @media (min-width: 768px) {
    width: 37.5rem;
    height: 6rem;
    border-top-width: 4px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 18.75rem;
      height: 4.5rem;
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
    width: 25rem;
    height: 2.75rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 2rem;
      border-radius: 6px;

      p {
        font-size: 1.125rem;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 25rem;
    height: 2.75rem;

    p {
      font-size: 2rem;
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