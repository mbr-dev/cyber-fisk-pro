import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.25rem;
  padding: 1rem;
  background-color: ${props => props.theme["gray-200"]};
  border-end-end-radius: 24px;
  border-end-start-radius: 24px;
  
  @media(max-width: 320px) {
    padding: 0.5rem 1rem;
    padding-bottom: 0;
    border-end-end-radius: 18px;
    border-end-start-radius: 18px;
  }
`;

export const Avatar = styled.div`
  width: 7rem;
  display: flex;
  bottom: -10px;
  flex-direction: column;
  align-items: center;
  padding-top: 0.5rem;
  background-color: ${props => props.theme.white};
  border-radius: 10px;
  border: 1px solid ${props => props.theme["red-200"]};
  position: relative;

  img {
    width: 80%;
  }

  p {
    width: 9rem;
    position: absolute;
    bottom: -18px;
    text-align: center;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media(max-width: 320px) {
    width: 6rem;
    bottom: 5px;

    img {
      width: 70%;
    }

    p {
      width: 8rem;
      position: absolute;
      font-size: 0.75rem;
      bottom: -15px;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  padding-block: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.375rem;
    margin-bottom: 0.5rem;
  }

  @media(max-width: 320px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;