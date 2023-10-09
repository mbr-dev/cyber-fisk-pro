import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1rem 0 1rem;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const AreaAvatar = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  h2 {
    margin-top: 1.25rem;
    font-size: 1.75rem;
    font-weight: bold;
  }

  img {
    width: 85%;
    position: absolute;
    z-index: -1;
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
`;

export const AreaXp = styled.section`
  width: 100%;
  background-color: ${props => props.theme["gray-200"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-block: 1rem;
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
`;

export const LineSeparator = styled.div`
  width: 18.75rem;
  height: 1.5px;
  background-color: ${props => props.theme["gray-400"]};
`;

export const AreaInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
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
`;

export const AreaInfoBottom = styled.div`
  border: 1px solid ${props => props.theme.black};
  padding: 0.5rem 2rem;
  border-radius: 8px;
`;