import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1000;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div`
  width: 21rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 11;
  transform: translate(-50%, -50%);

  @media(max-width: 360px) {
    width: 20rem;
  }

  @media(max-width: 320px) {
    width: 18rem;
  }

  @media(min-width: 600px) {
    width: 500px;
  }

  @media(min-width: 1024px) {
    width: 800px;
  }
`;

export const Close = styled.div`
  all: unset;
  position: absolute;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -0.75rem;
  right: -0.75rem;
  background-color: ${props => props.theme["red-200"]};
  border-radius: 9999px;
  cursor: pointer;

  img {
    width: 18px;
  }

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
    top: -0.5rem;
    right: -0.5rem;

    img {
      width: 14px;
    }
  }

  @media(min-width: 1024px) {
    width: 52px;
    height: 52px;
    top: -28px;
    right: -24px;

    img {
      width: 28px;
    }
  }
`;

export const CloseNo = styled.div`
  all: unset;
  width: 120px;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["red-200"]};
  border: 2px solid ${props => props.theme["red-300"]};
  border-radius: 8px;
  border-bottom-width: 4px;
  cursor: pointer;

  @media(max-width: 320px) {
    height: 1.75rem;
  }

  @media(min-width: 1024px) {
    width: 200px;
    height: 44px;
    font-size: 32px;
  }
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding-block: 0.5rem;
  background-color: ${props => props.theme["yellow-300"]};
  border: 2px solid ${props => props.theme["yellow-200"]};
  border-end-end-radius: 8px;
  border-end-start-radius: 8px;

  p {
    font-size: 1.5rem;
    color: ${props => props.theme.white};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props => props.theme["yellow-300"]};
  }

  @media(max-width: 360px) {
    padding-block: 0.5rem;
  }

  @media(max-width: 320px) {
    font-size: 1rem;
  }

  @media(min-width: 480px) {
    font-size: 24px;
    padding-block: 8px;
  }

  @media(min-width: 1024px) {
    font-size: 32px;
    padding-block: 16px;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme["gray-700"]};
  
  p {
    font-size: 24px;
    font-weight: 700;
  }

  @media(max-width: 320px) {
    p {
      font-size: 18px;
    }
  }

  @media(min-width: 480px) {
    height: 182px;
  }

  @media(min-width: 1024px) {
    height: 300px;

    p {
      font-size: 32px;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: -1rem;

  @media(min-width: 1024px) {
    margin-bottom: -20px;
  }
`;

export const Button = styled.div`
  all: unset;
  width: 120px;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["green-600"]};
  border: 2px solid ${props => props.theme["green-700"]};
  border-radius: 8px;
  border-bottom-width: 4px;
  cursor: pointer;

  @media(max-width: 320px) {
    height: 1.75rem;
  }

  @media(min-width: 1024px) {
    width: 200px;
    height: 44px;
    font-size: 32px;
  }
`;