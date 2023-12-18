import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding: 0.625rem;
    }
  }
`;

export const AvatarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  p {
    font-weight: bold;
    font-size: 1.25rem;
  }

  @media(max-width: 320px) {
    gap: 0.625rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    gap: 1rem;

    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      display: none;
    }
  }
`;

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme["red-200"]};
  padding-top: 26px;
  overflow: hidden;
  
  @media (min-width: 768px) {
    width: 4.5rem;
    height: 4.5rem;
    padding-top: 46px;
  }
`;

export const AvatarInfo2 = styled.div`
  display: none;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 250px;
      height: 3.625rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      border-radius: 8px;
      box-shadow: 0px 4px 10px 0px #00000033;

      p {
        font-weight: bold;
        font-size: 14px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 37.5rem;
    height: 5.375rem;
    gap: 1.5rem;
    border-radius: 12px;

    p {
      font-size: 2rem;
    }
  }
`;

export const Avatar2 = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 28px;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme["red-200"]};
  overflow: hidden;
  
  @media (min-width: 1024px) {
    width: 4.5rem;
    height: 4.5rem;
    padding-top: 48px;
  }
`;

export const XP = styled.div`
  width: 100%;
  height: 3.625rem;
  padding-inline: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  background-color: ${props => props.theme["gray-100"]};

  .compose {
    font-size: 20px;
    font-weight: 700;
  }

  @media(max-width: 320px) {
    height: 36px;

    .compose {
      font-size: 16px;
    }
  }

  @media(min-width: 768px) {
    height: 4rem;

    .compose {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 2rem;

      .compose {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1024px) {
    height: 4.5rem;

    .compose {
      font-size: 1.5rem;
    }
  }
`;

export const AreaSelect = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 20px;

  @media(max-width: 320px) {
    padding-top: 14px;
    gap: 14px;
  }

  @media(min-width: 768px) {
    padding-top: 32px;
    gap: 32px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 650px;
      padding-top: 8px;
      gap: 8px;
    }
  }
  
  @media(min-width: 1024px) {
    width: 700px;
    padding-top: 16px;
    gap: 16px;
  }

  @media(min-width: 1366px) {
    padding-top: 24px;
    gap: 24px;
  }

  @media(min-width: 1920px) {
    padding-top: 32px;
    gap: 32px;
  }
`;

export const Select = styled.div`
  width: 18.75rem;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;

  @media(max-width: 320px) {
    width: 15.625rem;
  }

  @media(min-width: 768px) {
    width: 25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 18.75rem;
    }
  }

  @media(min-width: 1024px) {
    width: 31.25rem;
  }

  @media(min-width: 1366px) {
    width: 600px;
  }
`;

export const SelectTitle = styled.div`
  width: 100%;
  height: 2.625rem;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
  border: 2px solid ${props => props.theme["gray-700"]};
  border-radius: 8px;
  gap: 0.625rem;
  background-color: ${props => props.theme["gray-200"]};
  color: ${props => props.theme["gray-700"]};

  p {
    flex: 1;
    font-size: 1.125rem;
  }

  img {
    width: 18px;
  }

  @media(max-width: 320px) {
    height: 2rem;
  }

  @media(min-width: 768px) {
    height: 3.5rem;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 28px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 2rem;

      p {
        font-size: 1.125rem;
        font-weight: 500;
      }

      img {
        width: 16px;
      }
    }
  }

  @media(min-width: 1024px) {
    height: 4rem;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 28px;
    }
  }
`;

export const SelectUl = styled.ul`
  width: 18.75rem;
  position: absolute;
  z-index: 100;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-inline: 1.125rem;
  gap: 0.75rem;
  background-color: ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 15.625rem;
    padding: 0.625rem;
  }

  @media(min-width: 768px) {
    width: 25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 18.75rem;
      padding: 0.75rem;
    }
  }

  @media(min-width: 1024px) {
    width: 31.25rem;
    padding-inline: 44px;
    gap: 1.25rem;  
  }

  @media(min-width: 1366px) {
    width: 600px;  
  }
`;

export const SelectLi = styled.li`
  width: 100%;
  list-style: none;
  color: ${props => props.theme["gray-700"]};
  font-weight: 500;

  &:hover {
    background-color: ${props => props.theme["gray-400"]};
  }

  @media(min-width: 768px) {
    font-size: 1.75rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      font-size: 1rem;
    }
  }

  @media(min-width: 1024px) {
    font-size: 1.75rem;
  }
`;