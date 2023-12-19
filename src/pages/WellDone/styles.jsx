import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 40%;
      height: 100vh;
      overflow-y: hidden;
    }
  }
`;

export const Top = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 0 16px;
  z-index: 2;

  @media(max-width: 320px) {
    padding: 10px 10px 0 10px;
  }

  @media(min-width: 768px) {
    padding: 32px 32px 0 32px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding: 10px 10px 0 10px;
    }
  }

  @media(min-width: 1024px) {
    padding: 32px 32px 0 32px;
  }
`;

export const DivMobile = styled.div`
   @media(orientation: landscape) {
      @media(min-width: 600px) {
        display: none;
    }
  }
`;

export const DivDesk = styled.div`
  display: none;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      display: block;
    }
  }
`;

export const Middle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -80px;

  h2 {
    color: ${props => props.theme.white};
    font-size: 2.625rem;
    margin-top: -6.875rem;
  }

  @media(max-width: 320px) {
    margin-top: -52px;

    h2 {
      font-size: 1.5rem;
      margin-top: -3.75rem;
    }
  }

  @media(min-width: 768px) {
    margin-top: -132px;

    h2 {
      font-size: 3.25rem;
      margin-top: -10.625rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      margin-top: -32px;

      h2 {
        font-size: 1.5rem;
        margin-top: -5rem;
        margin-bottom: 0.5rem;
      }
    }
  }

  @media(min-width: 1024px) {

    h2 {
      font-size: 3.25rem;
      margin-top: -12.625rem;
    }
  }

  @media(min-width: 1366px) {
    h2 {
      margin-top: -13rem;
    }
  }
`;

export const AvatarArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-y: hidden;

  .bgConfetes {
    width: 350px;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  @media(max-width: 320px) {
    .bgConfetes {
      width: 250px;
    }
  }

  @media(min-width: 768px) {
    .bgConfetes {
      width: 500px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 17.5rem;

      .bgConfetes {
        width: 200px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 24rem;

    .bgConfetes {
      width: 400px;
      height: 350px;

    }
  }

  @media(min-width: 1366px) {
    width: 37.5rem;

    .bgConfetes {
      width: 600px;
      height: 500px;

    }
  }
`;

export const Bottom = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  @media(max-width: 320px) {
    gap: 0.25rem;
  }
`;

export const AreaItem = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: ${props => props.theme.white};
  justify-content: center;

  img {
    width: 36px;
    margin-right: 1.25rem;
  }

  span {
    display: block;
    width: 1.75rem;
    height: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: ${props => props.theme["red-200"]};
  }

  p {
    font-weight: 500;
  }

  @media(max-width: 320px) {
    img {
      width: 20px;
    }

    span {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 0.875rem;
      border-radius: 6px;
    }

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 600px) {
    gap: 20px;

    img {
      width: 44px;
    }

    span {
      width: 36px;
      height: 36px;
      font-size: 24px;
    }

    p {
      font-size: 24px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 60%;
      height: 100vh;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: relative;

  p {
    text-align: center;
  }
  
  span {
    width: 120px;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.theme["red-300"]};
    border-radius: 6px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    gap: 10px;
  }

  @media(min-width: 768px) {

    p {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      
    }

    span {
      width: 15.625rem;
      height: 3rem;
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      align-items: flex-end;
      gap: 20px;

      p {
        font-size: 16px;
        margin-bottom: 8px;
      }

      span {
        width: 150px;
        height: 2rem;
        font-size: 1.125rem;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 92px;

    p {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      
    }

    span {
      width: 15.625rem;
      height: 3.25rem;
      font-size: 2rem;
    }
  }
`;

export const ButtonClose = styled.section`
  display: none;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      display: block;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  @media(min-width: 1024px) {
    top: 32px;
    right: 32px;
  }
`;

