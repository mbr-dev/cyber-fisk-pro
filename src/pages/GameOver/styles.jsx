import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme["blue-200"]};
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 0 1rem;

  @media(max-width: 320px) {
    padding: 0.5rem 0.5rem 0 0.5rem;
  }
`;

export const AreaAvatar = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  h2 {
    font-size: 1.75rem;
    font-weight: bold;
    color: ${props => props.theme.white};
  }

  img {
    width: 85%;
    position: absolute;
    z-index: -1;
  }

  @media(max-width: 320px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    padding: 0.25rem 1rem;
    border-radius: 8px;
    font-weight: 500;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    p {
      font-size: 0.875rem;
    }
  }
`;

export const AvatarImg = styled.div`
  width: 120px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0px 4px 100px 0px #E6E6E6;

  img {
    width: 100px;
    z-index: 1;
    margin-top: 0.125rem;
  }

  @media(max-width: 320px) {
    width: 100px;
    height: 90px;

    img {
      width: 80px;
      margin-top: 0.25rem;
    }
  }
`;

export const AreaXp = styled.section`
  width: 100%;
  background-color: ${props => props.theme["gray-200"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 1rem;

  @media(max-width: 320px) {
    padding-block: 0.5rem;
  }
`;

export const AreaXpInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  img {
    width: 54px;
    margin-right: 2rem;
  }

  span {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    padding: 0.5rem;
    border-radius: 6px;
  }

  p {
    font-size: 1.125rem;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    img {
      width: 42px;
      margin-right: 1rem;
    }

    span {
      padding: 0.375rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;

  @media(max-width: 320px) {
    padding-block: 0.25rem;
  }
`;

export const AreaInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  p {
    font-size: 1.125rem;
    font-weight: 500;
  }

  span {
    font-size: 1.125rem;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    padding: 0.5rem 2.5rem;
    border-radius: 6px;
    border: 1px solid ${props => props.theme["red-300"]};
    border-bottom: 4px solid ${props => props.theme["red-300"]};
    margin-bottom: 0.125rem;
  }

  @media(max-width: 360px) {
    gap: 0.5rem;
  }

  @media(max-width: 320px) {
    margin-top: 0.25rem;
    gap: 0.25rem;

    p {
      font-size: 1rem;
    }

    span {
      font-size: 1rem;
      padding: 0.25rem 1.5rem;
      margin-bottom: 0;
    }
  }
`;

export const AreaInfoBottom = styled.div`
  border: 1px solid ${props => props.theme.black};
  padding: 0.5rem 2rem;
  border-radius: 8px;
  margin-top: 1rem;
  opacity: 0.3;

  @media(max-width: 360px) {
    margin-top: 0.5rem;
  }

  @media(max-width: 320px) {
    margin-top: 0;
    padding: 0.25rem 1.5rem;

    p {
      font-size: 0.875rem;
    }
  }
`;

export const AreaButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }
`;