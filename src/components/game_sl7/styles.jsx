import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 320px)  {
    gap: 0.5rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px)  {
      width: 90%;
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export const Photos = styled.div`
  width: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media (min-width: 768px)  {
    width: 450px;
    height: 300px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 26rem;
      height: 100%;
      gap: 0.5rem;
    }
  }

  @media (min-width: 1280px)  {
    width: 450px;
    height: 300px;
  }
`;

export const Photo = styled.div`
  width: 10rem;
  height: 6rem;
  background-color: gray;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media(max-width: 320px) {
    width: 120px;
    height: 60px;
    border-radius: 6px;
  }

  @media(min-width: 768px) {
    width: 200px;
    height: 130px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 120px;
      height: 60px;
      border-radius: 6px;
    }
  }

  @media(min-width: 1280px) {
    width: 200px;
    height: 130px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 320px) {
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    width: 100vw;
    height: 300px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 30rem;
      height: 11rem;
      justify-content: space-between;
      gap: 0.5rem;
    }
  }

  @media (min-width: 1280px) {
    width: 33.125rem;
    height: 18.75rem;
  }
`;

export const Types = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  font-size: 1rem;

  @media(min-width: 768px) {
    gap: 0.75rem;
    font-size: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.5rem;
      font-size: 1rem;
    }
  }

  @media(min-width: 1280px) {
    gap: 0.75rem;
    font-size: 1.5rem;
  }
`;

export const Type = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.black};

  @media(max-width: 320px) {
    width: 28px;
    height: 32px;
  }

  @media(min-width: 768px) {
    width: 42px;
    height: 56px;
    border-width: 2px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 2rem;
      height: 2.5rem;
    }
  }

  @media(min-width: 1280px) {
    width: 42px;
    height: 56px;
    border-width: 2px;
  }
`;

export const Keyboard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  background-color: ${props => props.theme["gray-300"]};
  padding: 14px;

  @media(min-width: 768px) {
    gap: 14px;
    padding: 12px 42px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.5rem;
      padding: 0.75rem 2.625rem;
    }
  }

  @media(min-width: 1280px) {
    gap: 14px;
    padding: 12px 42px;
  }
`;

export const Keys = styled.button`
  all: unset;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    scale: 1.05;
    border-color: ${props => props.theme["gray-600"]}
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media(max-width: 320px) {
    width: 28px;
    height: 28px;
    border-radius: 6px;
  }

  @media(min-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 2rem;
      height: 2rem;
      font-size: 0.875rem;
    }
  }

  @media(min-width: 1280px) {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.5rem;
  }
`;

export const AreaFooter = styled.div`
  width: 300px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 250px;
    height: 52px;
  }

  @media(min-width: 768px) {
    width: 37.5rem;
    height: 6.25rem;
    border-width: 4px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 600px;
      height: 52px;
      border-width: 2px;
    }
  }

  @media(min-width: 1280px) {
    width: 75rem;
    height: 6.25rem;
    border-width: 4px;
  }
`;

export const ButtonTask = styled.button`
  all: unset;
  width: 250px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom-width: 3px;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 24px;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 200px;
    height: 32px;

    p {
      font-size: 16px;
    }
  }

  @media(min-width: 768px) {
    width: 400px;
    height: 44px;

    p {
      font-size: 32px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 32px;
      border-radius: 6px;

      p {
        font-size: 18px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 400px;
    height: 44px;

    p {
      font-size: 32px;
    }
  }
`;