export const ButtonRed = styled.button`
  all: unset;
  width: 17.5rem;
  margin-top: -32px;
  height: 3.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["red-300"]};
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 1.25rem;
    font-weight: bold;
  }

  &:hover {
    background-color: ${props => props.theme["red-300"]};
  }

  @media(max-width: 320px) {
    width: 13.75rem;
    height: 2.375rem;
    margin-top: -24px;
    gap: 1rem;

    p {
      font-size: 1.125rem;
    }
  }

  @media(min-width: 768px) {
    width: 21.875rem;
    height: 4.5rem;
    margin-top: -40px;
    gap: 2rem;

    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 12.5rem;
      height: 42px;
      margin-top: 0px;
      border-radius: 6px;
      gap: 0.625rem;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 21.875rem;
    height: 4.5rem;
    border-radius: 12px;
    gap: 2rem;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const IconAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  padding-top: 22px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};
  overflow: hidden;

  @media (max-width: 320px) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: 768px) {
    width: 3.75rem;
    height: 3.75rem;
    padding-top: 36px;
  }
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 2rem;
      height: 2rem;
      padding-top: 18px;
    }
  }

  @media (min-width: 1024px) {
    width: 3.5rem;
    height: 3.5rem;
    padding-top: 32px;
  }

  @media (min-width: 1366px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const Bottom2 = styled.section`
  display: none;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      display: flex;
      width: 25rem;
      height: 6.25rem;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0.25rem;
      padding-left: 30px;
      position: relative;
      margin-top: 24px;

      .AreaItem2Left {
        border-bottom: 1px solid white;
      }


      .fundoBg {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 550px;
    height: 11.25rem;
    gap: 0.75rem;
    margin-top: 56px;

    .fundoBg {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }

    .AreaItem2Left {
      border-width: 2px;
      padding-bottom: 10px;
    }
  }

  @media(min-width: 1366px) {
    width: 43.75rem;
  }

  @media(min-width: 1920px) {
    width: 850px;
  }
`;

export const LineSeparator = styled.div`
  width: 15.625rem;
  height: 1px;
  background-color: ${props => props.theme.white};

  @media (min-width: 1024px) {
    width: 25rem;
    height: 2px;
  }

  @media (min-width: 1366px) {
    width: 31.25rem;
  }
`;

export const AreaItem2 = styled.section`
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25rem;
  color: ${props => props.theme.white};
  margin-left: 50px;

  img {
    width: 32px;
    margin-left: 36px;
  }

  span {
    display: block;
    font-size: 0.875rem;
    width: 2rem;
    height: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: ${props => props.theme["red-200"]};
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
  }

  @media(min-width: 1024px) {
    gap: 3rem;

    img {
      width: 44px;
      margin-left: 60px;
    }

    span {
      width: 3rem;
      height: 3rem;
      font-size: 1.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media(min-width: 1366px) {
    gap: 3.25rem;

    img {
      width: 56px;
      margin-left: 100px;
    }

    span {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 1.75rem;
    }

    p {
      font-size: 1.75rem;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media(max-width: 320px) {
    gap: 0.375rem;
  }

  @media(min-width: 768px) {
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
      gap: 1rem;
    }
  }

  @media(min-width: 1024px) {
    gap: 3.125rem;
  }
`;

export const Text = styled.div`
  width: 17.5rem;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid ${props => props.theme["gray-700"]};
  border-radius: 6px;
  opacity: 0.5;

  @media(max-width: 320px) {
    width: 15.625rem;
    height: 44px;
    
    p {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 20rem;
    height: 120px;
    border-width: 3px;
    
    p {
      font-size: 1.25rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 15.625rem;
      height: 6.25rem;
      padding-inline: 6px;
      
      p {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 280px;
    height: 11.25rem;
    border-width: 3px;
    
    p {
      font-size: 1.5rem;
    }
  }

  @media(min-width: 1366px) {
    width: 25rem;
    
    p {
      font-size: 1.5rem;
    }
  }
`;